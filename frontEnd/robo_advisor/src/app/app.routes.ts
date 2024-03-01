import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { Error404Component } from './pages/error404/error404.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

export const routes: Routes = [
  { path: '', title: 'Landing Page', component: LandingPageComponent },
  { path: 'login', title: 'Log-in Page', component: LoginpageComponent },
  { path: 'signup', title: 'Sign-up Page', component: SignUpPageComponent },
  { path: 'formspage', title: 'User form', component: FormComponent },
  { path: 'homepage', title: 'Homepage', component: HomepageComponent },
  { path: 'aboutuspage', title: 'AboutUspage', component: AboutUsPageComponent },
  { path: 'contactuspage', title: 'ContactUspage', component: ContactUsPageComponent },

  { path: '**', title: 'error404', component: Error404Component },
];
