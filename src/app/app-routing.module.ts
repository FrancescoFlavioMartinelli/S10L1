import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
  {
    path: 'obs',
    component: ObservableComponent
  },{
    path: 'http-component',
    component: HttpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
