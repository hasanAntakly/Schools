import { AfterViewInit, Component } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
	
  title = 'schools';
	showFiller = false;
	menuIcon = 'menu';

	faCL = faChartLine;

	public Change_Icon(){
		if(this.menuIcon == 'menu')
			this.menuIcon = 'arrow_back';
		else this.menuIcon = 'menu'; 
	}
}
