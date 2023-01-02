import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
	animations: [
		trigger('HideTrigger', [
			// ...
			state('Hide', style({
			})),
			state('DontHide', style({
				width: '0px',
				opacity: '0'
			})),
			transition('Hide => DontHide', [
				animate('0.5s')
			]),
			transition('DontHide => Hide', [
				animate('0.5s')
			]),
		]),
	]
})
export class TeacherComponent implements OnInit {

	faP = faPlus;
	faS = faSearch;
	faC = faCheck;
	faT = faTrash;
	faE = faEdit;

	ClickedSearch = false;
	ClickedID = '';

	Selected = 'P';

  constructor() { }

  ngOnInit(): void {
  }

	ChangeIcon(){
		if(this.faS == faTimes){
			this.faS = faSearch;
		}
		else{
			this.faS = faTimes;
		}
	}

	teachers: Teachers[] = [
		{ID: '0', FirstName: 'hasan', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0957'},
		{ID: '2', FirstName: 'yaman', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0587'},
		{ID: '3', FirstName: 'doks', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '4', FirstName: 'abd', LastName: 'teaher', Gender: 'Male', DOB: '03', Number: '0587'},
		{ID: '5', FirstName: 'hekmat', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '6', FirstName: 'joelle', LastName: 'teaher', Gender: 'Female', DOB: '99', Number: '0587'},
		{ID: '7', FirstName: 'lana', LastName: 'teaher', Gender: 'Female', DOB: '01', Number: '65156'},
		{ID: '0', FirstName: 'hasan', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0957'},
		{ID: '2', FirstName: 'yaman', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0587'},
		{ID: '3', FirstName: 'doks', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '4', FirstName: 'abd', LastName: 'teaher', Gender: 'Male', DOB: '03', Number: '0587'},
		{ID: '5', FirstName: 'hekmat', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '6', FirstName: 'joelle', LastName: 'teaher', Gender: 'Female', DOB: '99', Number: '0587'},
		{ID: '7', FirstName: 'lana', LastName: 'teaher', Gender: 'Female', DOB: '01', Number: '65156'},
		{ID: '0', FirstName: 'hasan', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0957'},
		{ID: '2', FirstName: 'yaman', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0587'},
		{ID: '3', FirstName: 'doks', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '4', FirstName: 'abd', LastName: 'teaher', Gender: 'Male', DOB: '03', Number: '0587'},
		{ID: '5', FirstName: 'hekmat', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '6', FirstName: 'joelle', LastName: 'teaher', Gender: 'Female', DOB: '99', Number: '0587'},
		{ID: '7', FirstName: 'lana', LastName: 'teaher', Gender: 'Female', DOB: '01', Number: '65156'},
		{ID: '0', FirstName: 'hasan', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0957'},
		{ID: '2', FirstName: 'yaman', LastName: 'teaher', Gender: 'Male', DOB: '01', Number: '0587'},
		{ID: '3', FirstName: 'doks', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '4', FirstName: 'abd', LastName: 'teaher', Gender: 'Male', DOB: '03', Number: '0587'},
		{ID: '5', FirstName: 'hekmat', LastName: 'teaher', Gender: 'Male', DOB: '00', Number: '0587'},
		{ID: '6', FirstName: 'joelle', LastName: 'teaher', Gender: 'Female', DOB: '99', Number: '0587'},
		{ID: '7', FirstName: 'lana', LastName: 'teaher', Gender: 'Female', DOB: '01', Number: '65156'},
	]

}

class Teachers {  
	ID = '';  
	FirstName = '';  
	LastName = '';  
	Gender = '';  
	DOB = '';  
	Number = '';  
}  
