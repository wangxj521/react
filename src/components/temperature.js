import React from 'react'
export class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.temperatureChange(e.target.value)
    }
    render(){
        const temperature =  this.props.temperature;
        const type = this.props.type;
        return (
            <div>
                <div>{type==='c'?'摄氏温度':'华氏温度'}</div>
                <input value = {temperature} onChange = {this.handleChange}/>
            </div>
        )
    }
}