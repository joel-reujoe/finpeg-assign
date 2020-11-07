import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class Search extends Component{

    render()
    {
        return (
        <div>  
            <div className="card" style={{backgroundColor:"white",margin:"10px"}}>
                <div className="row" style={{marginRight:"-62px"}}>
                    <div className="col-3" style={{padding:"10px"}}>
                        All funds
                    </div>
                    <div className="col-3" style={{padding:"10px"}}>
                        Screener
                    </div>
                    <div className="col-4" style={{padding:"10px"}}>
                        Filter by AMC
                    </div>
                    <div className="col-1" style={{padding:"10px", backgroundColor:"#0066cc"}}>
                        <FontAwesomeIcon  size="lg" icon={faSearch}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Search;