import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HousesModule } from './houses/houses.module';
import { MessagesModule } from './messages/messages.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import * as dotenv from 'dotenv';

dotenv.config(); //Cargamos las variables de configuracion

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.DB_URL),
    HousesModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
