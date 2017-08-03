import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): String {
    if (!value) {
      return '-';
    }
    const hours: number = Math.floor(value / 3600);
    let minutes: number = Math.floor((value - (hours * 3600)) / 60);
    let seconds: number = value - (hours * 3600) - (minutes * 60);
    return `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
  }

}
