import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudents } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  pageTitle: string = "Students Information";

  public StudentsInfo :IStudents[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList(){
    this.studentService.getStudents().subscribe((data =>{
      this.StudentsInfo = data;
      console.log(data);
    }));
  }
}
