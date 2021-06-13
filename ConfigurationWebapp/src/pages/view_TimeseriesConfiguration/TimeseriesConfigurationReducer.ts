import * as moment from 'moment';

import { TimeseriesViewConfiguration } from '../../util/configuration';
import {cloneObject} from '../../util/store/ObjectUtils';
import {IDispatchObjectExternData, IDispatchObjectInternData} from '../common/RequestHelper';
import { TIMESERIES_CONFIGURATION_DATA } from './TimeseriesConfigurationContainer';

export interface ITimeseriesConfigurationStore {
    data: TimeseriesViewConfiguration[];
    selectedDate: moment.Moment;
}

const initialState: ITimeseriesConfigurationStore = {
    data: [],
    selectedDate: moment(),
};

export function TimeseriesConfigurationReducer(state: ITimeseriesConfigurationStore = initialState, action: IDispatchObjectExternData & IDispatchObjectInternData) {
    const clonedState: ITimeseriesConfigurationStore = cloneObject(state);
    switch (action.type) {
        case TIMESERIES_CONFIGURATION_DATA:
            clonedState.data = action.rootData;
            console.log('TimeseriesConfigurationData recieved: ' + action.rootData);
            return clonedState;
    }
    return state;
}
