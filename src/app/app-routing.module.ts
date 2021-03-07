import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBlogFormComponent } from './create-blog-form/create-blog-form.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newBlog', component: CreateBlogFormComponent, canActivate: [AuthguardService]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
