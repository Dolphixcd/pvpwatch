import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeContainerComponent } from './app/home/home-container/home-container.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'home',
        component: HomeContainerComponent
      }
    ])
  ],
}).catch((err) => console.error(err));
