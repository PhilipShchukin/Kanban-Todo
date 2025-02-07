import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/generated/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{

    //Удалить 9 сторчку onModuleInit
    onModuleInit() {
    }
    async OnModuleInit(){
        await this.$connect()
    }
  
}