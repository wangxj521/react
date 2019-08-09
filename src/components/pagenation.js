import React from 'react'
export class Pagenation extends React.Component{
   constructor(props){
       super(props);
       this.nextmonth = this.nextmonth.bind(this)
       this.state = {
           year: '',
           month: '',
           date: '',
           n:0
       }
   }
   nextmonth(){
       this.setState({
           n: ++this.state.n
       })
       this.pages()
       console.log(this.state.n)
   }
   pages(){
    let that = this;
    let num = this.state.n;
    let now = new Date();
    now.setFullYear(now.getFullYear(),now.getMonth()+num,now.getDate())
    // now.setFullYear(2019,0,15)
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    let nowDate = now.getDate();
    this.setState({
        year:nowYear,
        month: nowMonth+1,
        date: nowDate
    })
    now.setFullYear(nowYear,nowMonth,0);
    let prevYear = now.getFullYear();
    let prevMonth = now.getMonth();
    let prevDay = now.getDay();
    let prevDate = now.getDate();
    now.setFullYear(nowYear,nowMonth+1,0);
    let nowDays = now.getDate();
    now.setFullYear(nowYear,nowMonth+1,1);
    let nextYear = now.getFullYear();
    let nextMonth = now.getMonth();
    let nextDate = 42-(prevDay+1) - nowDays;
    let datas = [];
    for(let i=prevDate - prevDay-1;i<prevDate; i++){
       datas.push({
           year: prevYear,
           month: prevMonth+1,
           date: i+1
       })
    }
    for(let i=0;i<nowDays;i++){
        datas.push({
            year: nowYear,
           month: nowMonth+1,
           date: i+1
        })
    }
    for(let i=0;i<nextDate;i++){
        datas.push({
            year: nextYear,
           month: nextMonth+1,
           date: i+1
        })
    }
    let bodys = document.getElementById('mybody');
    bodys.innerHTML = ''
    for(let i =0;i<datas.length;i++){
        let td = document.createElement('td');
        td.innerHTML = datas[i].date;
        if(datas[i].date ===nowDate&&datas[i].year === nowYear&&datas[i].month===nowMonth+1){
            td.className = 'active'
        }
        td.onclick = function(){
            that.setState({
                year: datas[i].year,
                month: datas[i].month,
                date: datas[i].date
            })
        }
        if(i%7===0){
            var item =document.createElement('tr');
            bodys.appendChild(item)
        }
        item.appendChild(td)
    }
   }
    componentDidMount(){
        this.pages()
    }
    render(){
        return (
            <div className='pagebox'>
                <h3>{this.state.year}年{this.state.month}月{this.state.date}日 <button onClick = {this.nextmonth}>下一月</button></h3>
                <table className='pagenation'>
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody id='mybody'>
                    </tbody>
                   
                </table>
            </div>
        )
    }
}