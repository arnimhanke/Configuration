
import {getRequest} from '../common/RequestHelper';

import { Dispatch } from 'react-redux';
import { DefaultApi, ViewConfiguration } from '../../util/configuration';
import {ADD_VIEW_CONFIGURATION_DATA, DELETE_VIEW_CONFIGURATION_DATA, VIEW_CONFIGURATION_DATA} from './ViewConfigurationContainer';

export function onGetAllConfiguration(token: string): any {
    const baseAPI = new DefaultApi({accessToken: token});

    return ((dispatch: Dispatch<any>) => {
        const ret  = baseAPI.getAllViewConfigurations();
        ret.then((value: any) => {
            console.log('Held der Daten');
            dispatch( {
                rootData: value,
                type: VIEW_CONFIGURATION_DATA,
                undefined,
            });
        }).then((reason: any) => {
            console.log('Dein Hammer ist kaputt!!!');
        });
    });
}

export function onAddNewViewConfiguration(token: string, configuration: ViewConfiguration): any {
    const baseAPI = new DefaultApi({accessToken: token});

    return ((dispatch: Dispatch<any>) => {
        const ret  = baseAPI.putViewConfigurationByName(configuration.title, configuration);
        ret.then((value: any) => {
            console.log('Hinzufuegen einer neuen Configuration');
            dispatch( {
                rootData: value,
                type: ADD_VIEW_CONFIGURATION_DATA,
                undefined,
            });
        }).then((reason: any) => {
            console.log('Dein Hammer ist kaputt!!!');
        });
    });
}

export function onDeleteViewConfiguration(token: string, configurationName: string): any {
    const baseAPI = new DefaultApi({accessToken: token});

    return ((dispatch: Dispatch<any>) => {
        const ret  = baseAPI.deleteViewConfigurationByName(configurationName);
        ret.then((value: any) => {
            console.log('Loeschen einer Configuration');
            dispatch( {
                rootData: value,
                type: DELETE_VIEW_CONFIGURATION_DATA,
                undefined,
            });
        }).then((reason: any) => {
            console.log('Dein Hammer ist kaputt!!!');
        });
    });
}
