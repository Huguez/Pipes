import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  
  transform(value: string,  arg:boolean = true /*...args: any[]*/ ): string {
    
    if( !arg ){
      return value
    }
    
    let char = "*";
    let password = "";

    for( let i=0; i< value.length; ++i ){
      password += char; 
    }    
    
    return password;
  }

}
