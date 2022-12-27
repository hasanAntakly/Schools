import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
	animations: [
		trigger('PClickedT', [
			// ...
			state('PClicked', style({
				fontSize: '28px',
				left: '42%',
				width: '250px',
				height: '60px',
				borderBottom: 'solid 3px var(--mc)'
			})),
			state('PNotClicked', style({
				fontSize: '15px',
				left: '60%',
				width: '150px',
				height: '40px',
				border: 'solid 1px var(--fg)'
			})),
			transition('PClicked => PNotClicked', [
				animate('0.3s')
			]),
			transition('PNotClicked => PClicked', [
				animate('0.3s')
			]),
		]),
		trigger('SClickedT', [
			// ...
			state('SClicked', style({
				fontSize: '28px',
				left: '32%',
				width: '250px',
				height: '60px',
				borderBottom: 'solid 3px var(--mc)'
			})),
			state('SNotClicked', style({
				fontSize: '15px',
				left: '45%',
				width: '150px',
				height: '40px',
				border: 'solid 1px var(--fg)'
			})),
			transition('SClicked => SNotClicked', [
				animate('0.3s')
			]),
			transition('SNotClicked => SClicked', [
				animate('0.3s')
			]),
		]),
	],
	})

export class HomeComponent implements OnInit {

	faUs = faUsers;
	faUG = faUserGraduate;
	faB = faBookOpen;
	faT = faChalkboardTeacher;

	StudentsNumber = "75";
	GroupsNumber = "3";
	TeachersNumber = "10";

  PClicked = true;
	SClicked = false;
			
	toggleP() {
		this.PClicked = !this.PClicked;
	}
		
	toggleS() {
		this.SClicked = !this.SClicked;
	}

  constructor() { }
	
  ngOnInit(): void {
  }

}
