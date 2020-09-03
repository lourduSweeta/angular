import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students;
  selectedStudent;
  
  constructor(public homeService:HomeServiceService) { }

  ngOnInit(): void {
    this.students = this.homeService.getStudents();
  }

  public selectStudent(student){
    this.selectedStudent = student;
    console.log("selected student : "+this.selectedStudent.name);
    
  }

}
