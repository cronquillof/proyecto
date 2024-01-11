import { Request } from 'express';
export interface RequestWithClient extends Request {
  client: {
    email: string;
    role: string;
  };
}
