import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthInterceptor } from './authentication-modules/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './State/metareducer';
import { SupplierpageConfigSettingReducerF } from './State/reducer/SupplierPageSeeting.reducer';
import { CustomerpageConfigSettingReducerF } from './State/reducer/CustomerPageSetting.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const firebaseConfig = {
  apiKey: "AIzaSyBGmPknD-eJE0nCvtYIs2KLlqLBwrJdF_Y",
  authDomain: "ecomm-17.firebaseapp.com",
  projectId: "ecomm-17",
  storageBucket: "ecomm-17.firebasestorage.app",
  messagingSenderId: "815304009271",
  appId: "1:815304009271:web:d0f699d6acdd0fa58a81b2",
  measurementId: "G-0PPY2B1159"
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig), // Initialize Firebase
    AngularFireAuthModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('SupplierPageConfig', SupplierpageConfigSettingReducerF),
    StoreModule.forFeature('CustomerPageConfig', CustomerpageConfigSettingReducerF),
    StoreDevtoolsModule.instrument({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
