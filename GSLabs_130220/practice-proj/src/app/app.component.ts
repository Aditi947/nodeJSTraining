import { Component } from '@angular/core';

@Component({
  selector: 'app-root01',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Andromeda';
  age = 36;
  addServerEnabled = false;
  serverAddStatus = "No server added";
  serverAdd = false;
  currentRoute = 1;
  serverAdded(){
    this.serverAddStatus = "A server has been added. Server name is: "+this.name;
    this.serverAdd = true;
  }
  // changeServerName(e){
  //   console.log(e.target.value);
  //   this.name = e.target.value;
  // }
  // checkEnabled(){
  //   let test = Math.random();
  //   if (test>.5)
  //     {return true}
  //   return false
  // }
}
