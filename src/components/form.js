import React, { Component } from 'react';
import Inputs from '../components/input';
import Table from '../components/table';

class form extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
        };
    }

    saveTask = (task) => {

        const tasks = [...this.state.tasks, task];

        this.setState({
            tasks
        });

    }

    deleteTask = (id) => {

        const listTasks = [...this.state.tasks];
        const tasks = listTasks.filter(task => task.id !== id);

        this.setState({
            tasks
        });
    }

    //este metodo se carga cuando se crea el componente
    componentDidMount(){
        const tasksStorage = localStorage.getItem('tasks');

        if(tasksStorage) {
            this.setState({
                tasks: JSON.parse(tasksStorage),
            })
        }
    }

    //este metodo se ejecuta cuando ocurre un cambio en el state
    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    render() {
        
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <form>
                                <Inputs saveTask={this.saveTask} />
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <Table tasks={this.state.tasks} deleteTask={this.deleteTask} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default form;
