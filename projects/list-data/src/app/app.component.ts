import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/tools/src/lib/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'list-data';
  listData = [];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getListData();
  }

  getListData(): void {
    this.dataService.getData()
      .subscribe(res => {
        this.listData = res;
      });
  }
}
