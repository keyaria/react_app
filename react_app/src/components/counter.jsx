import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'

const spanStyle = {
    backgroundColor: 'red',
}

class Counter extends Component {
    


    render() {
       
      
        return (
            <div>

                
                <Label basic className="badge">{this.formatCount()}</Label>
                <Button onClick={ () => this.props.onIncrement(this.props.counter) } variant="contained">Increment</Button>
                <Button onClick={() => this.props.onDelete(this.props.counter.id)}  color='red'> Delete </Button>
                
            </div>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
