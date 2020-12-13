import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  student:Student =  new Student();
  id:number;

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student=data;
    },error =>console.log(error));
  }

  redirectTo(){
    this.router.navigate(['/students']);
  }

}
