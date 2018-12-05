import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './web/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { PostCreateComponent } from './web/post-create/post-create.component';
import { HeaderComponent } from './web/header/header.component';
import { LayoutComponent } from './web/layout.component';
import {HttpClientModule} from '@angular/common/http';
import { UtctolocalPipe } from './shared/pipes/utctolocal.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostCreateComponent,
    HeaderComponent,
    LayoutComponent,
    UtctolocalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
