import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	faUs = faUsers;
	faUG = faUserGraduate;
	faB = faBookOpen;
	faT = faChalkboardTeacher;

	StudentsNumber = "75";
	GroupsNumber = "3";
	TeachersNumber = "10";

  constructor() { }

  ngOnInit(): void {
  }

}
