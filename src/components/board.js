import React from 'react'
import { Square } from './square.js'
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
export class Board extends React.Component{
    renderSquare(i) {
        return (
          <Square
            key = {i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
    render(){
        // const all =Array(9).fill(null).map((item,index)=>{
        //     return this.renderSquare(index)
            
        // })
            let result = [];
            let cols = 3;
            let rows = 3;
            for(let i =0;i<rows;i++){
                for(let j=0;j<cols;j++){
                    let s = weizhi(''+i+j)
                    result.push( <Square
                        key = {''+i+j}
                        value={this.props.squares[s]}
                        onClick={() => this.props.onClick(''+i+j)}
                      />)
                }
            }
        return (
            <div>
                
                <div className='btnbox'>
                    {/* {all} */}
                    {result}
                </div>
            </div>
        )
    }
}