import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ClientService } from '../client/client.service';
import * as bcrypt from 'bcrypt';
import { SerializedRegisterAuth } from './serializer/register-auth.serializer';
import { plainToClass } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';
import { SerializedLoginAuth } from './serializer/login-auth.serializer';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientService: ClientService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    registerAuthDto: RegisterAuthDto,
  ): Promise<SerializedRegisterAuth> {
    const registerDto = plainToClass(RegisterAuthDto, registerAuthDto);
    const client = await this.clientService.createClient({
      ...registerDto,
      password: await bcrypt.hash(registerAuthDto.password, 10),
    });
    return plainToClass(SerializedRegisterAuth, client, {
      excludeExtraneousValues: true,
    });
  }

  async login(loginAuthDto: LoginAuthDto) {
    const client = await this.clientService.findClientByEmail(
      loginAuthDto.email,
    );

    if (!client) throw new UnauthorizedException('email is wrong');

    const isPasswordValid = await bcrypt.compare(
      loginAuthDto.password,
      client.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException('password is wrong');

    const payload = {
      email: client.email,
      role: !client.collaborator ? 'client' : client.collaborator.role,
    };

    const token = await this.jwtService.signAsync(payload);
    return plainToClass(
      SerializedLoginAuth,
      {
        token: token,
        ...client,
        role: !client.collaborator ? 'client' : client.collaborator.role,
      },
      { excludeExtraneousValues: true, enableImplicitConversion: true },
    );
  }

  async profile({ email, rol }: { email: string; rol: string }) {
    return await this.clientService.findClientByEmail(email);
  }
}
