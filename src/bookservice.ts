import { Injectable } from '@nestjs/common'

@Injectable()
export class BookService {
  addBook(): string {
    return 'add a book'
  }

  getAllBook(): string {
    return 'all books lelo'
  }

  getBook(): string {
    return 'single book'
  }

  deletebook(): string {
    return 'delete book'
  }
}
