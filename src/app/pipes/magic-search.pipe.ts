import { Pipe, PipeTransform } from '@angular/core';

import { ImageElement } from '../../../interfaces/final-object.interface';

@Pipe({
  name: 'magicSearchPipe'
})
export class MagicSearchPipe implements PipeTransform {

  /**
   * Return only items that match search string
   * @param finalArray
   * @param searchString  the search string
   */
  transform(finalArray: ImageElement[], searchString?: string): ImageElement[] {
    if (searchString === '') {
      return finalArray;
    } else {
      // console.log('magic search pipe working');
      const regex = new RegExp(`\\b${searchString}`, 'i');
      return finalArray.filter(item =>
        regex.test(item.partialPath.toLowerCase())
        || regex.test(item.fileName.toLowerCase())
      );
    }
  }

}
