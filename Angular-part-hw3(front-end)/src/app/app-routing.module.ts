import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:'students', component:StudentListComponent},
  {path:'create-studentForm', component:CreateStudentComponent},
  {path:'', redirectTo:'create-studentForm' , pathMatch:'full'},
  {path:'update-student/:id', component:UpdateStudentComponent},
  {path:'view-student/:id', component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
