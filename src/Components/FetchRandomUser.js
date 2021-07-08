import React, { Component } from 'react'

class FetchRandomUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            person: null,
        }
    }

    async componentDidMount() {
        const url = "https://randomuser.me/api"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading:false });
        console.log(data)
    }
    
    render() {
        return (
            <>
                <div className="second">
                    {this.state.loading || !this.state.person ? (
                    <div>Loading...</div>
                    ) : ( 
                    <div>
                        <div>{this.state.person.name.first} </div>
                        <div>{this.state.person.name.last}</div>
                        <div>{this.state.person.email}</div>
                    </div>
                    )}
                </div>
            </>
            
        )
    }
}

export default FetchRandomUser