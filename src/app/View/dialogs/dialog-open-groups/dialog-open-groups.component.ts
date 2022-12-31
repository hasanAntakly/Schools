import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-open-groups',
  templateUrl: './dialog-open-groups.component.html',
  styleUrls: ['./dialog-open-groups.component.css'],
	animations: [
		trigger('HideTrigger', [
			// ...
			state('Hide', style({
			})),
			state('DontHide', style({
				height: '0px',
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
export class DialogOpenGroupsComponent implements OnInit {

	faT = faTimes;
	faAL = faArrowLeft;
	faF = faFrown;

	PickedSE = false;
	
	ClickedYear = '';
	ClickedEduLvl = '';

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

	th52021: NumStuLft[] = [
		{Name: 'A', Number: '10'},
		{Name: 'B', Number: '7'},
		{Name: 'C', Number: '12'},
		{Name: 'A', Number: '10'},
		{Name: 'B', Number: '7'},
		{Name: 'C', Number: '12'},
		{Name: 'A', Number: '10'},
		{Name: 'B', Number: '7'},
		{Name: 'C', Number: '12'},
		{Name: 'A', Number: '10'},
		{Name: 'B', Number: '7'},
		{Name: 'C', Number: '12'},
		{Name: 'A', Number: '10'},
		{Name: 'B', Number: '7'},
		{Name: 'C', Number: '12'},
	]

	th72022: NumStuLft[] = [
		{Name: 'A', Number: '2'},
		{Name: 'B', Number: '6'},
	]

	ListShow: NumStuLft[] = [];

  constructor() { }

  ngOnInit(): void {
  }

	yearClicked(year: string){
		this.ClickedYear = year;
	}

	BackyearClicked(){
		this.ClickedYear = '';
	}

	eduClicked(EL: string){
		this.ClickedEduLvl = EL;
	}

	BackEduLvlClicked(){
		this.ClickedEduLvl = '';
	}

	DoneClicked(){
		if(this.ClickedYear == "2020/2021" && this.ClickedEduLvl == '5th Grade'){
			this.ListShow = this.th52021;
		}else if(this.ClickedYear == "2021/2022" && this.ClickedEduLvl == '7th Grade'){
			this.ListShow = this.th72022;
		}
		else{
			this.ListShow = [];
		}
		this.PickedSE = true;
	}

	ChangeClicked(){
		this.PickedSE = false;
	}
}

class NumStuLft {  
	Name = '';
	Number = '';
}  

class SYITEMS {  
	Year = '';  
}  

class ELITEMS {  
	EL = '';  
}  

