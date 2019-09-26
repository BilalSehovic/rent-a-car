import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material';
import { isBoolean } from 'util';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('grid', { static: false }) public grid: DxDataGridComponent;
  public carsDS: any[] = [];
  public formInit: boolean = false;
  public searchForm: any = {};
  public viewMode: string = undefined;
  public expanded: boolean = true;
  public tileViewItems: any[] = [];
  public carMakers: any[] = [];

  constructor(@Inject(DataService) public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() { 
    this.carMakers = this.dataService.getCarMakers();
    this.carsDS = this.dataService.getCars();
    this.tileViewItems = this.dataService.getCars();
  }

  public apply() {
    var propCount = 0;
    for (var property in this.searchForm) {
      if (this.searchForm[property]) {
        this.carsDS = this.dataService.getCars().filter(el => el[property] == this.searchForm[property]);
        propCount++;
      }
    }

    if (propCount == 0) {
      this.carsDS = this.dataService.getCars();
    }

    this.viewMode = 'grid';
    this.expanded = false;
  }

  public details(e: any) {
    // show details
    this.dialog.open(DetailsDialogComponent, { width: '80vw', height: '90vh', data: e.data });
  }

  public onInitialized(e)  {
    this.formInit = true;
  }

  public clear()  {
    for (var member in this.searchForm) {
      if (!isBoolean(this.searchForm[member]))
        delete this.searchForm[member];
    }
  }

}
