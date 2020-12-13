import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL="http://a36af28fb30ec4084a4a5014de5ff0b5-909157535.us-west-1.elb.amazonaws.com:8080/api/students";
  private baseURL1="http://ad3de3f3235b44ffeb697de0e938a11c-1687619857.us-west-1.elb.amazonaws.com:8080/publish";

  constructor(private httpClient: HttpClient) { }

getStudentList():Observable<Student[]>{
  return this.httpClient.get<Student[]>(`${this.baseURL}`);
}

createStudent(student:Student): Observable<Object>{
  return this.httpClient.post(`${this.baseURL1}`,student);
}

getStudentById(id: number):Observable<Student>{
  return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
}

updateStudent(id:number, student:Student): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,student);
}

deleteStudentById(id: number):Observable<Student>{
  return this.httpClient.delete<Student>(`${this.baseURL}/${id}`);
}

}
