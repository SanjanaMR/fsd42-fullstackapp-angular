import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';


import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { BreedComponent } from './breed/breed.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { CartComponent } from './cart/cart.component';
import { PetregisterComponent } from './petregister/petregister.component';
import { VeterinarianComponent } from './veterinarian/veterinarian.component';
import { ReviewComponent } from './review/review.component';
import { HeaderComponent } from './header/header.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { CarouselComponent } from './carousel/carousel.component';
// import { SocialLoginModule,SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login/public-api';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    BreedComponent,
    DogComponent,
    CatComponent,
    CartComponent,
    PetregisterComponent,
    VeterinarianComponent,
    ReviewComponent,
    HeaderComponent,
    ShowcustomersComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // SocialLoginModule
    
  ],
  providers: [
  //   {
  //   provide: 'SocialAuthServiceConfig',
  //   useValue: {
  //     autoLogin: false,
  //     providers: [
  //       {
  //         id: GoogleLoginProvider.PROVIDER_ID,
  //         provider: new GoogleLoginProvider(
  //           '114347816233-k7njqvq24ejdgtbmhc5hi37k9fonj9t6.apps.googleusercontent.com'
  //         )
  //       }
  //     ],
  //     onError: (err) => {
  //       console.error(err);
  //     }
  //   }as SocialAuthServiceConfig,
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
