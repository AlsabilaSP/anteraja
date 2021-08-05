import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Table',
      icon: 'list-outline',
      link: '/',
      expanded: true,
      children: [
        {
          title: 'Sub Table',
          icon: 'arrow-right-outline',
          link: '/table'
        },
      ],
    }
  ];
  
  title = 'anteraja';
}
