import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { from, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export function emailTakenValidator(auth: Auth): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;
    if (!email) {
      return of(null);
    }
    return from(fetchSignInMethodsForEmail(auth, email)).pipe(
      map(methods => (methods && methods.length > 0) ? { emailTaken: true } : null),
      catchError(() => of(null))
    );
  };
}