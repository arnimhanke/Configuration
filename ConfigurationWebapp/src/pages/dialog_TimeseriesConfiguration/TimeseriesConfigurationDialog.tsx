import React = require('react');
import { FormEvent } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup, Modal } from 'react-bootstrap';
import { TimeseriesPresentationConfiguration, TimeseriesViewConfiguration } from '../../util/configuration';

interface IComponentProps {
    configuration: TimeseriesViewConfiguration;
    saveObject: (e: TimeseriesViewConfiguration) => void;
    onClose: () => any;
}

interface IComponentState {
    show: boolean;
    configuration: {
        name: string,
        configuration: string,
    };
}

export class TimeseriesConfigurationDialog extends React.Component<IComponentProps, IComponentState> {

    constructor(props: IComponentProps, state: IComponentState) {
        super(props, state);
        this.state = { show: false, configuration: { name: '', configuration: '' } };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTPC = this.handleChangeTPC.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public componentWillReceiveProps(nextProps: IComponentProps) {
        if (nextProps.configuration !== undefined) {
            this.setState({ configuration: {name: nextProps.configuration.name, configuration: JSON.stringify(nextProps.configuration.timeseriesPresentationConfigurations)}, show: true });
        } else {
            this.setState({configuration: {name: undefined, configuration: undefined}});
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

                        <FormGroup controlId='formConfigurationEntries'>
                            <ControlLabel>timeseriesPresentationConfigurations</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.configuration.configuration}
                                placeholder='[]'
                                onChange={this.handleChangeTPC}
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
        const config: TimeseriesViewConfiguration = {name: this.state.configuration.name, timeseriesPresentationConfigurations: JSON.parse(this.state.configuration.configuration)};
        this.props.saveObject(config);
        this.props.onClose();

        console.log(this.state.configuration);
        this.setState({ show: false });
    }

    private handleChangeName(event: any) {
        this.setState({configuration : {name: event.target.value, configuration: this.state.configuration.configuration}});
    }

    private handleChangeTPC(event: any) {
        this.setState({configuration : {name: this.state.configuration.name, configuration: event.target.value}});
    }
}
