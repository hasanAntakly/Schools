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

	selectedValue = '';

  ngOnInit(): void {
  }

	SYItems: SYITEMS[] =[
		{Year: '2020/2021'},
		{Year: '2021/2022'},
		{Year: '2022/2023'},
		{Year: '2023/2024'},
		{Year: '2020/2021'},
		{Year: '2021/2022'},
		{Year: '2021/2022'},
		{Year: '2021/2022'},
		{Year: '2021/2022'},
		{Year: '2021/2022'},
		{Year: '2021/2022'},
	];
	
	ELItems: ELITEMS[] =[
		{EL: '1st Grade'},
		{EL: '2nd Grade'},
		{EL: '3ed Grade'},
		{EL: '4th Grade'},
		{EL: '5th Grade'},
		{EL: '6th Grade'},
		{EL: '7th Grade'},
		{EL: '8th Grade'},
		{EL: '9th Grade'},
		{EL: '10th Grade'},
		{EL: '11th Grade'},
	];
}

class SYITEMS {  
	Year = '';  
}  

class ELITEMS {  
	EL = '';  
}  
