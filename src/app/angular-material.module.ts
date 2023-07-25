import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules: any[] = [
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [...modules],  // ...: tömbbe fűzze bele a modules tömböt is
  exports:[...modules]

})
export class AngularMaterialModule { }
