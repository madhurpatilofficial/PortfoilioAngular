import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { AcademicsComponent } from './academics/academics.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SmoothScrollService } from 'src/app/smooth-scroll.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollService } from './scroll.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    AcademicsComponent,
    CertificationsComponent,
    ProjectsComponent,
    ExperienceComponent,
    AchievementsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [
    SmoothScrollService,
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
