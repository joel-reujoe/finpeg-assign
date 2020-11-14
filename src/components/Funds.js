import {Component} from 'react';
import graph from '../chart.svg'
class Funds extends Component{

    state={
        showText:'Show Performance Details',
        showData: false
    }
    handleExpand =(e)=>{
        if(e.target.classList.contains("down"))
        {
            e.target.classList.remove("down");
            e.target.classList.add("up");
            this.setState({
                showData:true,
                showText:'Hide Performance Details'
            })
        }
        else{
            e.target.classList.remove("up");
            e.target.classList.add("down");
            this.setState({
                showText:'Show Performance Details',
                showData:false
            });
        }
    }
    render()
    {
        const {name, type,oneyearReturn, threeyearReturn,fiveyearReturn} = this.props
        return (
            <div className="card" style={{margin:"15px"}}>
            <div className="row" style={{marginTop:"10px"}}>
                    <div className="col-2">
                        <img src="https://static.paytmmoney.com/amc-logo/SBIMF.png" alt="John" style={{width:"100%", height:"50px", left:"10px"}}/>
                    </div>
                    <div className="col-8 text-left">
                        {name}
                        <div style={{fontSize:"10px", paddingBottom:"20px"}}>
                            {type}
                        </div>
                    </div>
                    <div className="col-2" style={{marginTop:"10px"}}>
                        <i className="arrow right"></i>
                    </div>
                </div>
                {
                    this.state.showData &&
                        <div className="row">
                            <div className="col-3">
                                <img src={graph} style={{width:"20%", height:"50px"}} />
                            </div>
                            <div className="col-3" >
                                <div style={{fontSize:"10px"}}>Average 1Y Returns</div>
                                <div>{oneyearReturn || "0"}</div>
                            </div>
                            <div className="col-3" >
                                <div style={{fontSize:"10px"}}>Average 3Y Returns</div>
                                <div>{threeyearReturn || "0"}</div>
                            </div>
                            <div className="col-3" >
                                <div style={{fontSize:"10px"}}>Average 5Y Returns</div>
                                <div>{fiveyearReturn || "0"}</div>
                            </div>
                        </div>
                }
                <div className="row justify-content-md-center" style={{marginRight:"-1px"}} >
                   <div className="col-6" >
                        {this.state.showText} &nbsp;    
                        <i className="arrow down"  onClick={(e)=>{this.handleExpand(e)}}></i>
                        
                   </div>
                   <div className="col-1 bg-primary">
                        <i className="fa fa-shopping-cart " style={{alignContent:"start"}} ></i>
                   </div>
                   <div className="col-5 bg-primary" style={{paddingRight:"0px"}}>  
                        Invest Now
                   </div>
                </div>
            </div>
        )
    }
}

export default Funds;
