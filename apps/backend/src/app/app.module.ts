import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserEntity } from './user/entities/user.entity';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class UserModule {}
