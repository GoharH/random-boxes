import React from "react";
import './style.scss';

class ModalBox extends React.Component {

    render() {
        return <div className="modal-box">
            <div className="modal-bg" onClick={this.props.closeModal}> </div>
            <div className="modal-text">
                <h2>Are You sure?</h2>
                <div className="modal-btn">
                    <button onClick={this.props.deleteBox}>Yes</button>
                    <button onClick={this.props.closeModal}>No</button>
                </div>
            </div>
        </div>
    }
}
export default ModalBox