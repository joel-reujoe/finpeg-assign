import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Funds from './components/Funds';
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '@fortawesome/free-solid-svg-icons'
import Search from './components/Search';
import FundsList from './components/FundsList';
import funds from './funds';
const { Content } = Layout;


class App extends Component {
  state = {
    collapsed: false,
  };
  render(){
      return (
        <div className="App">
            <Layout className="site-layout">
                <Header/>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                  }}
                >
                  <div style={{margin:"20px"}}>
                    <Search/>
                  </div>
                  <div style={{margin:"15px"}}>
                    <FundsList funds={funds.result.funds}/>
                  </div>
                </Content>
                <Footer/>
              </Layout>
        </div>
      );
    }
}

export default App;
