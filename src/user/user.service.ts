import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// @ts-ignore
import PocketBase from "pocketbase/cjs"

@Injectable()
export class UserService {
  private _authenticated: boolean = false;

  pb = new PocketBase(`${process.env.POCKETBASE_URL}`);



  async authUser(credentials: { email: string; password: string }) {
    return await this.pb.collection('users').authWithPassword(credentials.email, credentials.password);
  }

  async authRefresh() {
     await this.pb.collection('users').authRefresh();
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
