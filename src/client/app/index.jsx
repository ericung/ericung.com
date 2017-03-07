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
                <NavItem onClick={() => this.props.onClick('Home')}>Home</NavItem>
                <NavItem onClick={() => this.props.onClick('Posts')}>Posts</NavItem>
                <NavItem onClick={() => this.props.onClick('Projects')}>Projects</NavItem>
            </Nav>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <p>{this.props.value}</p>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            content: "This is content"
        }
    }
    handleClick(i) {
        this.setState({content: i});
    }
    render() {
        return (
        <div>
            <NavMenu onClick={(i)=>this.handleClick(i)} />
            <Content value={this.state.content}/>
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

