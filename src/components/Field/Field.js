import React, { Component } from "react";
import PropTypes from 'prop-types';
import './_field.scss';

class Field extends Component {
    static propTypes = {
        isActive: PropTypes.bool,
        isHidden: PropTypes.bool,
        row: PropTypes.number,
        column: PropTypes.string,
    };

    /**
     * React: defaultProps
     */
    static defaultProps = {
        isActive: false,
    };

    /**
     *
     * React: state
     */
    state = {
        isHit: false,
        isMiss: false,
    };

    render() {
        let className = 'battleship-c-field';
        className += `${this.props.isActive ? ' battleship-c-field__is-active' : '' }`;
        className += `${this.state.isHit ? ' battleship-c-field__is-hit' : '' }`;
        className += `${this.state.isMiss ? ' battleship-c-field__is-miss' : '' }`;

        return (
            <div className={className} onClick={this.handleClick}>{this.props.column}{this.props.row}</div>
        );
    }

    handleClick = () => {
        this.setState({
            isHit: this.props.isHidden,
            isMiss: !this.props.isHidden,
        });
    }
}

export default Field;