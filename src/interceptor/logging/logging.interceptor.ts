import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import {Observable, tap} from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`Before [${Date.now()}]...${context.getClass().name}.${context.getHandler().name} `);

    const now = Date.now();
    return next
        .handle()
        .pipe(
            tap(() => console.log(`After...${context.getClass().name}.${context.getHandler().name} -  ${Date.now() - now}ms`)),
        );
  }
}
