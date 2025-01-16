import { createAction, props } from "@ngrx/store";

export const AddSupplierPageSettings = createAction('AddSupplierPageSettings', props<{ pageName: string,PageActive:string,IsLoderActive:string,IsTosterActive:string,IsDeleteDialogActive:string, editConfig: boolean, deleteConfig: boolean }>());
export const UpdateSupplierPageSettings = createAction('UpdateSupplierPageSettings', props<{ pageName: string,PageActive:string,IsLoderActive:string,IsTosterActive:string,IsDeleteDialogActive:string, editConfig: boolean, deleteConfig: boolean }>());
export const DeleteSupplierPageSettings = createAction('DeleteSupplierPageSettings', props<{ pageName: string,PageActive:string,IsLoderActive:string,IsTosterActive:string,IsDeleteDialogActive:string, editConfig: boolean, deleteConfig: boolean }>());