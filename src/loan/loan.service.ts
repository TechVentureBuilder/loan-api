import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import {UserService} from "../user/user.service";

@Injectable()
export class LoanService {
  constructor(private readonly userService: UserService) {

  }
  async create(createLoanDto: CreateLoanDto) {
    return 'This action adds a new loan';
  }

  async findAll() {
    const resultList = await this.userService.pb.collection('loans').getList(1, 50,{
        filter:'isDeleted != 1',
        expand: 'customerId'
    });
    return resultList;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
