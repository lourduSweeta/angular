import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from '../home-service.service'
import { Student } from '../home';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student :Student = {id:null,name:'',email:'',description:''};
  constructor(public homeService:HomeServiceService) { }

  ngOnInit(): void {
  }

  public createStudent(){
    console.log(this.student,name);
    this.homeService.createStudent(this.student);
    this.student= {id:null,name:'',description:'',email:''}
  }
}
