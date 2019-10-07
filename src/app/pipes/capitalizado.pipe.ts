import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class Capitalizado implements PipeTransform {
    
    transform(value: string, todas:boolean = true ):string {
        
        value = value.toLowerCase();

        let nom = value.split(' ');
        if( todas ){
            for( let i in nom ){
                nom[i] = nom[i][0].toUpperCase() + nom[i].substr(1);
            } 
        }else{
            nom[0] = nom[0][0].toUpperCase() + nom[0].substr(1);
        }


        return nom.join(' ');
    }

}