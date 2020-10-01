
import React from 'react'



import NavBar from '../components/NavBar'
import MyBox from '../components/MyBox'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/custom.css'



function App() {
    return (
        <div>
            <NavBar />
            <div className="adviceSection" style={{padding: "80px 0 0 50vw"}}>
                <MyBox />
            </div>
        </div>
    )
}

export default App
