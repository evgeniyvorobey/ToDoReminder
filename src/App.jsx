import React, {Component} from 'react';
import Input from './Components/Input/Input';
import ListItem from './Components/List/ListItem';
import Form from './Components/Form';
import Placeholder from './Components/Preloader'

import './scss/index.scss';

class App extends Component {
  
	state = {
        elementsTitle: [],
        elementsTime: [],
        inputTitle: '',
        inputTime: '',
        isFetching: false,
        date: new Date(),
    }

    componentDidMount() {

        setTimeout(() => {
            fetch("list.json")
            .then(response => response.json())
            .then(result => this.setState({
                elementsTitle: result['elementsTitle'],
                elementsTime: result['elementsTime'],
                isFetching: true,
            }))
            .catch( error => {
                console.log(error)
                this.setState({
                    isFetching: false
                })
            })
        },3500)
    }

    onSubmit = (event) => {
        event.preventDefault();

        let inputTitle = this.state.inputTitle;
        let inputTime = this.state.inputTime;
        let time = +inputTime >= 1 ? inputTime : 0

        inputTitle.length >= 3 && (
            this.setState( prevState => ({
                elementsTitle: prevState.elementsTitle.concat(inputTitle),
                elementsTime: prevState.elementsTime.concat(time),            
                inputTitle: '',
                inputTime: ''
            }))
        )
        
    }

    onChange = event => {
        event.target.type === 'text' ? (
            this.setState({
                inputTitle: event.target.value
            })
        ) : ( 
            this.setState({
                inputTime: event.target.value
            })
        )
    }

    removeItem = index => {
        let arrTitle = this.state.elementsTitle;
        let arrTime = this.state.elementsTime;

        arrTitle.splice(index, 1);
        arrTime.splice(index,1);

        console.log(index)
        console.log(arrTitle)
        console.log(arrTime)
        
        this.setState({
            elementsTitle: arrTitle,
            elementsTime: arrTime
        })
    }

    render() {
        const {date, isFetching} = this.state;
        return(
            <div className="list">
                <div className="input-wrap" >
                    <Form onSubmit={this.onSubmit} >
                        <Input 
                            inputType="text"
                            placeholder="Input your item..."
                            name="Name"
                            onChange={this.onChange}
                            value={this.state.inputTitle}
                        /> 
                        <Input 
                            inputType="number"
                            placeholder="Time..."
                            name="time"
                            onChange={this.onChange}
                            value={this.state.inputTime}
                        />
                        <Input
                            inputType="submit"
                            value="Add"   
                        />
                    </Form>
                </div>
                { isFetching ? (
                    this.state.elementsTitle.map((itemName, index) => 
                    <ListItem 
                        key={index}
                        index={index}
                        removeItem={this.removeItem}
                        time={this.state.elementsTime[index]}
                    >
                        {itemName} 
                    </ListItem>)
                ) : <Placeholder /> }
                
                    <div style={{textAlign: 'center'}}>
                    {date.toLocaleString}
                    </div>

            </div>
        )
    }

}

export default App;
