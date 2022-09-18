import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
    /*
    // NGXS incompatible with current version of Ivy
    NgxsModule.forRoot([], {
      developmentMode: !environment.productio
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    })
  */
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
