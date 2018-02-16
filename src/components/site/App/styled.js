// @flow

import styled from 'styled-components'
import { Col, Row, between, Container, smViewport, mdViewport } from '../Grid/index'

const Base = Col.extend`
  font-family: 'Open Sans', sans-serif;
  color: #231f20;
  padding-left: 0.5em;
  padding-right: 0.5em;  
  line-height: 1.5;
`

export const Name = styled.h1`
  max-width: 100%;
  box-sizing: border-box;
  flex: 0 0 auto;
  font-family: 'Open Sans', sans-serif;
  color: #231f20;
  padding-left: 0.5em;
  padding-right: 0.5em;  
  line-height: 1.5;
  font-weight: bold;
  font-size: 22px;
  @media ${smViewport} {
    font-size: 33px;
    text-shadow: 1px 1px 0 #979696;
  }
`

export const Phone = Base.extend`
  font-size: 16px;
  @media ${smViewport} {
    font-size: 28px;
  }
  margin-bottom: .5em;
`

export const Thesis = Base.extend`
  font-size: 16px;
  @media ${smViewport} {
    font-size: 24px;
  }
  font-style: italic;
`
export const EMail = Base.extend`
  font-size: 16px;
  @media ${smViewport} {
    font-size: 24px;
  }
  font-style: italic;
`

export const HeadRow = Row.extend`
  margin-bottom: 1em;
  align-items: center;
  ${between}
`

export const MenuIcon = Col.extend`
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4QwDFhAXFzNoPAAAAFJJREFUWMPt1LEJgEAQAMHF6nzsvwG1D41MTUQDmYHLj3t+CwB4wVLt1fHybNV4suj2wZLXrHeLTH95+vHRVddq9tPQUR3VUR0FHdVRHQWAXzkBmWjwizlEZo4AAAAASUVORK5CYII=');
  margin-left: 5px;
  margin-top: 5px;
  width: 42px;
  height: 42px;
  @media ${mdViewport} {
     display: none;
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  user-select: none;
`

export const BorderLine2 = Row.extend`
  height: 1px;
  background-color: #f8a146;
  margin-bottom: 2em;
  @media ${smViewport} {
    margin-bottom: 3em;
  }
`

export const BorderLine1 = Row.extend`
  height: 1px;
  background-color: #f9b56d;
`

export const View = Container.extend`
  padding-top: 1em;
  @media ${smViewport} {
    padding-top: 3em;
  }
  display: flex;
  flex-flow: column nowrap;
  min-height: 95vh;
`

export const Content = Col.extend`
  width: 100%;
  @media ${mdViewport} {
    width: calc(100% - 285px);
  }
`

export const Menu = Col.extend`
  display: none;
  width: 285px;
  @media ${mdViewport} {
    display: inherit;
  }
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  ul {
    margin: 0;
    padding: 0 0 0 0.5em;
  }
  li {
    list-style: none;
    line-height: 2; 
  }
  a {
    text-decoration: underline;
    color: #231f20;  
  }
  .active {
    padding: 4px 8px;
    background-color: #f68712;
    text-decoration: none;
    color: #fff;
    border-radius: 8px;
    position: relative;
    left: -8px;  
  }
`

export const ContentRow = Row.extend`
  margin-bottom: 2em;
  @media ${smViewport} {
    margin-bottom: 5em;
  }
`

export const FooterRow = Row.extend`
  margin-top: auto;
`

export const FooterCol = Col.extend`
  font-size: 10px;
  padding-left: 0.5em;
  @media ${smViewport} {
    margin-bottom: 14px;
  }
  font-family: 'Open Sans', sans-serif;
  font-weight: lighter;
  text-shadow: 1px 0 0 #979696;
  color: #656263;
  line-height: 2;
`

export const Substrate = styled.div`
  display: none;
  
  .open & {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    top: 0;
    display: initial;  
  }
`

export const SideNav = styled.div`
  height: 100%;
  width: 0;
  font-family: "Lato", sans-serif;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  
  &.open {
    width: 250px;  
  }
  
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    transition: 0.3s;
    width: 200px;
  }
  
  a:hover {
    color: #f1f1f1;
  }
  
  .closebtn:hover {
    color: #f1f1f1;
  }
  
  .closebtn {
    color: #818181;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  @media screen and (max-height: 450px) {
    padding-top: 15px;
    a {
      font-size: 18px;
    }
  }
`
