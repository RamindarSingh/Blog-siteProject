import React, { Component } from 'react'
//import img from '../img/WhatsApp Image 2018-01-09 at 7.09.26 AM.jpeg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/userActions'

class Users extends Component{

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){

        const {users} = this.props;
        let userData;
        console.log('Users : ' + users);
        console.log('this : ' + this);
        if(users.length === 0){
            userData = <h1>Loading.....</h1>
        } else{
            userData = users.map(user =>(
            <div className="item">
                <div className="image">
                    <img src={users.image} alt="user image"/>
                </div>
                <div className="content">
                    <a className="header">{users.title}</a>
                    <div className="meta">
                        <span>Under meta span</span>
                    </div>
                    <div className="description">
                        <p>{users.description}</p>
                    </div>
                    <div className="extra">

                        <Link to="/users/:id" className="ui floated basic violet button">Read More <i className="right chevron icon"></i>

                        </Link>
                    </div>
                </div>
            </div>
            ))
        }

        return(
            <div className="ui main text container">
                <div className="ui huge header">BLOG SITE</div>
                <div className="ui top attach segment">
                    <div className="ui divided items">
                        {userData}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users
})

export default connect(mapStateToProps, {fetchUsers})(Users)