import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var splitString = value.split(""); 
    
    var reverseArray = splitString.reverse();
 
    var joinArray = reverseArray.join(""); 
    
    return joinArray; 
  }

}
