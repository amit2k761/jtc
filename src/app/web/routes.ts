import { Routes } from '@angular/router';

import { PostsComponent } from '../web/posts/posts.component';
import { PostCreateComponent } from '../web/post-create/post-create.component';
export const FRONTEND_ROUTES: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'createPosts',
    component: PostCreateComponent
  }]