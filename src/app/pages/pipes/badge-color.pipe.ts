import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'badgeColor'
})
export class BadgeColorPipe implements PipeTransform {


  transform(index: number): string {

    if(index % 2 == 0){
      return 'badge badge-success mr-1';
    }else{
      return 'badge badge-primary mr-1';
    }
  }

}
