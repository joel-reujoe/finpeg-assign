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
import Pagination from "react-js-pagination";
import FundsList from './components/FundsList';
import funds from './funds';
const { Content } = Layout;


class App extends Component {
  state = {
    totalPage:funds.result.funds.length,
    collapsed: false,
    funds: funds.result.funds.slice(0,20),
    keyword:null,
    currentPage: 1,
    filtered:false,
    todosPerPage: 20,
    filteritem:null,
    pageRange:5,
    dropDownText:'Select AMC'
  };

  handlePageClick(number){
    let currentFunds = []
    if(this.state.keyword !== null)
    {
      currentFunds = funds.result.funds.filter((data)=>{
        if(this.state.keyword === null)
          return data
        else if(data.name.toLowerCase().includes(this.state.keyword.toLowerCase())){
          return data
        }
      })
    }

    if(this.state.filteritem !== null)
    {
      
      currentFunds = funds.result.funds.filter((data)=>{
        if(this.state.filteritem === null)
          return data
        else if(data.name.toLowerCase().includes(this.state.filteritem.toLowerCase())){
          return data
        }
      })
    }
    const { todosPerPage } = this.state;
    const quotient = Math.floor(currentFunds.length/todosPerPage);
    const remainder = currentFunds.length%todosPerPage;
    const totalPage = quotient + (remainder > 0 ? 1:0)
    const indexOfLastTodo = number * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentFunds = currentFunds.slice(indexOfFirstTodo, indexOfLastTodo);
  
    this.setState({
      currentPage: number,
      funds: currentFunds,
    });
   
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    let currentFunds = funds.result.funds.filter((data)=>{
      if(this.state.keyword === null)
        return data
      else if(data.name.toLowerCase().includes(keyword.toLowerCase())){
        return data
      }
    });
    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentFunds = currentFunds.slice(indexOfFirstTodo, indexOfLastTodo);

    this.setState({
      keyword:keyword,
      funds: currentFunds,
      filtered:true,
      totalPages:currentFunds.length
    });
    
  }

  screenerSearch=(event, sortBy)=>{
    let currentFunds = []
    switch(sortBy){
      case 1:
        currentFunds = funds.result.funds.sort(function(a, b) {
          return b.oneyearReturn - a.oneyearReturn;
        });
        break;
      case 3:
        currentFunds = funds.result.funds.sort(function(a, b) {
            return b.threeyearReturn - a.threeyearReturn;
        });
        break;
      case 5:
        currentFunds = funds.result.funds.sort(function(a, b) {
              return b.fiveyearReturn - a.fiveyearReturn;
        });
        break;
    }
    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentFunds = currentFunds.slice(indexOfFirstTodo, indexOfLastTodo);
    this.setState({
      currentPage: currentPage,
      funds: currentFunds,
    });
  }

  dropDownClick=(event)=>{
   
    let currentFunds = []
    
    
      currentFunds = funds.result.funds.filter((data)=>{
        if(data.name.toLowerCase().includes(event.toLowerCase())){
          return data
        }
      });    
    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    currentFunds = currentFunds.slice(indexOfFirstTodo, indexOfLastTodo);
    this.setState({
      currentPage: currentPage,
      funds: currentFunds,
      filtered:true,
      filteritem:event,
      dropDownText:event
    });
  }


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
                    <Search onSearch={this.searchSpace} onScreenSearch={this.screenerSearch} onDropDownClick={this.dropDownClick} dropDownText={this.state.dropDownText}/>
                  </div>
                  <div style={{margin:"20px"}}>
                  <Pagination
                      itemClass="page-item"
                      linkClass="page-link"
                      activePage={this.state.currentPage}
                      itemsCountPerPage={this.state.todosPerPage}
                      totalItemsCount={this.state.totalPage}
                      pageRangeDisplayed={this.state.pageRange}
                      onChange={this.handlePageClick.bind(this)}
                    />
                  </div>
                  <div style={{margin:"15px"}}>
                    <FundsList funds={this.state.funds}/>
                  </div>
                </Content>
                <Footer/>
              </Layout>
        </div>
      );
    }

    
}

export default App;
