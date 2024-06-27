import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Limpeza' : return 'clean_hands';
      case 'Relaxamento' : return 'spa';
    }
    return 'self_improvement';

  }

}
