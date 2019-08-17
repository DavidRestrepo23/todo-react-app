import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(){
        super();
        this.state = {
            task:{
                task: '',
                date: '',
                time: ''
            },
            error:false,
            success:false,
        };
    }

    handleInput = event => {
        this.setState({
            task:{
                ...this.state.task,
                [event.target.name] : event.target.value,
            }
        });
    };


    handleSubmit = () => {
        const { saveTask } = this.props;
        const { task, date, time } = this.state.task;
 
        if(task === '' || date === '' || time === '') {

            this.setState({
                error:true,
            });

        } else {

            const task = {...this.state.task};
            task.id = uuid();

            //save task - pass data to form component
            saveTask(task);


            this.setState({
                task:{
                    ...this.state.task,
                    task:'',
                    date:'',
                    time:''
                },
                error: false,
                success: true,
            });
        }
        
    };

    render() {
        const { error, success } = this.state;
        const { task, date, time } = this.state.task;

        return (
            <div>
                {error ? 
                    <div className="alert alert-danger">Todos los campos son obligatorios</div>
                : 
                    null
                }

                {success ? 
                    <div className="alert alert-success">Tu tarea ha sido creada.</div>
                : 
                    null
                }

                <div className="form-group">
                    <label>¿Qué quieres hacer?</label>
                    <input type="email" className="form-control" name="task" value={task} onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label>¿Cuando?</label>
                    <input type="date" className="form-control" name="date" value={date} onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <label>¿A que hora?</label>
                    <input type="time" className="form-control" name="time" value={time} onChange={this.handleInput} />
                </div>
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Crear Tarea</button>
            </div>
        );
    }
}

Input.propTypes = {
    saveTask : PropTypes.func.isRequired
}

export default Input;
