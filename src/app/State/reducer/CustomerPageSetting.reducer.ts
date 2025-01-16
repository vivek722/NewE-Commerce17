import { createReducer, on, State } from "@ngrx/store";
import { CustomerPageSetting  } from "../../shared-modules/helpers/CustomerPageSetting";
import { AddCustomerPageSettings, DeleteCustomerPageSettings, UpdateCustomerPageSettings } from "../action/CustomerPageSetting.action";


export interface pageSetting {
    pageName: string;
    editConfig: boolean,
    deleteConfig: boolean
}


export interface AppState {
    pageSetting: pageSetting[];
}



export const initialState: AppState = {
    pageSetting: CustomerPageSetting
};

export const CustomerPageconfigrationSetting = createReducer(
    initialState,
    on(AddCustomerPageSettings , (state, action) =>{
        const AddCustomerPageSettings = {pageName: action.pageName,PageActive:action.PageActive,IsLoderActive:action.IsLoderActive,IsTosterActive:action.IsTosterActive,IsDeleteDialogActive:action.IsDeleteDialogActive,editConfig: action.editConfig, deleteConfig: action.deleteConfig};
        return {
            ...state,
            pageSetting: [...state.pageSetting, AddCustomerPageSettings]
        }
    }),
    on(UpdateCustomerPageSettings, (state, action) =>{
        const UpdateCustomerPageSettings = {pageName: action.pageName,PageActive:action.PageActive,IsLoderActive:action.IsLoderActive,IsTosterActive:action.IsTosterActive,IsDeleteDialogActive:action.IsDeleteDialogActive,editConfig: action.editConfig, deleteConfig: action.deleteConfig};
        return {
            ...state,
            pageSetting: state.pageSetting.map(PageSettingname => PageSettingname.pageName === action.pageName? UpdateCustomerPageSettings : PageSettingname)
        }
    }),
    on(DeleteCustomerPageSettings, (state, action) =>{
        const DeleteCustomerPageSettings = {pageName: action.pageName,PageActive:action.PageActive,IsLoderActive:action.IsLoderActive,IsTosterActive:action.IsTosterActive,IsDeleteDialogActive:action.IsDeleteDialogActive,editConfig: action.editConfig, deleteConfig: action.deleteConfig};
        return {
            ...state,
            pageSetting: state.pageSetting.map(PageSettingname => PageSettingname.pageName === action.pageName? DeleteCustomerPageSettings : PageSettingname)
        }
    }),

)

export function CustomerpageConfigSettingReducerF(state: any, action: any) {
    return CustomerPageconfigrationSetting(state, action);
}