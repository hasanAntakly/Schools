import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { DialogOpenGroupsComponent } from '../dialogs/dialog-open-groups/dialog-open-groups.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogNotReadyComponent } from '../dialogs/dialog-not-ready/dialog-not-ready.component';
import { DialogExamsTodayComponent } from '../dialogs/dialog-exams-today/dialog-exams-today.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
	animations: [
		trigger('PClickedT', [
			// ...
			state('PClicked', style({
				fontSize: '28px',
				width: '250px',
				height: '60px',
				borderBottom: 'solid 3px var(--mc)',
				pointerEvents: 'none'
			})),
			state('PNotClicked', style({
				position: 'absolute',
				fontSize: '15px',
				left: '0',
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
				width: '250px',
				height: '60px',
				borderBottom: 'solid 3px var(--mc)',
				pointerEvents: 'none'
			})),
			state('SNotClicked', style({
				position: 'absolute',
				fontSize: '15px',
				left: '0',
				width: '150px',
				height: '40px',
				border: 'solid 1px var(--fg)',
			})),
			transition('SClicked => SNotClicked', [
				animate('0.3s')
			]),
			transition('SNotClicked => SClicked', [
				animate('0.3s')
			]),
		]),
		trigger('PGridClickedT', [
			// ...
			state('PGridClicked', style({
			})),
			state('PGridNotClicked', style({
				height: '0px',
				opacity: '0'
			})),
			transition('PGridClicked => PGridNotClicked', [
				animate('0.3s')
			]),
			transition('PGridNotClicked => PGridClicked', [
				animate('0.3s')
			]),
		]),
		trigger('SGridClickedT', [
			// ...
			state('SGridClicked', style({
			})),
			state('SGridNotClicked', style({
				height: '0px',
				opacity: '0'
			})),
			transition('SGridClicked => SGridNotClicked', [
				animate('0.3s')
			]),
			transition('SGridNotClicked => SGridClicked', [
				animate('0.3s')
			]),
		]),
	],
	})

export class HomeComponent{

	faUs = faUsers;
	faUG = faUserGraduate;
	faB = faBookOpen;
	faT = faChalkboardTeacher;
	faTO = faTools;

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

  constructor(public matDialog: MatDialog) {}

  openGroupDialog() {
    this.matDialog.open(DialogOpenGroupsComponent ,{
			disableClose: true,
			panelClass: 'custom-modalbox',
		});
  }

	openNotReadyDialog() {
    this.matDialog.open(DialogNotReadyComponent ,{
			disableClose: true,
			panelClass: 'custom-modalbox',
		});
  }

	openExamsTodayDialog() {
    this.matDialog.open(DialogExamsTodayComponent ,{
			disableClose: true,
			panelClass: 'custom-modalbox',
		});
  }

	sthtp: STHTP[] =[  
		{SN : 'Hasan', D : '2022', FAOM : '1500000', MP : '150000', A : '50000'},  
		{SN : 'Ahmad', D : '2023', FAOM : '1800000', MP : '250000', A : '70000'},  
		{SN : 'Jasem', D : '2024', FAOM : '2500000', MP : '350000', A : '90000'},  
		{SN : 'Hasan', D : '2022', FAOM : '1500000', MP : '150000', A : '50000'},  
		{SN : 'Ahmad', D : '2023', FAOM : '1800000', MP : '250000', A : '70000'},  
		{SN : 'Jasem', D : '2024', FAOM : '2500000', MP : '350000', A : '90000'},  
	]  
}

class STHTP {  
	SN = '';  
	D = '';  
	FAOM = '';  
	MP = '';  
	A = '';  
}  
