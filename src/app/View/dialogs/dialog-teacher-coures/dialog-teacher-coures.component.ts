import { Component, OnInit } from '@angular/core';
import { faChalkboardTeacher, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-teacher-coures',
  templateUrl: './dialog-teacher-coures.component.html',
  styleUrls: ['./dialog-teacher-coures.component.css']
})
export class DialogTeacherCouresComponent implements OnInit {

  constructor() { }

	faT = faTimes;
	faC = faCheck;
	faCT = faChalkboardTeacher;

  ngOnInit(): void {
  }

}
