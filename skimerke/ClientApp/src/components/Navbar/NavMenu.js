import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from '../api-authorization/LoginMenu';
import './NavMenu.css';
import Logo from '../../images/logo.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      activeNavItem: 'home' // Default active navigation item
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleNavItemSelect = (navItem) => {
    this.setState({ activeNavItem: navItem });
  }

  render() {
    const { activeNavItem } = this.state;

    return (
        <header>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow py-3 px-5 gradient" container light>
            <Link to="/" onClick={() => this.handleNavItemSelect('home')}>
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className={`nav-link text-dark ${activeNavItem === 'home' ? 'active' : ''}`} to="/" onClick={() => this.handleNavItemSelect('home')}>Hjem</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={`nav-link text-dark ${activeNavItem === 'krav-og-info' ? 'active' : ''}`} to="/krav-og-info" onClick={() => this.handleNavItemSelect('krav-og-info')}>Krav og info</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={`nav-link text-dark ${activeNavItem === 'fetch-data' ? 'active' : ''}`} to="/fetch-data" onClick={() => this.handleNavItemSelect('fetch-data')}>Hjelp</NavLink>
                </NavItem>
                <LoginMenu />
              </ul>
            </Collapse>
          </Navbar>
        </header>
    );
  }
}
