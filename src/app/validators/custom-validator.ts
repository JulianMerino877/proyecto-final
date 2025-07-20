import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(passwordKey);
    const confirm = formGroup.get(confirmPasswordKey);
    if (password && confirm && password.value !== confirm.value) {
      confirm.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      if (confirm?.errors && confirm.errors['passwordMismatch']) {
        confirm.setErrors(null);
      }
      return null;
    }
  };
}