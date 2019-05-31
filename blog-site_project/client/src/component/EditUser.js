import React, {Component} from 'react'

class EditUser extends Component{
    render(){
        return(
            <div className="ui main text container segment">
                <div className="ui huge header">Update Blog</div>

                <form className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="Title" placeholder="Title"/>
                    </div>

                    <div className="field">
                        <label>Image</label>
                        <input type="text" name="Image" placeholder="Image"/>
                    </div>

                    <div className="field">
                        <label>Description</label>
                        <textarea name="Description"/>
                    </div>
                    <button className="ui inverted violet big button">Update</button>
                </form>

            </div>
        )
    }
}

export default EditUser
