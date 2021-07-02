import { Component,OnInit } from '@angular/core';
import { StakaterHelloService } from './app-service';
import {formatDate} from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello-stakater-ui-app';
  name=""
  
  constructor(private stakaterService: StakaterHelloService) {
  }
  ngOnInit() {
    var date=formatDate(new Date(), 'yyyy/MM/dd hh:mm' , 'en');
    console.log('ng on init called');
    this.stakaterService.getName().subscribe(
      (response) => {       
        console.log('response received')
        var data = response.name; 
        this.name=date+" "+data
        console.log(this.name)
      },
      (error) => {                              
        console.log('In error'+error)
        this.name = error;
      })
  }

  
}
