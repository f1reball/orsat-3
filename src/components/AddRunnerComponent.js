import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


class AddRunnerComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            SIID: ''
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeSIID = this.onChangeSIID.bind(this);


        this.onReset = this.onReset.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onExited = this.onExited.bind(this);

    }


    componentDidMount() {
        this.setState({
            firstName: '',
            lastName: '',
            SIID: ''
        })
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeSIID(e){
        this.setState({
            SIID: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();

        const runner = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            SIID: this.state.SIID
        }

        this.setState({
            firstName: '',
            lastName: '',
            SIID: ''
        })
        console.log(runner);
    }

    onReset(e){
        e.preventDefault();

        this.setState({
            firstName: '',
            lastName: '',
            SIID: ''
        })
    }

    onExited(e){
        this.setState({
            firstName: '',
            lastName: '',
            SIID: ''
        })
    }


    render(){
        return(


            <Modal
             {...this.props}
             size="med"
             aria-labelledby="contained-modal-title-vcenter"
             centered
             onExited={this.onExited}
             >

             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new runner
                 </Modal.Title>
             </Modal.Header>
             <Form onSubmit={this.onSubmit} onReset={this.onReset}>
                <Modal.Body>


                        <Form.Group controlId="newRunnerFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control autoComplete="off" type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="Enter First Name" />
                        </Form.Group>
                        <Form.Group controlId="newRunnerLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control autoComplete="off" type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group controlId="newRunnerSIID">
                            <Form.Label>SIID</Form.Label>
                            <Form.Control autoComplete="off" type="text" value={this.state.SIID} onChange={this.onChangeSIID} placeholder="Enter SIID" />
                        </Form.Group>
               </Modal.Body>
             <Modal.Footer>

             <Button variant="danger" type="reset" onClick={this.props.onHide}>Close</Button>
             <Button variant="primary" type="submit" onClick={this.props.onHide}>Save</Button>

             </Modal.Footer>
             </Form>
           </Modal>
        )
    }
}

export default AddRunnerComponent;
