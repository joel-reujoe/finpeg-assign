import {Component} from 'react';
import Funds from './Funds'
import InfiniteScroll from 'react-infinite-scroll-component';
import funds from '../funds';




class FundsList extends Component{

    state={
        items:funds.result.funds.slice(0,20),
        hasMore: true,
        search:null
    }  
   

    render (){
        return (
            <div>
                {this.props.funds.map((fund, index)=>( 
                    <Funds key={index} name={fund.name} type={fund.FundType} oneyearReturn={fund.oneyearReturn} threeyearReturn={fund.threeyearReturn} fiveyearReturn={fund.fiveyearReturn}/>
                ))}
            </div>
        )
    }
}

export default FundsList;