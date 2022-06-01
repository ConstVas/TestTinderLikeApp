import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { IProfileService } from './content/services/profile.viwemodel';
import { TestProfileService } from './content/services/test-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: ContentComponent }
    ])
  ],
  providers: [{
    provide: IProfileService,
    useClass: TestProfileService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
