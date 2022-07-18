import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

constructor(private http: HttpClient){}

  resourcePath = "/my/example";
  invocationMethod = "GET";
  invocationResult = "";

  ngOnInit(): void {
    console.log("Initialized app component")
  }

  invokeResource(): void {
    console.log("Invoking resource: " + this.invocationMethod + " " + this.resourcePath);
    this.invocationResult = "";
    switch (this.invocationMethod) {
      case "GET":
        this.manageInvocation(this.http.get(this.resourcePath, {responseType: 'text'}).toPromise())
        break;
      case "POST":
        this.manageInvocation(this.http.post(this.resourcePath,{}, {responseType: 'text'}).toPromise())
        break;
      case "PUT":
        this.manageInvocation(this.http.put(this.resourcePath,{}, {responseType: 'text'}).toPromise())
        break;
      case "DELETE":
        this.manageInvocation(this.http.delete(this.resourcePath,{responseType: 'text'}).toPromise())
        break;
    
      default:
        break;
    }
  }

  manageInvocation (promise : Promise<Object>) : void {
    promise
    .then((response)=>{
      console.log("Received response: "+JSON.stringify(response,null,4));
      this.invocationResult = JSON.stringify(response,null,4);
    })
    .catch((error)=>{
      console.log("Stumbled into error: "+JSON.stringify(error,null,4));
      this.invocationResult = JSON.stringify(error,null,4);
    });
  }
}
