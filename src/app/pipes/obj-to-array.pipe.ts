import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray'
})
export class ObjToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   // //console.log("in Pipe",value)
    let temp:Array<any> = [];
    for( let i in value){
      temp.push(value[i])
    }
    ////console.log(temp)
    return temp;
  }

}
