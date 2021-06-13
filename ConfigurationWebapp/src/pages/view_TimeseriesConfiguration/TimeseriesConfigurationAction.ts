
import {getRequest} from '../common/RequestHelper';

import { Dispatch } from 'react-redux';
import { DefaultApi, TimeseriesViewConfiguration } from '../../util/configuration';
import {ADD_TIMESERIES_CONFIGURATION_DATA, TIMESERIES_CONFIGURATION_DATA} from './TimeseriesConfigurationContainer';

export function onGetAllConfiguration(token: string): any {
    const baseAPI = new DefaultApi({accessToken: token});

    return ((dispatch: Dispatch<any>) => {
        const ret  = baseAPI.getAllTimeseriesConfigurations();
        ret.then((value: any) => {
            console.log('Alle Configurationen abrufen');
            dispatch( {
                rootData: value,
                type: TIMESERIES_CONFIGURATION_DATA,
                undefined,
            });
        }).then((reason: any) => {
            console.log('Dein Hammer ist kaputt!!!');
        });
    });
}

export function onAddNewTimeseriesConfiguration(token: string, configuration: TimeseriesViewConfiguration): any {
    const baseAPI = new DefaultApi({accessToken: token});

    return ((dispatch: Dispatch<any>) => {
        const ret  = baseAPI.putTimeseriesConfigurationByName(configuration.name, configuration);
        ret.then((value: any) => {
            console.log('Hinzufuegen einer neuen Configuration');
            dispatch( {
                rootData: value,
                type: ADD_TIMESERIES_CONFIGURATION_DATA,
                undefined,
            });
        }).then((reason: any) => {
            console.log('Dein Hammer ist kaputt!!!');
        });
    });
}

export function onDeleteTimeseriesConfiguration(token: string, configurationName: string): any {
    const baseAPI = new DefaultApi({accessToken: token});

    return ((dispatch: Dispatch<any>) => {
        const ret  = baseAPI.deleteTimeseriesConfigurationByName(configurationName);
        ret.then((value: any) => {
            console.log('Loeschen einer Configuration');
            dispatch( {
                rootData: value,
                type: ADD_TIMESERIES_CONFIGURATION_DATA,
                undefined,
            });
        }).then((reason: any) => {
            console.log('Dein Hammer ist kaputt!!!');
        });
    });
}
