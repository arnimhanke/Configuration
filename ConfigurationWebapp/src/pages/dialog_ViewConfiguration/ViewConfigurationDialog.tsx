import React = require('react');
import { FormEvent } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup, Modal } from 'react-bootstrap';
import { ViewConfiguration } from '../../util/configuration';
import { cloneObject } from '../../util/store/ObjectUtils';

interface IComponentProps {
    configuration: ViewConfiguration;
    saveObject: (e: ViewConfiguration) => void;
    onClose: () => any;
}

interface IConfigForDialog {
    title?: string;
    name?: string;
    path?: string;
    viewModel?: string;
    tsConfigurationName?: string;
    parentConfiguration?: string;
    subViewConfigurations?: string;
}

interface IComponentState {
    show: boolean;
    configuration: IConfigForDialog;
}

export class ViewConfigurationDialog extends React.Component<IComponentProps, IComponentState> {

    constructor(props: IComponentProps, state: IComponentState) {
        super(props, state);
        this.state = { show: false, configuration: {} };

        this.handleSave = this.handleSave.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeViewModel = this.handleChangeViewModel.bind(this);
        this.handleChangeTimeseriesViewConfigurationName = this.handleChangeTimeseriesViewConfigurationName.bind(this);
        this.handleChangeParentConfiguration = this.handleChangeParentConfiguration.bind(this);
        this.handleChangeSubViewConfigurations = this.handleChangeSubViewConfigurations.bind(this);
        this.handleChangePath = this.handleChangePath.bind(this);

    }

    public componentWillReceiveProps(nextProps: IComponentProps) {
        if (nextProps.configuration !== undefined) {
            this.setState({
                configuration: {
                    title: nextProps.configuration.title,
                    name: nextProps.configuration.name,
                    path: nextProps.configuration.path,
                    viewModel: nextProps.configuration.viewModel,
                    tsConfigurationName: nextProps.configuration.tsConfigurationName,
                    parentConfiguration: nextProps.configuration.parentConfiguration,
                    subViewConfigurations: JSON.stringify(nextProps.configuration.subViewConfigurations),

                }, show: true,
            });
        } else {
            this.setState({ configuration: {} });
        }
    }

    public render() {

        const handleClose = () => {
            this.setState({ show: false });
            this.props.onClose();
        };
        const handleShow = () => this.setState({ show: true });
        return (<div>

            <Button onClick={handleShow}>
                Add
            </Button>

            <Modal show={this.state.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Timeseriesconfiguration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId='formConfigurationName'>
                            <ControlLabel>Configuration name</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.name}
                                placeholder='Enter text'
                                onChange={this.handleChangeName}
                            />
                        </FormGroup>
                        <FormGroup controlId='formConfigurationTitle'>
                            <ControlLabel>Configuration Title</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.title}
                                placeholder='Enter text'
                                onChange={this.handleChangeTitle}
                            />
                        </FormGroup>
                        <FormGroup controlId='formConfigurationPath'>
                            <ControlLabel>Configuration Path</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.path}
                                placeholder='Enter text'
                                onChange={this.handleChangePath}
                            />
                        </FormGroup>
                        <FormGroup controlId='formConfigurationViewModel'>
                            <ControlLabel>Configuration ViewModel</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.viewModel}
                                placeholder='Enter text'
                                onChange={this.handleChangeViewModel}
                            />
                        </FormGroup>
                        <FormGroup controlId='formConfigurationTimeseriesViewConfigurationName'>
                            <ControlLabel>Configuration TimeseriesViewConfigurationName</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.tsConfigurationName}
                                placeholder='Enter text'
                                onChange={this.handleChangeTimeseriesViewConfigurationName}
                            />
                        </FormGroup>
                        <FormGroup controlId='formConfigurationParentConfiguration'>
                            <ControlLabel>Configuration ParentConfiguration</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.parentConfiguration}
                                placeholder='Enter text'
                                onChange={this.handleChangeParentConfiguration}
                            />
                        </FormGroup>
                        <FormGroup controlId='formConfigurationSubViewConfigurations'>
                            <ControlLabel>Configuration SubViewConfigurations</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.subViewConfigurations}
                                placeholder='Enter text'
                                onChange={this.handleChangeSubViewConfigurations}
                            />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                        </Button>
                    <Button onClick={this.handleSave}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
    }

    public handleSave() {
        // speichern
        const config: ViewConfiguration = this.copyViewConfiguration(this.state.configuration);
        this.props.saveObject(config);
        this.props.onClose();
        this.setState({ show: false });
    }

    private copyViewConfiguration(configuration: IConfigForDialog): ViewConfiguration {
        return {
            name: configuration.name,
            title: configuration.title,
            path: configuration.path,
            viewModel: configuration.viewModel,
            tsConfigurationName: configuration.tsConfigurationName,
            parentConfiguration: configuration.parentConfiguration,
            subViewConfigurations: JSON.parse(configuration.subViewConfigurations),
        };
    }

    private handleChangeTitle(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.title = event.target.value;
        this.setState({ configuration: config });
    }

    private handleChangeName(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.name = event.target.value;
        this.setState({ configuration: config });
    }

    private handleChangePath(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.path = event.target.value;
        this.setState({ configuration: config });
    }

    private handleChangeViewModel(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.viewModel = event.target.value;
        this.setState({ configuration: config });
    }

    private handleChangeTimeseriesViewConfigurationName(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.tsConfigurationName = event.target.value;
        this.setState({ configuration: config });
    }

    private handleChangeParentConfiguration(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.parentConfiguration = event.target.value;
        this.setState({ configuration: config });
    }

    private handleChangeSubViewConfigurations(event: any) {
        const config: IConfigForDialog = cloneObject(this.state.configuration);
        config.subViewConfigurations = event.target.value;
        this.setState({ configuration: config });
    }

}
