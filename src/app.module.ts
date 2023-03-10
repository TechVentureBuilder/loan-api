import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanModule } from './loan/loan.module';
import { InvestorModule } from './investor/investor.module';
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "./interceptor/logging/logging.interceptor";

@Module({
  imports: [
    LoanModule,
    InvestorModule,
    PaymentModule,
    UserModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }],
})
export class AppModule {}
