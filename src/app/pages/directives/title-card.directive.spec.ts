import { TitleCardDirective } from './title-card.directive';
import { ElementRef } from '@angular/core';

describe('TitleCardDirective', () => {

  let el: ElementRef<HTMLTitleElement>;

  it('should create an instance', () => {
    const directive = new TitleCardDirective(el);
    expect(directive).toBeTruthy();
  });

});
