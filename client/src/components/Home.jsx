import React from 'react'
import MyBox from '../components/MyBox'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/custom.css'




function Home() {
    return (
        <div className="home">
            <div className="eyeCandy">
                <div className="corner">
                    <img src={require("../components/knotimg8.png")} style={{width: "400px"}}/>
                </div>
            </div>
            <div className="adviceSection" style={{padding: "80px 0 0 50vw"}}>
                <MyBox />
            </div>
        </div>
    )
}

export default Home

