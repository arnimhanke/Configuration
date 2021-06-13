import { combineReducers } from 'redux';

import { AlertReducer } from '../../pages/alerts/AlertReducer';
import { LoginReducer } from '../../pages/main/LoginReducer';
import { RouteReducer } from '../../pages/router/RouteReducer';
import { SideBarReducer } from '../../pages/sidebar/SideBarReducer';
import { TimeseriesConfigurationReducer } from '../../pages/view_TimeseriesConfiguration/TimeseriesConfigurationReducer';
import { ViewConfigurationReducer } from '../../pages/view_ViewConfiguration/ViewConfigurationReducer';

export const ROOT_REDUCER_LOGOUT = 'USER_LOGOUT';

const AppReducer = combineReducers(
    {
        routeReducer: RouteReducer,
        sideBarReducer: SideBarReducer,
        alertReducer: AlertReducer,
        timeseriesConfigurationReducer: TimeseriesConfigurationReducer,
        viewConfigurationReducer: ViewConfigurationReducer,
        loginReducer: LoginReducer,
    });

export const RootReducer = (state: any, action: any) => {
    if (action.type === ROOT_REDUCER_LOGOUT) {
        state = undefined;
    }
    return AppReducer(state, action);
};
