import { Module } from '@nestjs/common'
import { BookController } from './book.controller'
import { BookService } from './bookservice'
@Module({
  imports: [],
  controllers: [BookController],
  // providers: [{ provide: UserStore, useClass: UserStore }],
  providers: [BookService],
})
export class AppModule {}
