import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confremation-dailog',
  templateUrl: './delete-confremation-dailog.component.html',
  styleUrl: './delete-confremation-dailog.component.css'
})
export class DeleteConfremationDailogComponent {
  message: string = "Are you sure delete this item?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteConfremationDailogComponent>) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
     }
      }
  }

  onConfirmClick() {
   return this.dialogRef.close(true);
  }
  onCancelClick() {
    return this.dialogRef.close(false);
  }
}
