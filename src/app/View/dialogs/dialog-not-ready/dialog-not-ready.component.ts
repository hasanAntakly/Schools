import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-not-ready',
  templateUrl: './dialog-not-ready.component.html',
  styleUrls: ['./dialog-not-ready.component.css']
})
export class DialogNotReadyComponent implements OnInit {

	faT = faTimes;
	faTO = faTools;
	
  constructor() { }

  ngOnInit(): void {
  }

}
