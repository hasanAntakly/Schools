import { Component, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor() { }

	faT = faTimes;
	faC = faCheck;

  ngOnInit(): void {
  }

}
