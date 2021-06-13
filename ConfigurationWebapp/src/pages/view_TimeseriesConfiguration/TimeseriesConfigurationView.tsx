import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TimeseriesConfigurationDialog } from '../dialog_TimeseriesConfiguration/TimeseriesConfigurationDialog';

import * as Griddle from 'griddle-react';
import { TimeseriesViewConfiguration } from '../../util/configuration';
import { AbstractView } from '../common/AbstractComponent';
import { GriddleTableButtonColumn } from '../common/GriddleTable/GriddleTableButtonColumn';
import { GriddleTableValueDto } from '../common/GriddleTable/GriddleTableValueDto';
import { ILoginStore } from '../main/LoginReducer';
import { ITimeseriesConfigurationStore } from './TimeseriesConfigurationReducer';

export interface ITimeseriesConfigurationProperties {
    timeseriesConfigurationStore: ITimeseriesConfigurationStore;
    loginStore: ILoginStore;
}

export interface ITimeseriesConfigurationState {
    selectedConfiguration: TimeseriesViewConfiguration;
}

export interface ITimeseriesConfigurationActions {
    actions: {
        getAllConfiguration: (token: string) => any;
        addNewTimeseriesConfiguration: (token: string, configuration: TimeseriesViewConfiguration) => any;
        deleteTimeseriesConfiguration: (token: string, configurationName: string) => any;
    };
}

type TimeseriesConfigurationProps = ITimeseriesConfigurationProperties & ITimeseriesConfigurationActions;

export class TimeseriesConfigurationPlain extends AbstractView<TimeseriesConfigurationProps, ITimeseriesConfigurationState> {

    constructor(props: TimeseriesConfigurationProps, state: ITimeseriesConfigurationState) {
        super(props, state);
        this.saveObject = this.saveObject.bind(this);
        this.deleteConfiguration = this.deleteConfiguration.bind(this);
        this.editConfiguration = this.editConfiguration.bind(this);
        this.onClose = this.onClose.bind(this);

        this.state = {selectedConfiguration: undefined};
    }

    public componentDidMount() {
        this.props.actions.getAllConfiguration(this.props.loginStore.token);
    }

    public render() {
        console.log(this.props.timeseriesConfigurationStore.data);

        const newData: Array<{ [key: string]: GriddleTableValueDto }> = [];
        this.props.timeseriesConfigurationStore.data.forEach((config: TimeseriesViewConfiguration) => {
            const nameColumn = new GriddleTableValueDto('', 'string', config.name);
            const configColumn = new GriddleTableValueDto('', 'list', config.timeseriesPresentationConfigurations);
            newData.push({ name: nameColumn, config: configColumn });
        });

        return (
            <div>
                <TimeseriesConfigurationDialog
                    configuration={this.state.selectedConfiguration}
                    onClose={this.onClose}
                    saveObject={this.saveObject}/>
                <GriddleTableButtonColumn
                    data={newData}
                    showButtonColumn={true}
                    columns={['name', 'config']}
                    onClickEdit={this.editConfiguration}
                    onClickDelete={this.deleteConfiguration}
                    dateTimeFormat={undefined}
                    key={new Date().toISOString()}>
                </GriddleTableButtonColumn>
            </div>
        );
    }

    private saveObject(e: TimeseriesViewConfiguration) {
        this.props.actions.addNewTimeseriesConfiguration(this.props.loginStore.token, e);
        this.props.actions.getAllConfiguration(this.props.loginStore.token);
        this.setState({selectedConfiguration: undefined});
    }

    private deleteConfiguration(e: any) {
        this.props.actions.deleteTimeseriesConfiguration(this.props.loginStore.token, this.props.timeseriesConfigurationStore.data[Number.parseInt(e.target.value)].name);
    }

    private editConfiguration(e: any) {
        this.setState({selectedConfiguration: this.props.timeseriesConfigurationStore.data[Number.parseInt(e.target.value)]});
    }

    private onClose() {
        this.setState({selectedConfiguration: undefined});
    }

}
