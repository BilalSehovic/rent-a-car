import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent implements OnInit {

  public title = "";
  public clicked: boolean = false;
  public reserveShow: boolean = false;
  public danas: Date = new Date();

  constructor(public dialogRef: MatDialogRef<DetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    if (this.data) {
      this.title = this.data.proizvodacVozila + ' ' + this.data.modelVozila;
      this.data.rentOd = isNaN(new Date(this.data.rentOd).getFullYear()) ? null : new Date(this.data.rentOd);
      this.data.rentDo = isNaN(new Date(this.data.rentDo).getFullYear()) ? null : new Date(this.data.rentDo);
    }
  }
  
  public imgLoad(e) {
    // if img width over 30% screen, scale
    if (e.currentTarget.width > Math.round(window.innerWidth*0.3)) {
      this.clicked = true;
    }
  }

  public reserve() {
    this.reserveShow = true;
    console.log(this.data);
  }
}
