import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './web/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { PostCreateComponent } from './web/post-create/post-create.component';
import { HeaderComponent } from './web/header/header.component';
import { LayoutComponent } from './web/layout.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UtctolocalPipe } from './shared/pipes/utctolocal.pipe'
import { AuthInterceptor } from './shared/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NoDoubleClickDirective } from './shared/directive/no-double-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostCreateComponent,
    HeaderComponent,
    LayoutComponent,
    UtctolocalPipe,
    NoDoubleClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,useClass : AuthInterceptor , multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
