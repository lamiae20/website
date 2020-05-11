import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [


      {
        path: 'map',
        loadChildren: () => import(`./map/map.module`)
          .then(m => m.MapModule)
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
