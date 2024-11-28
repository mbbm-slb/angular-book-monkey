import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[bmConfirm]'
})
export class ConfirmDirective {
  @Input ('bmConfirm') confirmText?: string;
  constructor() { }

}
