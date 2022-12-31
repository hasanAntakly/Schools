import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-exams-today',
  templateUrl: './dialog-exams-today.component.html',
  styleUrls: ['./dialog-exams-today.component.css']
})
export class DialogExamsTodayComponent implements OnInit {

	faT = faTimes;
	faF = faFrown;
	
	exams: Exams[] = [
		{Group: 'A', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'B', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'C', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'D', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'E', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'A', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'B', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'C', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'D', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'E', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'A', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'B', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'C', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'D', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		{Group: 'E', StudyYear: '2020/2021', Subject: 'Math', Time: '09:00Am'},
		
	]


  constructor() { }

  ngOnInit(): void {
  }

}

class Exams {  
	Group = '';
	StudyYear = '';
	Subject = '';
	Time = '';
}  
