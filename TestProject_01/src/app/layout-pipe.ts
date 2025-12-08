import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'layout'
})
export class LayoutPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
