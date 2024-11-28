import { Directive, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../shared/auth.service'

@Directive({
  selector: '[bmLoggedinOnly]'
})
export class LoggedinOnlyDirective implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(isAuthenticated => {
      //TODO
    });
   }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
