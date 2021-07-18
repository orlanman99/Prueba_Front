import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './module/components/location/location.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'location', component: LocationComponent},
  {path: '**', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
