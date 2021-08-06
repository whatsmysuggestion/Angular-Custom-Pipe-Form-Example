import { Component } from '@angular/core';
import {GenderPipe} from './gender.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	useruname;
	usergender;

	
 onClickSubmit(data) {
	 
	 this.useruname=data.uname;
	 this.usergender=data.gender;
     
	  
   }
}
