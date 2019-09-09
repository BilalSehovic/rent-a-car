import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { BookedConfirmationComponent } from './booked-confirmation/booked-confirmation.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'booked-confirmation',
        component: BookedConfirmationComponent
      }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
