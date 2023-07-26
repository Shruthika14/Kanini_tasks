import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CartComponent } from './Pages/cart/cart.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';



const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
    {
    path:'about',
    component:AboutComponent
  },{
    path:'contact',
    component:ContactComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },{
    path:'home/menu',
    component:MenuComponent
  },
  {
    path:'Cart',
    component:CartComponent

  },{
    path:'menu/:id',
    component:CartComponent
  },{
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
