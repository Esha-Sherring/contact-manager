
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Consumer} from '../../context'
import axios from 'axios';
import './contact.css'

class Contact extends Component{
    state={showContactInfo:true}
    onDeleteClick=async (id,dispatch)=>{
        try{
            await  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>dispatch({type:'DELETE_CONTACT',payload:id}))
        }catch(err){
            dispatch({type:'DELETE_CONTACT',payload:id})
        }
      
     
    }
    
    render(){
        
        const{id,name,email,phone}=this.props.contact;
        const{showContactInfo}=this.state;
        

        return(
            <Consumer>
                {value=>{
                    const {dispatch}=value;
                    return (
                        <div className="card card-body mb-3">
                        <h4>{name}<i onClick={()=> this.setState({showContactInfo:!this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor:'pointer'}}/></h4>
                        <i className="fas fa-times" style={{cursor:"pointer" ,float:"right !important",color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}/><br/>
                        <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
                        {showContactInfo?(<ul className="list-group">
                        <li className="list-group-item">{email}</li> 
                        <li className="list-group-item">{phone}</li>
                        </ul>):null}
                       
                    </div>
                    )
                }}
            </Consumer>
           
        );
    }
}

Contact.propTypes ={
    name: PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
  
}

export default Contact;