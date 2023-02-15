import React, { Component } from "react";

class Dropdown extends Component {
    state = {
        visible: false,
    };

    show = () => {
        this.setState({ visible: true })
    };

    hide = () => {
        this.setState({ visible: false })
    };

    render() {
        return (
            <div>
                 {this.state.visible && (<div className="Dropdown"> Випадаюче вікно</div>)}
        </div>
           
        )
    }
};

export default Dropdown;