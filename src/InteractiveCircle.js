import React, { Component } from 'react';

class InteractiveCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circleSize: 24,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            circleMinSize: false
        };
    }

    handleCircleClick = () => {
        const { circleSize, viewportWidth, viewportHeight, circleMinSize } = this.state;
        if (!circleMinSize && circleSize * 2 <= viewportWidth && circleSize * 2 <= viewportHeight) {
            this.setState({ circleSize: circleSize * 2 });
        } else if (circleSize > 24) {
            this.setState({ circleSize: Math.max(24, circleSize / 2), circleMinSize: true });
        } else {
            this.setState({ circleMinSize: false }, () => {
                this.handleCircleClick();
            });
        }
    };

    updateCircleSize = () => {
        return {
            width: `${this.state.circleSize}px`,
            height: `${this.state.circleSize}px`,
        };
    };

    render() {
        return (
            <div
                className="circle"
                style={{ ...this.updateCircleSize() }}
                onClick={this.handleCircleClick}
            ></div>
        );
    }
}

export default InteractiveCircle;