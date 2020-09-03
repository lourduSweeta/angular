import { Injectable } from '@angular/core';
import { Course, Student, Institute } from './home';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  institute={name:'Josh Educational Institute'}

  students=[
    {id:101,name:'Alex',email:'alex@gmail.com',description:'Alex description'},
    {id:102,name:'Ana',email:'ana@gmail.com',description:'Ana description'},
    {id:103,name:'Sara',email:'sara@gmail.com',description:'Sara description'},
    {id:104,name:'Jon',email:'jon@gmail.com',description:'Jon description'}
  ];

  courses= [
    { id:1,title:'Java Essential',image:'../../assets/images/java.jpg', description:'Learn Java Concepts for Beginners, Java Basics, OOPS Concepts, Java Collection Framework, Interview Questions'},
    { id:2,title:'Python Essential',image:'../../assets/images/python.jpg', description:'Learn about the essential elements of programming and how to construct basic Python programs. We will cover expressions, variables, functions, logic, and conditionals, which are foundational concepts in computer programming.'},
    { id:3,title:'JavaScript Essential',image:'../../assets/images/javascript.png', description:'Learn how Javascript works, some basic API\'s and finally create a mini project.' },
    { id:4,title:'MEAN Stack Essential',image:'../../assets/images/mean.jpg', description:'Learn how MEAN embraces JavaScript end-to-end using MongoDB for the data layer, Node.js and Express for the server, and AngularJS for client-side applications'}
  ];

  constructor() { }

  public getStudents():Array<Student>
  {
    return this.students;
  }

  public createStudent(student:Student)
  {
    this.students.push(student);
  }

  public getCourses():Array<Course>
  {
    return this.courses;
  }

  public getInstitute():Institute
  {
    return this.institute;
  }
}
