import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

transform(data: string): string {
	 

     if(data=="male")
		 return "Welcome Mr"
  	 else if(data=="female")
		 return "Welcome Mrs"
	 else
		 return ""
  	
  }
}
