import React from 'react';

class Modal extends React.Component {
    handleClick(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <div className="modal-overlay-div" style={overlayStyle} />
                <div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick.bind(this)}>
                <div className="modal-dialog-div" style={dialogStyle} onClick={this.onDialogClick}>
                    {this.props.children}
                </div>
                </div>
            </div>
        );
    }
}

export default Modal;