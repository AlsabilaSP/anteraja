import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NbCardModule,
    NbLayoutModule,
    NbIconModule,
    ChartsModule
  ],
  providers: [],
})
export class MainModule { }
