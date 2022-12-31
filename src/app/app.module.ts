import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './View/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogOpenGroupsComponent } from './View/dialogs/dialog-open-groups/dialog-open-groups.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogNotReadyComponent } from './View/dialogs/dialog-not-ready/dialog-not-ready.component';
import { DialogExamsTodayComponent } from './View/dialogs/dialog-exams-today/dialog-exams-today.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogOpenGroupsComponent,
    DialogNotReadyComponent,
    DialogExamsTodayComponent,
  ],
	entryComponents: [
		DialogOpenGroupsComponent,
		DialogNotReadyComponent,
		DialogExamsTodayComponent,
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
  	FontAwesomeModule,
		MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
