import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxBetweenTwo'
})
export class MaxBetweenTwoPipe implements PipeTransform {

  transform(arg1: number, arg2: number): unknown {
    return Math.max(arg1, arg2);
  }

}
