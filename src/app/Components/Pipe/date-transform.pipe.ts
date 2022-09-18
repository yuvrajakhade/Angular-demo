import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

// const LOCALE = navigator.languages
//   ? navigator.languages[0]
//   : navigator.language || (navigator as any).userLanguage;

// type Formats = 'short' | 'medium' | 'shortDate' | 'fullTime';

// const predefinedFormats: Record<Formats, Intl.DateTimeFormatOptions> = {
//   short: {
//     timeStyle: 'short',
//     dateStyle: 'short',
//   },
//   medium: {
//     timeStyle: 'medium',
//     dateStyle: 'medium',
//   },
//   shortDate: {
//     dateStyle: 'short',
//   },
//   fullTime: {
//     timeStyle: 'full',
//   },
// };

@Pipe({
  name: 'dateTransform',
})
//Predefined Date Formats
// export class DateTransformPipe implements PipeTransform {
//   transform(
//     value: Parameters<Intl.DateTimeFormat['format']>[0],
//     format: Formats = 'short'
//   ) {
//     return new Intl.DateTimeFormat(LOCALE, predefinedFormats[format]).format(
//       value
//     );
//   }
// }
//Customize Date formats
export class DateTransformPipe implements PipeTransform {
  transform(value: any, formatType: string): any {
    const seprator = formatType[formatType.search(/[-/]/g)];
    //Format the date
    let val = moment(value)
      .format(formatType)
      .toString()
      .split(seprator)
      .map((v) => (v.length > 2 ? v : parseInt(v)))
      .join(seprator);
    return moment(value).format(formatType);

    //Format from now like 11 years ago
    // let val = moment(value).fromNow();
    // return val;
  }
}
