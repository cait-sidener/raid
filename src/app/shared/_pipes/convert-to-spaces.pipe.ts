import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform {
    transform(value: any, character: string): string {
        return value.replace(character, ' ');
    }
}