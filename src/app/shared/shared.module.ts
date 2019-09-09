import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatRadioModule, MatSelectModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatExpansionModule, MatStepperModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
