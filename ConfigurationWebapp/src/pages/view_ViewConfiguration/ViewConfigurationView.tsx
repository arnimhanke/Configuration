import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

import * as Griddle from 'griddle-react';
import { ViewConfiguration } from '../../util/configuration';
import { AbstractView } from '../common/AbstractComponent';
import { GriddleTableButtonColumn } from '../common/GriddleTable/GriddleTableButtonColumn';
import { GriddleTableValueDto } from '../common/GriddleTable/GriddleTableValueDto';
import { ViewConfigurationDialog } from '../dialog_ViewConfiguration/ViewConfigurationDialog';
import { ILoginStore } from '../main/LoginReducer';
import { IViewConfigurationStore } from './ViewConfigurationReducer';

export interface IViewConfigurationProperties {
    viewConfigurationStore: IViewConfigurationStore;
    loginStore: ILoginStore;
}

export interface ITimeseriesConfigurationState {
    selectedConfiguration: ViewConfiguration;
}

export interface IViewConfigurationActions {
    actions: {
        getAllConfiguration: (token: string) => any;
        addNewViewConfiguration: (token: string, configuration: ViewConfiguration) => any;
        deleteViewConfiguration: (token: string, configurationName: string) => any;
    };
}

type ViewConfigurationProps = IViewConfigurationProperties & IViewConfigurationActions;

export class ViewConfigurationPlain extends AbstractView<ViewConfigurationProps, ITimeseriesConfigurationState> {

    constructor(props: ViewConfigurationProps, state: ITimeseriesConfigurationState) {
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
        const newData: Array<{ [key: string]: GriddleTableValueDto }> = [];
        this.props.viewConfigurationStore.data.forEach((config: ViewConfiguration) => {
            const nameColumn = new GriddleTableValueDto('', 'string', config.name);
            const titleColumn = new GriddleTableValueDto('', 'string', config.title);
            const pathColumn = new GriddleTableValueDto('', 'string', config.path);
            const viewModelColumn = new GriddleTableValueDto('', 'string', config.viewModel);
            const tsConfigColumn = new GriddleTableValueDto('', 'string', config.tsConfigurationName);
            const parentConfigColumn = new GriddleTableValueDto('', 'string', config.parentConfiguration);
            newData.push({
                name: nameColumn,
                title: titleColumn,
                path: pathColumn,
                viewModel: viewModelColumn,
                tsConfig: tsConfigColumn,
                parentConfig: parentConfigColumn,
            });
        });

        console.log(this.props.viewConfigurationStore.data);
        return (
            <div>
                <ViewConfigurationDialog
                    configuration={this.state.selectedConfiguration}
                    onClose={this.onClose}
                    saveObject={this.saveObject}/>
                <GriddleTableButtonColumn
                    data={newData}
                    showButtonColumn={true}
                    columns={['name', 'title', 'path', 'viewModel', 'tsConfig', 'parentConfig']}
                    onClickEdit={this.editConfiguration}
                    onClickDelete={this.deleteConfiguration}
                    dateTimeFormat={undefined}
                    key={new Date().toISOString()}>
                </GriddleTableButtonColumn>
            </div>
        );
    }

    private saveObject(e: ViewConfiguration) {
        this.props.actions.addNewViewConfiguration(this.props.loginStore.token, e);
        this.props.actions.getAllConfiguration(this.props.loginStore.token);
        this.setState({selectedConfiguration: undefined});
    }

    private deleteConfiguration(e: any) {
        this.props.actions.deleteViewConfiguration(this.props.loginStore.token, this.props.viewConfigurationStore.data[Number.parseInt(e.target.value)].name);
    }

    private editConfiguration(e: any) {
        this.setState({selectedConfiguration: this.props.viewConfigurationStore.data[Number.parseInt(e.target.value)]});
    }

    private onClose() {
        this.setState({selectedConfiguration: undefined});
    }

}
