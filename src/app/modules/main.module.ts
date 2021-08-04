import { NgModule } from '@angular/core';
import { NbSidebarModule } from '@nebular/theme';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    NbSidebarModule
  ],
  providers: [],
})
export class MainModule { }
