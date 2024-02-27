import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isMobileVersion = false;

  navigationRoutes = [
    { path: '/countries', name: 'Home' },
    { path: '/mock1', name: 'mock1' },
    { path: '/mock2', name: 'mock2' },
  ];
  constructor() {}
}
