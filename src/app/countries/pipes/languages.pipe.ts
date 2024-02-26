import { Pipe, PipeTransform } from '@angular/core';
import { Language } from '../interfaces/language.interface';

@Pipe({
  name: 'languages',
})
export class LanguagesPipe implements PipeTransform {
  transform(languagesArray: Language[]): string {
    return languagesArray.map((language) => language.name).join(', ');
  }
}
