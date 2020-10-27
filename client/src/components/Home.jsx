import React from 'react'
import MyBox from '../components/MyBox'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/custom.css'



function Home() {
    return (
        <div className="home">
            <div className="adviceSection" style={{padding: "80px 0 0 50vw"}}>
                <MyBox />
            </div>
        </div>
    )
}

export default Home

