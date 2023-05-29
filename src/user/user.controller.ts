import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async CreateUser(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
