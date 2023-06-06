import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BreedComponent } from './breed/breed.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { CartComponent } from './cart/cart.component';
import { PetregisterComponent } from './petregister/petregister.component';
import { VeterinarianComponent } from './veterinarian/veterinarian.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = 
[
{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register',  component:RegisterComponent},
{path:'admin', canActivate:[AuthGuard],   component:AdminComponent},
{path:'home', canActivate:[AuthGuard],  component:HomeComponent},
{ path: 'breed', component: BreedComponent },
{path: 'dog',  canActivate:[AuthGuard], component : DogComponent},
{path: 'cat',  canActivate:[AuthGuard],component: CatComponent},
{path:'cart',   canActivate:[AuthGuard],  component:CartComponent},
{path: 'petregister',component:PetregisterComponent},
{path: 'veterinarian',component:VeterinarianComponent},
{path:'showcustomers', component:ShowcustomersComponent},
{path:'reviews',component:ReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
