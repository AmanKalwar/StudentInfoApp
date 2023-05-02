import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudents } from './students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = "assets/students.json";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudents[]>{
    return this.http.get<IStudents[]>(this.studentUrl);
  }
}
