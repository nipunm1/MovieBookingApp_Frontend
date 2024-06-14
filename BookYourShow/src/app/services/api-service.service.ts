import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../model/movie';
import movieId from '../model/movieId';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  PATH_OF_API = "http://localhost:8081";

  constructor(
    private http: HttpClient
  ) { }

  requestHeader = new HttpHeaders({ "No-Auth": "True" })

  public register(customer: any) {
    return this.http.post(this.PATH_OF_API + "/register", customer,
      { headers: this.requestHeader, "responseType": "text" });
  }
  public login(loginData: NgForm) {
    return this.http.post(this.PATH_OF_API + "/signIn", loginData,
      { headers: this.requestHeader });
  }
  public search(searchKey: string = "") {
    return this.http.get(this.PATH_OF_API + "/moviebooking/search?searchKeyword=" + searchKey,
      { headers: this.requestHeader });
  }
  public searchByMovieId(movieName:string,theatreName:string) {
    return this.http.get(this.PATH_OF_API + "/moviebooking/search/"+movieName+"/"+theatreName,
      { headers: this.requestHeader });
  }
  public forgotPassword(userName: string, password: string) {
    return this.http.post(this.PATH_OF_API + "/" + userName + "/change", password,
      {
        "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` },
        "responseType": "text"
      }
    );
  }
  public forgot(userName: string, passwordComp: any) {
    return this.http.post(this.PATH_OF_API + "/" + userName + "/forgot", passwordComp,
      { headers: this.requestHeader, "responseType": "text" });
  }

  public addMovie(movie: any) {
    return this.http.post(this.PATH_OF_API + "/moviebooking/addMovie", movie,
      {
        "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` },
        "responseType": "text"
      }
    );
  }

  public deleteMovie(movieName: string, theatreName: string) {
    return this.http.delete(this.PATH_OF_API + "/moviebooking/delete/" + movieName + "/" + theatreName,
      {
        "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` },
        "responseType": "text"
      }
    );
  }

  public updateTicketStatus(id: movieId) {
    return this.http.put(this.PATH_OF_API + "/moviebooking/update", id,
      {
        "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` },
        "responseType": "text"
      }
    );
  }

  public viewTickets() {
    return this.http.get(this.PATH_OF_API + "/moviebooking/viewTickets",
      {
        "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      }
    );
  }

  public bookTicket(ticket:any) {
    return this.http.post(this.PATH_OF_API +"/moviebooking/add",ticket,
    {
      "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` },
      "responseType": "text"
    }
    );
  }

  public getSeatsByMovie(movieName: string, theatreName: string){
    return this.http.get(this.PATH_OF_API+"/getAllSeats/"+movieName+"/"+theatreName,
    {
      "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    }
    );
  }

  public getTicketById(ticketId:number){
    return this.http.get(this.PATH_OF_API+"/moviebooking/ticketById/"+ticketId,
    {
      "headers": { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    }
    );
  }


}