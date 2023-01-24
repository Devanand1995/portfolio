import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { ContactComponent } from './component/contact/contact.component';
import { EducationComponent } from './component/education/education.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { VisionComponent } from './component/vision/vision.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectComponent } from './component/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    VisionComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
