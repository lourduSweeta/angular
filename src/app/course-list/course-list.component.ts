import { Component, OnInit } from '@angular/core';
import { Course } from '../home';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
courses:Array<Course> = null;

  constructor(public homeService:HomeServiceService) { }

  ngOnInit(): void {
    this.courses = this.homeService.getCourses();
  }

}
