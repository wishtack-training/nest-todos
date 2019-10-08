import { CanActivate, ExecutionContext, Injectable, ForbiddenException, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.header('Authorization');
    if (authorizationHeader == null) {
      throw new UnauthorizedException();
    }
    const token = authorizationHeader.split(',')[0].split(' ')[1];
    if (token !== 'TOKEN_VALUE') {
      return false;
    }
    return true;
  }
}
