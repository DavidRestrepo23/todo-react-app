import React, { Component } from 'react';
import RowTask from '../components/rowTask';
import PropTypes from 'prop-types';

class Table extends Component {

    
    handleDeleteTaskById = id => {
        const { deleteTask } = this.props;
        deleteTask(id);
    }

    render() {
        const { tasks } = this.props;
        
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Tareas pendientes</th>
                            <th className="text-center" scope="col">Fecha</th>
                            <th className="text-center" scope="col">Hora</th>
                            <th className="text-center" scope="col">Completar</th>
                            <th className="text-center" scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, key) => (
                            <RowTask task={task} key={key} handleDeleteTaskById={this.handleDeleteTaskById} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    deleteTask : PropTypes.func.isRequired,
    tasks      : PropTypes.array.isRequired
}

export default Table;
