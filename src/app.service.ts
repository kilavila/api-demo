import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EntryDTO } from './dto/entry.dto';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) { }

  status(): string {
    return 'Server online!';
  }

  async create(body: any): Promise<EntryDTO> {
    return await this.prisma.entry.create({
      data: body
    });
  }

  async findAll(): Promise<EntryDTO[]> {
    return await this.prisma.entry.findMany();
  }

  async findOne(id: string): Promise<EntryDTO> {
    return await this.prisma.entry.findUnique({
      where: { id }
    });
  }

  async deleteOne(id: string): Promise<EntryDTO> {
    return await this.prisma.entry.delete({
      where: { id }
    });
  }

}
