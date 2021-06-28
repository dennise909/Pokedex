import React, { Component } from "react";
import Modal from './Modal/Modal.js';
import Myform from './Form/Form';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);// remove the bind as its 
    }

    // showModal = () => {
    //     this.setState({ show: true }, ()=> {console.log('line 15',this.state.show)});
    //     console.log('line 16',this.state.show); // false
    // };
    showModal = () => {
        this.setState({ show: true });
    };

    // toggleModal = () => {
    //     this.setState((state)=> {
    //         return {show: !state.show}
    //     });
    //     // this.setState({ show: !this.state.show });
    // };

    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <main>
                <button type="button" onClick={this.showModal}>
                    Create new pokemon
        </button>
            {this.state.show && <Modal handleClose={this.hideModal}>
            <Myform/>
            </Modal>}
            </main>
        );
    }
}
export default Dashboard