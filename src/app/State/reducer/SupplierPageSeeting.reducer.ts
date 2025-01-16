import { createReducer, on, State } from "@ngrx/store";
import { SupplierInitialPageSetting} from "../../shared-modules/helpers/SupplierPagesetting";
import { AddSupplierPageSettings, DeleteSupplierPageSettings, UpdateSupplierPageSettings } from "../action/SupplierPageSettiing.action";


export interface pageSetting {
    pageName: string;
    editConfig: boolean,
    deleteConfig: boolean
}


export interface AppState {
    pageSetting: pageSetting[];
}



export const initialState: AppState = {
    pageSetting: SupplierInitialPageSetting
};

export const configrationSetting = createReducer(
    initialState,
    on(AddSupplierPageSettings , (state, action) =>{
        const AddSupplierPageSettings = {pageName: action.pageName,PageActive:action.PageActive,IsLoderActive:action.IsLoderActive,IsTosterActive:action.IsTosterActive,IsDeleteDialogActive:action.IsDeleteDialogActive,editConfig: action.editConfig, deleteConfig: action.deleteConfig};
        return {
            ...state,
            pageSetting: [...state.pageSetting, AddSupplierPageSettings]
        }
    }),
     on(UpdateSupplierPageSettings, (state, action) =>{
            const UpdateSupplierPageSettings = {pageName: action.pageName,PageActive:action.PageActive,IsLoderActive:action.IsLoderActive,IsTosterActive:action.IsTosterActive,IsDeleteDialogActive:action.IsDeleteDialogActive,editConfig: action.editConfig, deleteConfig: action.deleteConfig};
            return {
                ...state,
                pageSetting: state.pageSetting.map(PageSettingname => PageSettingname.pageName === action.pageName? UpdateSupplierPageSettings : PageSettingname)
            }
        }),
        on(DeleteSupplierPageSettings, (state, action) =>{
            const DeleteSupplierPageSettings = {pageName: action.pageName,PageActive:action.PageActive,IsLoderActive:action.IsLoderActive,IsTosterActive:action.IsTosterActive,IsDeleteDialogActive:action.IsDeleteDialogActive,editConfig: action.editConfig, deleteConfig: action.deleteConfig};
            return {
                ...state,
                pageSetting: state.pageSetting.map(PageSettingname => PageSettingname.pageName === action.pageName? DeleteSupplierPageSettings : PageSettingname)
            }
        }),
)
export function SupplierpageConfigSettingReducerF(state: any, action: any) {
    return configrationSetting(state, action);
}