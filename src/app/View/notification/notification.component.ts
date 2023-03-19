import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faChalkboardTeacher, faUserGraduate, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
	animations: [
		trigger('HideTrigger', [
			// ...
			state('DontHide', style({
				transform: 'translateY(0)',
				opacity: '1'
			})),
			state('Hide', style({
				transform: 'translateY(-100%)',
				opacity: '0'
			})),
			transition('Hide => DontHide', [
				animate('0.3s')
			]),
			transition('DontHide => Hide', [
				animate('0.3s')
			]),
		]),
		trigger('DoubleHideTrigger', [
			// ...
			state('DontHide', style({
				transform: 'translateY(0)',
				opacity: '1'
			})),
			state('Hide', style({
				transform: 'translateY(100%)',
				opacity: '0',
			})),
			transition('Hide => DontHide', [
				animate('0.3s')
			]),
			transition('DontHide => Hide', [
				animate('0.5s')
			]),
		]),
	]
})
export class NotificationComponent implements OnInit {

  constructor() { }

	Clickedbtn = '';
	ClickedStudentbtn = '';

	faCT = faChalkboardTeacher;
	faC = faCheck;
	faUG = faUserGraduate;

  ngOnInit(): void {
  }


}
