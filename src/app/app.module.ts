import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { workComponent } from './app.work.component';
import { personalComponent } from './app.personal.component';
import { displayComponent } from './app.display.component';
import { MyService } from './app.myservice.service';
import { usersPipe } from './app.pipe';

const appRoutes: Routes = [

      { path: 'work', component: workComponent },
      { path: 'personal', component: personalComponent },
      { path: 'display', component: displayComponent }
    
  
]
@NgModule({
  declarations: [
    AppComponent, workComponent, personalComponent, displayComponent, usersPipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ MyService, usersPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
