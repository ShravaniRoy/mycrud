import React from 'react';
import '../App.css';

class  Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username : "",
            password : "",
            languages: []
        }
        this.handleInput = this.handleInput.bind(this);
    }
    
    componentDidMount(){

    }

    handleInput(event){
        
        this.setState({
          [event.target.name]: event.target.value 
        })
    }
    

    render(){
        let { languages } = this.state;
        return(
            <div className="container">
                <div className="col-md-6 col-sm-3 col-lg-9  ">
                    <div>
                        {/* <select name="languages">
                            {languages.map(item => {
                                <option value={item}></option>
                            })
                            }
                        </select> */}
                    </div>
                    <h1>Register Here</h1>
                    <form>
                        <input 
                            type="text" 
                            value={this.state.username}
                            name="username" 
                            placeholder="Username" 
                            onChange={this.handleInput} 
                        />
                        <input 
                            type="password" 
                            value={this.state.password}
                            name="password" 
                            placeholder="Password" 
                            onChange={this.handleInput}
                        />
                        <button name="submit" >Submit</button>
                        <h2>{this.state.username}{ this.state.password}</h2>
                    </form>
                   
                </div>
            </div>
        )
    }
    
}

export default Register;