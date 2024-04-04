import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './LoginMenu.css'

export class LoginMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userName: null
    };
  }

  componentDidMount() {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount() {
    authService.unsubscribe(this._subscription);
  }

  async populateState() {
    const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
    this.setState({
      isAuthenticated,
      userName: user && user.name
    });
  }

  render() {
    const { isAuthenticated, userName } = this.state;
    if (!isAuthenticated) {
      const registerPath = `${ApplicationPaths.Register}`;
      const loginPath = `${ApplicationPaths.Login}`;
      return this.anonymousView(registerPath, loginPath);
    } else {
      const profilePath = `${ApplicationPaths.Profile}`;
      const logoutPath = `${ApplicationPaths.LogOut}`;
      const logoutState = { local: true };
      return this.authenticatedView(userName, profilePath, logoutPath, logoutState);
    }
  }

  authenticatedView(userName, profilePath, logoutPath, logoutState) {
    return (
        <Fragment>
          <NavItem>
            <NavLink tag={Link} className="text-dark position-relative" to={profilePath}>
              <FontAwesomeIcon icon={faUser} className="icon" /> Hello {userName}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink replace tag={Link} className="text-dark position-relative" to={logoutPath} state={logoutState}>
              <FontAwesomeIcon icon={faUser} className="icon" /> Logout
            </NavLink>
          </NavItem>
        </Fragment>
    );
  }

  anonymousView(registerPath, loginPath) {
    return (
        <Fragment>
          <NavItem>
            <NavLink tag={Link} className="text-dark position-relative" to={loginPath}>
              <FontAwesomeIcon icon={faUser} className="icon" /> Logg inn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="text-dark position-relative" to={registerPath}>
              <FontAwesomeIcon icon={faUserPlus} className="icon" /> Registrer
            </NavLink>
          </NavItem>
        </Fragment>
    );
  }
}
