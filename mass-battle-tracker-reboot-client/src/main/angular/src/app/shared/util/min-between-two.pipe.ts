import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minBetweenTwo'
})
export class MinBetweenTwoPipe implements PipeTransform {

  transform(arg1: number, arg2: number): unknown {
    return Math.min(arg1, arg2);
  }

}
