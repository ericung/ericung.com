import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Nav,
    NavItem 
} from 'react-bootstrap';
import AwesomeComponent from './AwesomeComponent.jsx';

class NavMenu extends React.Component {
    render() {
        return (
            <Nav bsStyle="pills">
                <NavItem onClick={() => alert('Home')}>Home</NavItem>
                <NavItem onClick={() => alert('Posts')}>Posts</NavItem>
                <NavItem onClick={() => alert('Projects')}>Projects</NavItem>
            </Nav>
        );
    }
}

class App extends React.Component {
    render() {
        return (
        <div>
            <NavMenu/>
            <div className="content"></div>
        </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
