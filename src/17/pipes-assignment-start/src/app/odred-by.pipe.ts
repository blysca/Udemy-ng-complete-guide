import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odredBy',
  pure: false
})
export class OdredByPipe implements PipeTransform {

  transform(value: any[], propName: string): any[] {
    if (propName) {
        return  value.sort((a: any, b: any) => a[propName].localeCompare(b[propName]));
    }
    return null;
  }

}
