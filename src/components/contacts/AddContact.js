            import React, { Component } from 'react'
            import {Consumer} from '../../context'
            import {v4 as uuid} from 'uuid';
            import TextInputGroup from '../layout/TextInputGroup'
            class AddContact extends Component {
                state ={
                    
                    name:' ',
                    email:' ',
                    phone:' '
                    
                };

                onChange = e =>
                    this.setState = ({ [e.target.name]: e.target.value });
                
            
                onSumbit=(dispatch,e)=>{
                    e.preventDefault();
                   
                    const{name,email,phone}=this.state;
                    const newContact ={
                        id:uuid(),
                        name,
                        email,
                        phone
                    }
                    dispatch({type:'ADD_CONTACT',payload:newContact})
                    //clear state
                    
                };
            
                render() {
                    const {name,email,phone}=this.state;
                    
                    return (
                        <Consumer>
                            {value =>{
                                const{dispatch}=value;
                                return (
                            <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSumbit.bind(this,dispatch)}>
                                
                                <TextInputGroup 
                                   label="name"
                                   name="name"
                                   placeholder="Enter name..............."
                                   value={name}
                                   onChange={this.onChange}
                                 />


                                
                                <TextInputGroup 
                                   label="Email"
                                   name="email"
                                   type="email"
                                   placeholder="Enter email..............."
                                   value={email}
                                   onChange={this.onChange}
                                 />

                                
                                <TextInputGroup 
                                   label="Phone"
                                   name="phone"
                                   placeholder="Enter phone" 
                                   value={phone}
                                   onChange={this.onChange}
                                   placeholderTextColor="red"
                                 />

                                <input
                                type="submit"
                                value="ADD CONTACT"
                                className="btn btn-light btn-block"

                                />

                        

                               
                                </form>
                                
                            </div>
                        </div>  
                                )
                            }}
                        </Consumer>

                    )



                
                }
            }
            export default AddContact;