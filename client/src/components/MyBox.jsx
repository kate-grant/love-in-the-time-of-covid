import React, { Component } from 'react'

import apis from '../api'



const StyledBox = ({idea, location, tag}) => (
    <div style={{display: "flex"}, {border: "5px solid black"}}>
        <p>{idea}</p>
        <span>{location}</span>
        <span>{tag}</span>
    </div>
    );

class MyBox extends Component {
    constructor(props) {
        super(props);
        this.state= {
            myAdvice: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})

        console.log('will get');

        await apis.getAllAdvice({
            
            auth: {
                username: 'main',
                password: 'artiemain'
            }
        }).then(myAdvice => {
            this.setState({
                myAdvice: myAdvice.data,
                isLoading: false,
            })
        })
        console.log('did get?');
    }

    render () {
        return (
        <div>
            {this.state.myAdvice.map((advice, index) => (
                <StyledBox {...advice} />
            ))}
        </div>)
    }
}

export default MyBox