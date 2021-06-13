import * as React from 'react';

import { clone } from '../../util/store/ObjectUtils';
import { App } from '../main/App';
import { TimeseriesConfigurationView } from '../view_TimeseriesConfiguration/TimeseriesConfigurationContainer';
import { ViewConfigurationView } from '../view_ViewConfiguration/ViewConfigurationContainer';
import { CHANGE_PAGE_TITLE } from './RouteContainer';

export interface IRegisteredPagesInterface {
    component: React.Component | any;
    path: string;
    showIn: string;
    title: string;
}

export interface IRouteStore {
    mainPage: IRegisteredPagesInterface;
    registeredPages: IRegisteredPagesInterface[];
    titleActivePage: string;
    keycloakInformations: Keycloak.KeycloakInstance;
    token: string;
}

const initialState: IRouteStore = {
    mainPage: {
        component: App,
        path: '/',
        showIn: '',
        title: 'App',
    },
    registeredPages: [{
        component: TimeseriesConfigurationView,
        path: '/timeseriesConfigurationView',
        showIn: 'sidebar',
        title: 'Timeseries Configuration',
    }, {
        component: ViewConfigurationView,
        path: '/viewConfigurationView',
        showIn: 'sidebar',
        title: 'View Configuration',
    }],
    titleActivePage: '',
    keycloakInformations: undefined,
    token: undefined,
};

export function RouteReducer(state: IRouteStore = initialState, action: any) {

    const clonedState = clone(state);
    switch (action.type) {
        case CHANGE_PAGE_TITLE:
            clonedState.titleActivePage = action.data;
            return clonedState;
    }
    return state;
}
