import * as moment from 'moment';

import { ViewConfiguration } from '../../util/configuration';
import { cloneObject } from '../../util/store/ObjectUtils';
import { IDispatchObjectExternData, IDispatchObjectInternData } from '../common/RequestHelper';
import { VIEW_CONFIGURATION_DATA } from './ViewConfigurationContainer';

export interface IViewConfigurationStore {
    data: ViewConfiguration[];
    selectedDate: moment.Moment;
}

const initialState: IViewConfigurationStore = {
    data: [],
    selectedDate: moment(),
};

export function ViewConfigurationReducer(state: IViewConfigurationStore = initialState, action: IDispatchObjectExternData & IDispatchObjectInternData) {
    const clonedState: IViewConfigurationStore = cloneObject(state);
    switch (action.type) {
        case VIEW_CONFIGURATION_DATA:
            clonedState.data = action.rootData;
            console.log('ViewConfigurationContainer recieved: ' + action.rootData);
            return clonedState;
    }
    return state;
}
