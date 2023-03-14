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
import { TeacherComponent } from './View/teacher/teacher.component';
import { SubjectComponent } from './View/subject/subject.component';
import { StudentComponent } from './View/student/student.component';
import { ReportComponent } from './View/report/report.component';
import { NotificationComponent } from './View/notification/notification.component';
import { WeekProgramComponent } from './View/week-program/week-program.component';
import { ExamComponent } from './View/exam/exam.component';
import { GroupComponent } from './View/group/group.component';
import { MatInputModule } from '@angular/material/input';
import { DialogTeacherCouresComponent } from './View/dialogs/dialog-teacher-coures/dialog-teacher-coures.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogOpenGroupsComponent,
    DialogNotReadyComponent,
    DialogExamsTodayComponent,
    TeacherComponent,
    SubjectComponent,
    StudentComponent,
    ReportComponent,
    NotificationComponent,
    WeekProgramComponent,
    ExamComponent,
    GroupComponent,
    DialogTeacherCouresComponent,
  ],
	entryComponents: [
		DialogOpenGroupsComponent,
		DialogNotReadyComponent,
		DialogExamsTodayComponent,
		DialogTeacherCouresComponent
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
  	FontAwesomeModule,
		MatDialogModule,
		MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
