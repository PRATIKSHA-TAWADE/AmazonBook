import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/service/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  sidebarlist:any[]=[]
  books:any[]=[]
  constructor(private book:Book){
    
      this.book.getsidebar().subscribe((data: any)=>{
        // console.warn(data)
         this.sidebarlist=data.results
         console.log(this.sidebarlist)
      })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getbooks(listname:any)
  {
    this.book.getData(listname).subscribe((data: any)=>{
      console.log(data)
      this.books=data.results.books
      console.log(this.books)
    })
  }

}





