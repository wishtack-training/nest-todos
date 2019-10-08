import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { of } from 'rxjs';

export interface UserCredentials {
  email: string;
  password: string;
}

@Controller('tokens')
export class TokensController {
  @Post()
  createToken(@Body() userCredentials: UserCredentials) {
    if (userCredentials.password === '123456') {
      return of({
        token: 'TOKEN_VALUE',
      });
    }
    throw new UnauthorizedException();
  }
}
