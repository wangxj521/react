import React from 'react'
import { Board } from './board.js'
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
function location(){
    let res =[]
    let rows= 3;
    let cols = 3;
    for(let i =0;i<rows;i++){
        for(let j=0;j<cols;j++){
            res.push(''+i+j)
        }
    }
    return res;
}
function weizhi(str){
    let res = location();
    for(let i=0;i<res.length;i++){
        if(res[i] ===str){
            return i
        }
    }
    return -1;
}
export class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stepnum: 0,
            history: [{squares: Array(9).fill(null),zb:''}],
            isx: true,
        }
    }
    handleClick(str){
        let i = weizhi(str);
        console.log(i)
        const historys = this.state.history.slice(0, this.state.stepnum +1);
        const currents = historys[historys.length-1];
        const nowsquares = currents.squares.slice();
        if(nowsquares[i] || calculateWinner(nowsquares)){
            return;
        }
        nowsquares[i] = this.state.isx?"X":'O';
        this.setState({
            history: historys.concat([{squares:nowsquares,zb:i}]),
            stepnum: historys.length,
            isx: !this.state.isx,
        })
    }
    jumpto(step){
        this.setState({
            stepnum :step,
            isx: (step%2===0)
        })
    }
    render(){
        // const history = this.state.history.slice(0,this.state.stepnum +1);
        const history = this.state.history;
        const current = history[this.state.stepnum];
        const play = this.state.isx?"X":'O';
        const winner = calculateWinner(current.squares);
        
        const steps = history.map((step,move)=>{
            let zb = location()[step.zb];
            const des = move? 'go to #' + move +'('+zb+')': 'go to start'
            return (
                <li key={move} className ={this.state.stepnum===move?'selected':''}>
                    <button type='button'  onClick={this.jumpto.bind(this,move)}>{des}</button>
                </li>
            )
        })
        let status;
        if(winner){
            status = 'Winner is:' + winner
        }else{
            status = "next player is:" + play
        }
        return (
            <div className = 'box'>
                <div>{status}</div>
                <div className='boardbox'>
                    <Board squares ={current.squares} onClick= {(i)=>this.handleClick.bind(this,i)}/>
                </div>
                <div className='stepbox'>
                    <ol>
                        {steps}
                    </ol>
                </div>
            </div>
        )
    }
}