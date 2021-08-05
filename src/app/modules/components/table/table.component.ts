import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  settings: any;
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  source: LocalDataSource;
  constructor() { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
    this.settings = {
      actions: {
        position: 'right',
        add: false
      },
      columns: {
        id: {
          title: 'ID',
        },
        name: {
          title: 'Full Name',
        },
        username: {
          title: 'User Name',
        },
        email: {
          title: 'Email',
        }
      }
    };
  }

  onClick() {
    this.source.getAll()
  }

}
