import { HomeComponent } from './shared/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: HomeComponent,
    children: [
      {path: 'hits', loadChildren: './modules/hits/hits.module#HitsModule'},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}