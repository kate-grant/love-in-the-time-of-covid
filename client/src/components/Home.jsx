import React from 'react'
import MyBox from '../components/MyBox'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/custom.css'




function Home() {
    return (
        <div className="home">
            <div className="scrollerText">
            ｡･ﾟﾟ･ *✧･ﾟ♥༻✧° ♡゜・.･༓･*♥˚⁺‧͙♡ 𐐪𐑂 °♡°ₒ♥̩̥̩♥̩̩̥͙♥̩͙ˊˎ
            </div>
            <div className="eyeCandy">
                <div className="corner">
                    <img src={require("../components/knotimg8.png")} style={{width: "400px"}}/>
                </div>
                <div className="sonnet">
                    <div className="line1">
                        <p>Shall I compare thee to pre-covid’s day?</p>
                    </div>
                    <div className="line1">
                        <p>Thou art more lovely and more temperate: </p>
                    </div>
                    <div className="line1">
                        <p>Rough winds do shake the paper mask in May,</p>
                    </div>
                    <div className="line1">
                        <p>And summer’s lease hath all too short a date:</p>
                    </div>
                    <div className="line1">
                        <p>Sometime too hot the eye of heaven shines,</p>
                    </div>
                    <div className="line1">
                        <p>And often is his hiding fevers grim;</p>
                    </div>
                    <div className="line1">
                        <p>And every fair from fair sometime declines,</p>
                    </div>
                    <div className="line1">
                        <p>By chance, or fear of leaving hair untrimmed:</p>
                    </div>
                    <div className="line1">
                        <p>Nor lose possession of that fair thou ow’st,</p>
                    </div>
                    <div className="line1">
                        <p>Nor shall death brag thou hast from Fauci strayed</p>
                    </div>
                    <div className="line1">
                        <p>When in eternal vaccine wait doth grow’st:</p>
                    </div>
                    <div className="line1">
                        <p>So long as men can breathe or eyes can see,</p>
                    </div>
                    <div className="line1">
                        <p>So long lives this, and this gives life to thee.</p>
                    </div>
                    

                </div>
            </div>
            <div className="adviceSection" style={{padding: "30px 0 0 50vw"}}>
                <MyBox />
            </div>
        </div>
    )
}

export default Home

