import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:  'details', component: DetailsComponent},
  { path:  'delete', component: DeleteComponent},
  { path:  'update', component: UpdateComponent},
  { path:  'add', component: AddComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
