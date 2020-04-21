import { slide as Menu } from "react-burger-menu";
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div>
        <Menu
          enableCloseOnEsc
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link to="/account">
            <a
              id="contact"
              className="menu-item profile-nav"
              onClick={() => this.closeMenu()}
            >
              <FaUserCircle className="profile-icon" />
            </a>
          </Link>
          <Link to="/">
          <a id="home" className="menu-item" href="/">
            HOME
          </a>
          </Link>
          <Link to="/inventory">
            <a
              id="about"
              className="menu-item"
              href="/about"
              onClick={() => this.closeMenu()}
            >
              ACCESORIES
            </a>
          </Link>
          <Link to="/service">
            <a
              id="contact"
              className="menu-item"
              href="/contact"
              onClick={() => this.closeMenu()}
            >
              SERVICES
            </a>
          </Link>
          <Link to="/map">
            <a
              id="contact"
              className="menu-item"
              href=""
              onClick={() => this.closeMenu()}
            >
              MAP
            </a>
          </Link>
          <Link to="/signin">
            <a
              id="contact"
              className="menu-item signout-nav"
              onClick={() => this.closeMenu()}
            >
              SIGNOUT    <GiExitDoor/>
            </a>
          </Link>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
