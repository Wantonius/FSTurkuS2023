import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about.component';
import { Home } from './components/home.component';
import { Secret } from './components/secret.component';

const routes: Routes = [
{
	path:"",component:Home
},{
	path:"about",component:About
},{
	path:"secret",component:Secret
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
