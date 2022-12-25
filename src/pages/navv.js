import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'reactstrap';
import { useSetAccount } from '../hooks/useStateAccount';
import { useSelector } from 'react-redux';
import { parseAddress } from '../utils/parseAddress';
import { Link } from "react-router-dom"


const Navv = () => {
  const { connectAccount } = useSetAccount();
  const account = useSelector((state) => state.accounts.account)
  return (
    <div>
      <Navbar className='custom-shape' expand="lg">

        <Link id='navleft' className='navlink' to="/" onClick="/">Cool Cats</Link>

        <Nav className="ml-auto">
          <NavItem id={document.URL === "http://localhost:3000/" ? "selected" : "nonselected"} className='mx-4 navlink'>
            <Link className="navlink" to="/" onClick="/">Homepage</Link>
            <div id={document.URL === "http://localhost:3000/" ? "asd" : ""}>
            </div>
          </NavItem>

          <NavItem id={document.URL === "http://localhost:3000/introduction" ? "selected" : "nonselected"} className='mx-4 navlink'>
            <Link className='navlink' to="/introduction" onClick="/introduction">Introduction</Link>
            <div id={document.URL === "http://localhost:3000/introduction" ? "asd" : ""}>
            </div>
          </NavItem>

          <NavItem id={document.URL === "http://localhost:3000/collection" ? "selected" : "nonselected"} className='mx-4 navlink'>
            <Link className="navlink" to="/collection" onClick="/collection">Collection</Link>
            <div id={document.URL === "http://localhost:3000/collection" ? "asd" : ""}>
            </div>
          </NavItem>

          <NavItem id="buton" className="mx-4 navlink">
            <Button onClick={() => connectAccount()} color='warning'>{account ? parseAddress(account) : "Connect"}</Button>
          </NavItem>
        </Nav>

      </Navbar>
    </div>
  )
}
export default Navv;