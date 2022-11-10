import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Book {
     
    // _id!: String;
    // name!: String;
    // price!: String;
    // description!: String;
    constructor(private http:HttpClient){ }

     getData(listname:any)
     {
         let url= "https://api.nytimes.com/svc/books/v3/lists/current/"+listname+".json?api-key=Ds69y7YFJ1nqYk3PHfTkeKGDAdJYJS1P";
         return this.http.get(url);
    }

    getsidebar()
    {
        let url="https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Ds69y7YFJ1nqYk3PHfTkeKGDAdJYJS1P";
        return this.http.get(url);
    }

    
  
    
}
