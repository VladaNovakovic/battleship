import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

class Field extends Component {
    static propTypes = {
        isHit: PropTypes.bool,
        isMiss: PropTypes.bool,
        isMySubmarine: PropTypes.bool,
        row: PropTypes.number.isRequired,
        column: PropTypes.string.isRequired,
        onClick: PropTypes.func,
    };

    /**
     * React: defaultProps
     */
    static defaultProps = {
        isMySubmarine: false,
        isHit: false,
        isMiss: false,
        onClick: () => {},
    };

    handleClick = () => {
        // console.log('click');
        this.props.onClick();
    };

    render() {
        let className = 'battleship-c-field';
        className += `${this.props.isHit ? ' battleship-c-field__is-hit' : ''}`;
        className += `${this.props.isMiss ? ' battleship-c-field__is-miss' : ''}`;
        className += `${this.props.isMySubmarine ? ' battleship-c-field__is-my-submarine' : ''}`;

        return (
            <div className={className} onClick={this.handleClick}>{this.props.column}{this.props.row}</div>
        );
    }
}

export default Field;
