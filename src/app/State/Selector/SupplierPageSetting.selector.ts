import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducer/SupplierPageSeeting.reducer";

const getPageConfigSetting = createFeatureSelector<AppState>('SupplierPageConfig');

export const getPageConfigSettingByPageName = (pageName: string) => createSelector(
    getPageConfigSetting,
    (res: AppState) => {
        if (res) {
            var pageconfig = res.pageSetting.filter(x => x.pageName == pageName);
            return pageconfig;
        }
        return null;
    }
)

export const getPageConfigurationSettinggs = () => createSelector(
    getPageConfigSetting,
    (res: AppState) => {
        return res;
    }
)