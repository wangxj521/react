import React from 'react'
export class Square extends React.Component {
    render(){
        return (
            <div>
                <button  type='button' className='btn' onClick = {this.props.onClick()}>
                    {this.props.value}
                </button>
            </div>
        )
    }
}