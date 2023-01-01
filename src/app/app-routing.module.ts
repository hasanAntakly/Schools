import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './View/exam/exam.component';
import { GroupComponent } from './View/group/group.component';
import { HomeComponent } from './View/home/home.component';
import { NotificationComponent } from './View/notification/notification.component';
import { ReportComponent } from './View/report/report.component';
import { StudentComponent } from './View/student/student.component';
import { SubjectComponent } from './View/subject/subject.component';
import { TeacherComponent } from './View/teacher/teacher.component';
import { WeekProgramComponent } from './View/week-program/week-program.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'teacher', component: TeacherComponent },
	{ path: 'subject', component: SubjectComponent },
	{ path: 'student', component: StudentComponent },
	{ path: 'report', component: ReportComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'weekProgram', component: WeekProgramComponent },
	{ path: 'exam', component: ExamComponent },
	{ path: 'group', component: GroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
