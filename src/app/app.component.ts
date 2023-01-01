import { AfterViewInit, Component } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {

	title = 'schools';
	showFiller = false;
	menuIcon = 'menu';

	indicator = 0;

	faCL = faChartLine;
	faCT = faChalkboardTeacher;
	faB = faBook;
	faUG = faUserGraduate;
	faClList = faClipboardList;
	faBe = faBell;
	faCA = faCalendarAlt;
	faBO = faBookOpen;
	faU = faUsers;
	faUS = faUserShield;
	faC = faCog;

	public Change_Icon() {
		if (this.menuIcon == 'menu')
			this.menuIcon = 'arrow_back';
		else this.menuIcon = 'menu';
	}
}
