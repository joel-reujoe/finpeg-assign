import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import funds from '../funds';

class Search extends Component{

    state={
        funds: funds.result.funds,
        view:'default',
        showScreener:false,
        showDropDown: false,
        dropDownText:'Select AMC'
    }

    screenerSearch=()=>{
       
        this.setState({
            showScreener:!this.state.showScreener
        });
    }

    amcSearch=()=>{
        this.setState({
            showDropDown:!this.state.showDropDown
        })
    }

    changeView = (viewChange)=>{
        if(this.state.view ==='search_button')
        {
            this.setState({
                view:'default'
            })
        }
        else{
            this.setState({
                view:'search_button'
            })
        }
        
    }

    render()
    {
        let view = {};
        switch(this.state.view)
        {
            case 'default':
                view = <div className="row" style={{marginRight:"-62px"}}>
                            <div className="col-3" style={{padding:"10px"}}>
                                All funds
                            </div>
                            <div className="col-3" style={{padding:"10px",cursor:'pointer'}} onClick={this.screenerSearch}>
                                Screener
                            </div>
                            <div className="col-4" style={{padding:"10px"}} onClick={this.amcSearch}>
                                Filter by AMC
                            </div>
                            <div className="col-1" style={{padding:"10px", backgroundColor:"#0066cc"}} onClick={(e)=>{this.changeView('search_button')}}>
                                <FontAwesomeIcon  size="lg" value="search_button" icon={faSearch} />
                            </div>
                        </div>
                    break;
            case 'search_button':
                view =<div className="row" style={{marginRight:"-62px"}}>
                            
                            <input className="col-10" type="text" placeholder="Search...." onChange={(e)=>{this.props.onSearch(e)}}/>
                            
                            <div className="col-1" style={{padding:"10px", backgroundColor:"#0066cc"}} onClick={(e)=>{this.changeView('search_button')}}>
                                <FontAwesomeIcon  size="lg" value="search_button" icon={faSearch} />
                            </div>
                        </div>
                break;
            default:
                view = <div className="row" style={{marginRight:"-62px"}}>
                            <div className="col-1" style={{padding:"10px", backgroundColor:"#0066cc"}} onClick={(e)=>{this.changeView('search_button')}}>
                                <FontAwesomeIcon  size="lg" value="search_button" icon={faSearch} />
                            </div>
                        </div>
                
        }
        let fundsDropDown = []
        for(let i=0;i<this.state.funds.length;i++)
        {   
            let words = this.state.funds[i].name.split(" ");
            fundsDropDown.push(words[0])
        }
        fundsDropDown = fundsDropDown.filter(function( item, index, inputArray ){
            return inputArray.indexOf(item) == index;
        });
        return (
        <div>  
            <div className="card" style={{backgroundColor:"white",margin:"10px"}}>
                {view}
                {this.state.showScreener && <div className="row">
                            <div className="col-4" style={{padding:"10px",cursor:'pointer'}} onClick={(e)=>{this.props.onScreenSearch(e,1)}}>
                                One year return
                            </div>
                            <div className="col-4" style={{padding:"10px",cursor:'pointer'}} onClick={(e)=>{this.props.onScreenSearch(e,3)}}>
                                Three year return
                            </div>
                            <div className="col-4" style={{padding:"10px",cursor:'pointer'}} onClick={(e)=>{this.props.onScreenSearch(e,5)}}>
                                Five year return
                            </div>
                    </div>}
                {this.state.showDropDown &&  <div className="row">
                        <div className="col-12" style={{padding:"10px",cursor:'pointer'}} >
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                {this.props.dropDownText}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                {fundsDropDown.map((item)=><Dropdown.Item onClick={()=>{this.props.onDropDownClick(item)}}>{item}</Dropdown.Item>)}
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>}
            </div>
        </div>
        )
    }
}

export default Search;