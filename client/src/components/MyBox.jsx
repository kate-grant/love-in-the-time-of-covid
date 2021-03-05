import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
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
            begin: 0,
            end: 5,
            items:[]
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})

        console.log('will get');

        await apis.getAllAdvice().then(myAdvice => {
            this.setState({
                myAdvice: myAdvice.data.data.sort().reverse() ,
                isLoading: false,
                items: myAdvice.data.data.slice(this.begin, this.end),
                begin: this.begin + 5,
                end: this.state.end + 5
            })
        })
        console.log('did get?');
        //console.log(JSON.stringify(items))
    }

    

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(this.state.myAdvice.slice(this.begin, this.end)),
            begin: this.begin + 5,
            end: this.state.end + 5
          });
        }, 1500);
        
      };

    

    render () {
        //const {myAdvice} = this.state
        //{console.log(this.state.items.length);}
        return (
        
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    >
                    {this.state.items.map((advice, index) => (
                        <StyledBox {...advice} />
                    ))}
                </InfiniteScroll>
                
            )

        


       
    }
}

export default MyBox