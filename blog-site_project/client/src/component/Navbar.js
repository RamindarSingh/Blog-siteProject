import React from 'react'
import '../style/style.css'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav>
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <Link to="/" className="header item"><i className="globe icon"></i>Blog Site</Link>
                        <Link to="/" className="item">Home</Link>
                        <Link to="/new" className="item">New Blog</Link>
                </div>
            </div>


        </nav>
    )

}

export default Navbar

