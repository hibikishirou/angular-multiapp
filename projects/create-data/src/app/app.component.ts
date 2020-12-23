import { Component } from '@angular/core';
import { DataService } from 'projects/tools/src/lib/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'create-data';

  constructor(private dataService: DataService) { }

  updateData(): void {
    this.dataService.createData()
      .subscribe(res => { });
  }
}
