import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService ) {}

  create(createUserDto: any) {
    return this.prismaService.user.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: { id }
    });
  }

  update(id: string, updateUserDto: any) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id }
    });
  }
}
