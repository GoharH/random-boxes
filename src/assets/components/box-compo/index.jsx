import React from "react";
import './style.scss';
import ModalBox from "./modal-window";

class BoxComp extends React.Component {
    state = {
        openModal: false,
    }

    openModal = () => {
        this.setState({ openModal: true })
    }
    closeModal = () => {
        this.setState({ openModal: false })

    }


    render() {
        return <>
            <div className="number-box">
                <div className="close-btn" onClick={this.openModal}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <p>{this.props.vazgen}</p>
            </div>
            {this.state.openModal ? <ModalBox closeModal={this.closeModal} deleteBox={this.props.deleteBox} /> : null}
        </>

    }
}
export default BoxComp