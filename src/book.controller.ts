import { Controller, Delete, Get, Post } from '@nestjs/common'
import { BookService } from './bookservice'

@Controller('/books')
export class BookController {
  constructor(private bookservice: BookService) {
    console.log(this.bookservice)
  }

  @Post('/add')
  addBook(): string {
    return this.bookservice.addBook()
  }

  @Delete('/delete')
  deeleteBook(): string {
    return this.bookservice.deletebook()
  }

  @Get('/gelallbook')
  getAllBook(): string {
    return this.bookservice.getAllBook()
  }

  @Get('/book')
  getSingleBook(): string {
    return this.bookservice.getBook()
  }
}
