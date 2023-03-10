import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {UserService} from "../../user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public readonly userService: UserService) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //check if auth bearer is present
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (authHeader) {
      this.userService.pb.authStore.save(authHeader, { verified: false });
        return true;
    }
    return false;
  }
}
