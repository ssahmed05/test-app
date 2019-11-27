
/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav,Collapse } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import logo from "logo-white.svg";
import myStyle from 'assets/css/collaspe.css'



var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.state = {isOpen: false, open:false}
    
    
  }
  

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    // console.log(this.props.location.pathname);
    if (this.props.location.pathname == "/admin/HR_Management") {
      // if (this.props.location.pathname == "/admin/HR_Management") {
        // console.log(this.props.routes);

      // } else {

      // }
    }else {

      return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  
  componentWillUnmount() {
    const [isOpen, setOpen] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({isOpen});
  }
 
  render() {
    return (
      <div className="sidebar" data-color={this.props.backgroundColor}>
        <div className="logo">

          <a
            href="#"
            className="simple-text logo-mini"
            target="_blank"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>

          <a
            href="#"
            className="simple-text logo-normal"
            // target="_blank"
          >

            Test App

          </a>

        </div>

        <div className="sidebar-wrapper" ref="sidebar">
          
          <Nav>
            
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              
              return (
                <li onClick={function(){this.setState({open:!this.state.open}); console.log(this.state);
                }.bind(this)}
                className={this.activeRoute(prop.layout + prop.path)} key={key}>

                  <NavLink to={prop.layout + prop.path} className="nav-link" activeClassName= {prop.sub_menu == null ? "active" : ""}
                  >

                    <i className={"now-ui-icons " + prop.icon} />
                    
                    <p >{prop.name} <span className={"float-right mr-4 mt-2 now-ui-icons " + prop.dropdownIcon}/></p>
                    
                      {
                        (prop.sub_menu) && prop.sub_menu.map((p, k) => {
                        if (prop.redirect) return null;
                        // console.log(prop.sub_menu);
                        // console.log(prop.path);
                        return (
                          <div key={k} className={this.state.open? "panel-collapse": "panel-collapse panel-close"}>
                          <li
                            className={this.activeRoute(p.layout + p.path) }
                            key={k}
                          >
                            <NavLink
                              to={p.layout + p.path} className="nav-link" activeClassName="active"
                            >
                              <i className={"now-ui-icons " + p.icon} />
                              <p style={{fontSize:8}}>{p.name}</p>
                            </NavLink>
                          </li>
                        
                        </div>
                        );
                      })
                      }
                    
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}


export default Sidebar;
