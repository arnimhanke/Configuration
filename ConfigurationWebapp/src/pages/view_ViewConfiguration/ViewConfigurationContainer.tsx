import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ILoginStore } from '../main/LoginReducer';
import { onAddNewViewConfiguration, onDeleteViewConfiguration, onGetAllConfiguration } from './ViewConfigurationAction';
import { IViewConfigurationStore } from './ViewConfigurationReducer';
import { IViewConfigurationActions, IViewConfigurationProperties, ViewConfigurationPlain } from './ViewConfigurationView';

export const VIEW_CONFIGURATION_DATA = 'VIEW_CONFIGURATION_DATA';
export const ADD_VIEW_CONFIGURATION_DATA = 'ADD_VIEW_CONFIGURATION_DATA';
export const DELETE_VIEW_CONFIGURATION_DATA = 'DELETE_VIEW_CONFIGURATION_DATA';

function mapStateToProps(state: { viewConfigurationReducer: IViewConfigurationStore, loginReducer: ILoginStore }): IViewConfigurationProperties {
    return {
        viewConfigurationStore: state.viewConfigurationReducer,
        loginStore: state.loginReducer,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IViewConfigurationProperties>): IViewConfigurationActions {
    return {
        actions: bindActionCreators({
            getAllConfiguration: onGetAllConfiguration,
            addNewViewConfiguration: onAddNewViewConfiguration,
            deleteViewConfiguration: onDeleteViewConfiguration,
        }, dispatch),
    };
}

export const ViewConfigurationView: React.ReactNode = connect(mapStateToProps, mapDispatchToProps)(ViewConfigurationPlain);
