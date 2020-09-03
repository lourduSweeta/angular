import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/home'},
  { path:'home', component:HomeComponent },
  { path:'student-list', component:StudentListComponent },
  { path:'student-create', component:StudentCreateComponent },
  {path:'course-list',component:CourseListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
