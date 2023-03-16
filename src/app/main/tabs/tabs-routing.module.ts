import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'one',
        loadChildren: () => import('./section-one/section-one.module').then(m => m.SectionOneModule)
      },
      {
        path: 'two',
        loadChildren: () => import('./section-two/section-two.module').then(m => m.SectionTwoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
