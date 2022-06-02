import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { IProfileService } from './content/services/viwemodels/profile.viwemodel';
import { HttpClientModule } from '@angular/common/http';
import { TestProfileService } from './content/services/test-profile.service';
import { ApiProfileService } from './content/services/api-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ContentComponent }
    ])
  ],
  providers: [{
    provide: IProfileService,
    useClass: TestProfileService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
