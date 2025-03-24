import { Component } from '@angular/core';
@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'HelloWorld';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com"
  userName: string= "";
  nameError: String ="";
  ngOnInit(): void {
    this.title = "Hello from bridgelabz.";
  }
  onClick($event: any) : void {
    console.log("Save button is clicked!",$event);
    window.open(this.url,"_blank");
  }
  onInput($event: any){
    console.log("Change Event Occured!",$event.data);
    const nameRegex =RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError ="";
      return;

    }
    this.nameError ="Name is Incoorect!";
  }
}
