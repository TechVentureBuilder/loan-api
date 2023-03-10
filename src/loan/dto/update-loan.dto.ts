
import { CreateLoanDto } from './create-loan.dto';
import {PartialType} from "@nestjs/mapped-types";

export class UpdateLoanDto extends PartialType(CreateLoanDto) {}
