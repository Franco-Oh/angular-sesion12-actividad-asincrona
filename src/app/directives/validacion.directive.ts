import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appValidacion]'
})
export class ValidacionDirective implements OnInit{

  constructor(private me:ElementRef) {
  }

  @Input() color = 'red';

  ngOnInit(): void {
    console.log(this.me);
    this.me.nativeElement.style.color = this.color;
  }

}
