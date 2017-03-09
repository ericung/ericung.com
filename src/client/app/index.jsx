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
                <NavItem onClick={() => this.props.onClick('About')}>About</NavItem>
            </Nav>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div style={{marginLeft: '15'}}>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

class HomeNavOption extends React.Component {
    render() {
        return (
            <div>
                <b>This is my website.</b>
            </div>

        );
    }
}

class PostsNavOption extends React.Component {
    render() {
        return (
            <div>
                <b>Posts</b>
            </div>
        );
    }
}

class ProjectsNavOption extends React.Component {
    render() {
        return (
            <div>
                <b>Projects</b>
            </div>
        );
    }
}

class AboutNavOption extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <b>Contact me via:</b>
                </p>
                <p>
                    <a href="http://www.github.com/pietore">github</a>
                </p>
                <p>
                    <a href="https://twitter.com/piameric">twitter</a>
                </p>
                <p>
                    Email: ungericwei@gmail.com
                </p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            content: <HomeNavOption/>
        }
    }
    handleClick(i) {
        switch (i) {
            case "Home": this.setState({content: <HomeNavOption/>}); break;
            case "Posts": this.setState({content: <PostsNavOption/>}); break;
            case "Projects": this.setState({content: <ProjectsNavOption/>}); break;
            case "About": this.setState({content: <AboutNavOption/>}); break;
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

