import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Nav,
    NavItem 
} from 'react-bootstrap';

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

class HomeNavOption extends React.Component {
    render() {
        return (
            <p>
                Home
            </p>
        );
    }
}

class PostsNavOption extends React.Component {
    render() {
        return (
            <p>
                Posts
            </p>
        )
    }
}

class ProjectsNavOption extends React.Component {
    render() {
        return (
            <p>
                Projects
            </p>
        )
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
        switch (i) {
            case "Home": this.setState({content: <HomeNavOption/>}); break;
            case "Posts": this.setState({content: <PostsNavOption/>}); break;
            case "Projects": this.setState({content: <ProjectsNavOption/>}); break;
        }
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

