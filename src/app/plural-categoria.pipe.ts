import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralCategoria'
})
export class PluralCategoriaPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Eliminar espacios al inicio y final
    value = value.trim();
    // Reglas simples para español
    if (value.endsWith('ista')) {
      return value + 's'; // confecciónista -> confecciónistas
    }
    if (value.endsWith('or') || value.endsWith('ón') || value.endsWith('és')) {
      return value + 'es'; // ingeniero -> ingenieros, profesor -> profesores
    }
    if (value.endsWith('a') || value.endsWith('e') || value.endsWith('i') || value.endsWith('o') || value.endsWith('u')) {
      return value + 's';
    }
    return value + 'es';
  }
}
