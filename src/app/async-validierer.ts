import { from, Observable } from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DBService } from './db.service';
import { map } from 'rxjs/operators';
export class AsyncValidierer {

  static AsyncValid(db: DBService) {
    return function(ac: AbstractControl): Observable<null | ValidationErrors> {
      return from(db.getThemeByDescription(ac.value)).pipe(
        map((data) => (data ? null : { crossThemeValidator: true }))
      );
    }

  }
}
