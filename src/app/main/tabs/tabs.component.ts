import { Component } from '@angular/core';

export interface TabItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabs: TabItem[] = [
    { label: 'One', icon: 'icon', route: 'one' },
    { label: 'Two', icon: 'icon', route: 'two' }
  ]
}
