import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  submitted=false;
  student:Student =new Student();
  checkBox1;
  checkBox2;
  checkBox3;
  checkBox4;
  checkBox5;
  checkBox6;
  checkBoxAll='';
  selectedValue:string='Very Likely';
  
  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student=data;
    },error =>console.log(error));
  }

  onSubmit(){
    this.submitted=true;
    if(this.checkBox1 === true){
    this.checkBoxAll+="students"+",";}
    if(this.checkBox2 === true){
    this.checkBoxAll+="location"+",";}
    if(this.checkBox3 === true){
    this.checkBoxAll+="campus"+",";}
    if(this.checkBox4 === true){
    this.checkBoxAll+="atmosphere"+",";}
    if(this.checkBox5 === true){
    this.checkBoxAll+=" dorm rooms"+",";}
    if(this.checkBox6 === true){
    this.checkBoxAll+="sports";}
    this.student.likeMOst=this.checkBoxAll;
    console.log(this.student);
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
      this.goToStudentList();
    }, error =>console.log(error));

  }
  goToStudentList(){
    this.router.navigate(['/students'])
  }

  selectChangeHandler(event:any){
    this.selectedValue=event.target.value;
    this.student.recommend=this.selectedValue;
  }
}

