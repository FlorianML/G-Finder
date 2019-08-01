import React, { useState, useContext } from 'react'
import GitHubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

function Search({ showAlert }) {
    const githubContext = useContext(GitHubContext)
    const alertContext = useContext(AlertContext)

    const { searchUsers, clearUsers, users } = githubContext

    const [text, setText] = useState('')

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Enter a name', 'alert-danger')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    value={text}
                    name="text"
                    placeholder="Search for User.."
                    onChange={onChange}
                />

                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {users.length > 0 && (
                <button className="btn-light btn-block btn" onClick={clearUsers} >Clear</button>
            )}
        </div>
    )

}

export default Search
