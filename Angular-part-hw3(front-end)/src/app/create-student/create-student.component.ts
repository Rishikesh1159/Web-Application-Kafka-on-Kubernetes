import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student:Student=new Student();
  checkBox1;
  checkBox2;
  checkBox3;
  checkBox4;
  checkBox5;
  checkBox6;
  checkBoxAll='';
  selectedValue:string='Very Likely';
  submitted=false;
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe(data =>{
      console.log(data);
      this.goToStudentList();
    }, error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students'])
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
    this.checkBoxAll+="sports"+",";}
    this.student.likeMOst=this.checkBoxAll;
    if(this.student.interest==null){
      this.student.interest="Not Selected";
    }
    if(this.student.recommend==null){
      this.student.recommend="Very Likely";
    }
    if(this.checkBoxAll==""){
      this.student.likeMOst="Not Selected";
    }
    console.log(this.student);
    this.saveStudent();

  }

  selectChangeHandler(event:any){
    this.selectedValue=event.target.value;
    this.student.recommend=this.selectedValue;
    
  }
}
