import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {getMongoConfig} from "./configs/mongo.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'environments/.profile.env',
    }),
    UserModule,
    AuthModule,
    MongooseModule.forRootAsync(getMongoConfig())
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
