import React, {Component} from 'react'
import img from '../img/WhatsApp Image 2018-01-09 at 7.09.26 AM.jpeg'

class SingleUser extends Component{
    render(){
        return(
            <div className="ui main text container segment">
                <div className="ui huge header">SingleUser</div>
                <hr/>
                <div className="ui top attached">
                    <div className="item">
                        <img className="ui centered rounded image" src={img} alt="img_alt_text"/>
                        <div className="content"><span>7/7/19</span></div>
                        <hr/>
                        <div className="description">
                            <p>paragraph</p>
                        </div>
                        <hr/>
                        <div>
                            <button className="ui inverted orange button">Edit</button>
                            <button className="ui inverted red button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleUser