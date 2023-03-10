import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import {UserService} from "../user/user.service";

@Module({
  controllers: [LoanController],
  providers: [LoanService, UserService]
})
export class LoanModule {}
