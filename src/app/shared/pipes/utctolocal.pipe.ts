import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as momenttz from 'moment-timezone';
 @Pipe({
  name: 'utctolocal'
})
export class UtctolocalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let localtime = momenttz.tz(value, 'UTC').tz(momenttz.tz.guess()).format('LLL');
    return localtime;
  }

}
