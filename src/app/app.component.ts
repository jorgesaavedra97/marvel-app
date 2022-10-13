import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cardData: {title: string, path: string}[] = [
    {
      title: 'Heroes',
      path: ''
    },
    {
      title: 'Register Heroes',
      path: '/register'
    },
    {
      title: 'Vehicles',
      path: '/vehicles'
    }
  ];

}
