import React from 'react'
import PropTypes from 'prop-types'

//FUNCTIONAL BASED REACT
function Nav({ title, icon }) {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
}

Nav.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Nav






//CLASS BASED REACT
// export class Nav extends Component {

//     static defaultProps = {
//         title: 'Github Finder',
//         icon: 'fab fa-github'
//     }

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <nav className="navbar bg-primary">
//                 <h1>
//                     <i className={this.props.icon} /> {this.props.title}
//                 </h1>
//             </nav>
//         )
//     }
// }

