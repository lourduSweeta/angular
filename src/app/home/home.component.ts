import { Component, OnInit } from '@angular/core';
import {Institute, Course} from '../home';
import {HomeServiceService} from '../home-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

courses:Array<Course> =[];
institute:Institute = null;
    
  constructor(private homeService:HomeServiceService) { }

  ngOnInit(): void {
    this.institute = this.homeService.getInstitute();
    this.courses = this.homeService.getCourses();
  }

}
