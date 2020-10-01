import React, { Component } from 'react'

import apis from '../api'
import '../components/custom.css'



const StyledBox = ({idea, location, tag}) => (
    <div className={`sBox ${tag}`} style={{display: "flex"}}>
        <p className="adviceContent">{idea}</p>
        <span className="locationContent">{location}</span>
        <span className="tagContent">{tag}</span>
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

        await apis.getAllAdvice().then(myAdvice => {
            this.setState({
                myAdvice: myAdvice.data.data,
                isLoading: false,
            })
        })
        console.log('did get?');
    }

    render () {
        const {myAdvice} = this.state
        return (
        <div>
            {this.state.myAdvice.map((advice, index) => (
                <StyledBox {...advice} />
            ))}
        </div>)
    }
}

export default MyBox