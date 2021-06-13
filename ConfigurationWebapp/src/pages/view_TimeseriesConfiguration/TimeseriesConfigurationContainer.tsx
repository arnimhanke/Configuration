import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ILoginStore } from '../main/LoginReducer';
import { onAddNewTimeseriesConfiguration, onDeleteTimeseriesConfiguration, onGetAllConfiguration } from './TimeseriesConfigurationAction';
import { ITimeseriesConfigurationStore } from './TimeseriesConfigurationReducer';
import { ITimeseriesConfigurationActions, ITimeseriesConfigurationProperties, TimeseriesConfigurationPlain } from './TimeseriesConfigurationView';

export const TIMESERIES_CONFIGURATION_DATA = 'TIMESERIES_CONFIGURATION_DATA';
export const ADD_TIMESERIES_CONFIGURATION_DATA = 'ADD_TIMESERIES_CONFIGURATION_DATA';

function mapStateToProps(state: { timeseriesConfigurationReducer: ITimeseriesConfigurationStore, loginReducer: ILoginStore }): ITimeseriesConfigurationProperties {
    return {
        timeseriesConfigurationStore: state.timeseriesConfigurationReducer,
        loginStore: state.loginReducer,
    };
}

function mapDispatchToProps(dispatch: Dispatch<ITimeseriesConfigurationProperties>): ITimeseriesConfigurationActions {
    return {
        actions: bindActionCreators({
            getAllConfiguration: onGetAllConfiguration,
            addNewTimeseriesConfiguration: onAddNewTimeseriesConfiguration,
            deleteTimeseriesConfiguration: onDeleteTimeseriesConfiguration,
        }, dispatch),
    };
}

export const TimeseriesConfigurationView: React.ReactNode = connect(mapStateToProps, mapDispatchToProps)(TimeseriesConfigurationPlain);
