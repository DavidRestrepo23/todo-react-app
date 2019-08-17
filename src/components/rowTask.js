import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
    textDecoration: 'line-through',
};

class RowTask extends Component {

    constructor(){
        super();

        this.state = {
            complete: false
        }

    }

    handleEventCompleteTask = (e) => {

        this.setState({
            complete: e.target.checked
        });
        
    }

    render() {    
        const { task, handleDeleteTaskById } = this.props;
        const { complete } = this.state;
        return (
            <tr style={ complete ? style : null }>
               
                <td className="text-center">{task.task}</td>
                <td className="text-center">{task.date}</td>
                <td className="text-center">{task.time}</td>
                <td className="text-center"> 
                    <input 
                        type="checkbox" 
                        onChange={this.handleEventCompleteTask} 
                        
                    /> 
                </td>
                <td className="text-center">
                    <button 
                        onClick={(e) => handleDeleteTaskById(task.id)} 
                        className="btn btn-danger">
                    
                        Eliminar

                    </button>
                </td>
               
            </tr>
        );
    }
}

RowTask.propTypes = {
    task : PropTypes.object.isRequired,
    handleDeleteTaskById : PropTypes.func.isRequired
}

export default RowTask;
