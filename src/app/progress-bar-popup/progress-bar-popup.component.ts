import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-progress-bar-popup',
  templateUrl: './progress-bar-popup.component.html',
  styleUrls: ['./progress-bar-popup.component.css']
})
export class ProgressBarPopupComponent {
  uploadProgress = 0
  constructor(
    public dialogRef: MatDialogRef<ProgressBarPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
    
  }
  cancelUpload(){
      
  }

  // Add logic to display the progress bar for the specific file using this.data.fileIndex
  // You can also add a "Cancel" button to close the dialog with a result of 'cancel'
}
