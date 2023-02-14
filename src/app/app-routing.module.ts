import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomerceComponent } from './ecomerce/ecomerce.component';

const routes: Routes = [
  {path: '', component: EcomerceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
