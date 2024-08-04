import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeContainerComponent } from './app/home/home-container/home-container.component';
import { LadderContainerComponent } from './app/ladder/ladder-container/ladder-container.component';
import { CheckplayerContainerComponent } from './app/checkplayer/checkplayer-container/checkplayer-container.component';
import { NotfoundComponent } from './app/notfound/notfound.component';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'home',
        component: HomeContainerComponent
      },
      {
        path: 'ladder/:ladderpage',
        component: LadderContainerComponent
      },
      {
        path: 'checkplayer',
        component: CheckplayerContainerComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ],
    withComponentInputBinding()),
    provideHttpClient()
  ],
}).catch((err) => console.error(err));
