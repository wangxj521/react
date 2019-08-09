import React from 'react'
import { Temperature } from './temperature.js'
function toCelsius(input) {
    if(Number.isNaN(input)){
        return ''
    }
    const fahrenheit =parseFloat(input);
    const res = (fahrenheit - 32) * 5 / 9
    return Math.round(res*1000)/1000;
}
  
function toFahrenheit(input) {
    if(Number.isNaN(input)){
        return ''
    }
    const celsius =parseFloat(input);
    const res =  (celsius * 9 / 5) + 32
    return Math.round(res*1000)/1000;
}
export class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.temperatureChange = this.temperatureChange.bind(this);
        this.temperatureChangef = this.temperatureChangef.bind(this);
        this.state = {
            temperature:'12',
            type: ''
        }
    }
    temperatureChange(temperature){
        this.setState({
            type:'c',
            temperature
        })
    }
    temperatureChangef(temperature){
        this.setState({
            type:'f',
            temperature
        })
    }
    render(){
        const type = this.state.type;
        const tem = this.state.temperature;
        const celsius = type ==='c'? tem: toCelsius(tem)
        const fahrenheit = type ==='f'? tem: toFahrenheit(tem)
        return(
            <div>
                <h3>
                    温度转换
                </h3> 
                <div>
                    <Temperature type = 'c' temperature = {celsius} temperatureChange = {this.temperatureChange}/>
                    <Temperature type = 'f' temperature = {fahrenheit} temperatureChange = {this.temperatureChangef}/>
                </div>
            </div>
           
        )
    }
}