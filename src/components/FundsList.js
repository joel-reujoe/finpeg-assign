import {Component} from 'react';
import Funds from './Funds'
import InfiniteScroll from 'react-infinite-scroll-component';
import funds from '../funds';




class FundsList extends Component{

    state={
        items:funds.result.funds.slice(0,20),
        hasMore: true
    }  
   
    loadFunc =()=>{
        if (this.state.items.length >= funds.result.funds.length) {
            this.setState({ hasMore: false });
            return;
        }
       
        let index = this.state.items.length;
        let nextFunds = funds.result.funds;
        this.setState({
            items: this.state.items.concat(nextFunds.splice(index,20))
        });
    };

    render (){
        return (
            <div>
            <InfiniteScroll
                dataLength={this.state.items.length} 
                next={this.loadFunc}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                useWindow={false}
                >
                {this.state.items.map((fund, index)=>( 
                    <Funds key={index} name={fund.name} type={fund.FundType} oneyearReturn={fund.oneyearReturn} threeyearReturn={fund.threeyearReturn} fiveyearReturn={fund.fiveyearReturn}/>
                ))}
                </InfiniteScroll>
            </div>
        )
    }
}

export default FundsList;