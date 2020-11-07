import {Component} from 'react';
import { Nav, NavItem} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRupeeSign, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
    color:"gray",
    icon: faHome,
    label: "Home"
  },{
    color:"blue",
    icon: faRupeeSign,
    label: "Invest"
  },{
    color:"gray",
    icon: faSuitcase,
    label: "Portfolio"
  },
  {
    color:"gray",
    icon: faUser,
    label: "Profile"
  }]


class Footer extends Component{
    
    render()
    {
        return (
            <div className="navbar fixed-bottom navbar-light" style={{backgroundColor:"white"}} role="navigation">
            <Nav className="w-100">
              <div className="d-flex flex-row justify-content-around w-100">
                {
                  tabs.map((tab, index) =>(
                    <NavItem key={`tab-${index}`}>
                      <a className="nav-link">
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                          <FontAwesomeIcon color={tab.color} size="lg" icon={tab.icon}/>
                          <div style={{color:tab.color}} >{tab.label}</div>
                        </div>
                      </a>
                    </NavItem>
                  ))
                }
              </div>
            </Nav>
          </div>
        );
    }
}

export default Footer