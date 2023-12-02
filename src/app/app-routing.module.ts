import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { AcademicsComponent } from './academics/academics.component';
import { Certificate } from 'crypto';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent
  },
  {
    path: 'certifications',
    component: CertificationsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'achievements',
    component: AchievementsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
