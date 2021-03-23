import React, { Component } from 'react';
import axios from 'axios';

const History = props => (
  <div className="card mb-3 card-style">
  <div className="row g-25">
  <div className="col-md-4">
<img className="shopattractimg" src={props.history.image}  alt=""/>
</div>
<div className="col-md-8">
<div className="card-body card-shopattract-text zooani">
   <h4 className="card-title titlestyle">{props.history.name}</h4>
   <h5 className='card-text'>{props.history.description}</h5>
   <p>{props.history.address}{props.history.city} {props.history.state} {props.history.zipcode}</p>
 
 
 </div>
 </div>
 </div>
 </div>
)

export default class CincyHistory extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {histories: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/history/')
     .then(response => {
       this.setState({ histories: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  cincyHistory() {
    return this.state.histories.map(currenthistory => {
      return <History history={currenthistory} key={currenthistory._id}/>;
    })
  }
  render() {
    return (
        
<div>
<header id="header-section-shop">
      <div className="container-fluid shoptophead">
      <div className="header-text">
      <h2 className="bigger-font text-white">Get a taste of Cincinnati!</h2>
      <p>If you like dining out, then Cincinnati is a great town for your taste buds. We have so many wonderful options that span every type of cuisine and every imaginable setting. Whether you’re an avid foodie or you prefer a classic burger and fries, your dream restaurant is waiting for you in the Queen City. If you’d like to try a few new places that are some of the best restaurants in Cincinnati, then consider starting with this list. These restaurants you’ll want to eat at in Cincinnati are diverse, all over town, and offer something for everyone.</p>
      </div>
      </div>
      </header>

{ this.cincyHistory() }

</div>
      


    );
  }
}