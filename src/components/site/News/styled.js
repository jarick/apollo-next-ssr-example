// @flow

import styled, { injectGlobal } from 'styled-components'
import { Col, mdViewport, Row } from '../Grid'

export const Menu = styled.div`
  
`

export const Clear = styled.div`
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
  margin-bottom: 1.5em;
`

export const MenuItem = styled.div`
  display: inline-block;
  float: left;
  padding: 4px 8px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  a {
    color: #231f20;
    text-decoration: none;
    border-bottom: dashed 1px #231f20;
    text-shadow: 0 0 0 #231f20;
  }
  &.active {
    background-color: #f4f4f4;
    border-radius: 16px;
    border: solid 1px #2aa542;
    padding: 3px 8px;
    a {
      border-bottom: none;
    }
  }
`

export const Row1 = Row.extend`
  margin-bottom: 0.5em;
`

export const Title = Col.extend`
  font-weight: bold;
  text-shadow: 0 0 0 #231f20;
  font-size: 1em;
  @media ${mdViewport} {
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
    color: #231f20;
  }
`

export const Box = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding: 1em;
  background-color: #f4f4f4;
  margin-bottom: 2.5em;
`

export const DetailBox = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding: 1em;
  background-color: #f4f4f4;
`

export const Date = Col.extend`
  font-size: 1em;
  font-style: italic;
  color: #231f20;
  &:after {
    padding: 0 0.5em;
    content: " / ";
  }
`

export const Description = Col.extend`
  font-size: 1em;
  font-style: italic;
  a {
    color: #231f20;
  }
`

export const Row2 = Row.extend`
  margin-bottom: 1.5em;
`

export const Text = Col.extend`
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  img {
    float: left;
    margin: 0 8px 8px 0;
  }
`
export const TextDetail = Col.extend`
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  img {
    max-width: 100%;
  }
`


export const Detail = Col.extend`
  font-weight: bold;
  text-shadow: 0 0 0 #231f20;
  font-size: 1em;
  a {
    color: #231f20;
    text-decoration-style: solid;
  }
`

export const Row3 = Row.extend`
  margin-bottom: 1em;
`

export const Paginate = styled.div`
  margin-left: 1em;
`

export const PaginateItem = styled.div`
  display: inline-block;
  float: left;
  margin: 0 0.5em;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  line-height: 2;
  a {
    color: #231f20;
    text-decoration: none;
    border-bottom: solid 1px #231f20;
    text-shadow: 0 0 0 #231f20;
  }
  &.active {
    a {
      color: #f68712;
      border-bottom: none;
    }
  }
`

export const xbbcode = injectGlobal`

.xbbcode-tabs {
  padding: 0 10px;
}

.xbbcode-b {
    font-weight:bold;
}

.xbbcode-blockquote {

}

.xbbcode-center {
  margin-left:auto;
	margin-right:auto;
	display: block;
	text-align: center;
}

.xbbcode-code {
    white-space: pre-wrap;
    font-family: monospace;
}

.xbbcode-i {
    font-style: italic; 
}

.xbbcode-justify {
	display: block;
	text-align: justify;
}

.xbbcode-left {
	display: block;
	text-align: left;
}

.xbbcode-right {
	display: block;
	text-align: right;
}

.xbbcode-s {
    text-decoration: line-through;
}

.xbbcode-size-4 {font-size:4px;}
.xbbcode-size-5 {font-size:5px;}
.xbbcode-size-6 {font-size:6px;}
.xbbcode-size-7 {font-size:7px;}
.xbbcode-size-8 {font-size:8px;}
.xbbcode-size-9 {font-size:9px;}
.xbbcode-size-10 {font-size:10px;}
.xbbcode-size-11 {font-size:11px;}
.xbbcode-size-12 {font-size:12px;}
.xbbcode-size-13 {font-size:13px;}
.xbbcode-size-14 {font-size:14px;}
.xbbcode-size-15 {font-size:15px;}
.xbbcode-size-16 {font-size:16px;}
.xbbcode-size-17 {font-size:17px;}
.xbbcode-size-18{font-size:18px;}
.xbbcode-size-19 {font-size:19px;}
.xbbcode-size-20 {font-size:20px;}
.xbbcode-size-21 {font-size:21px;}
.xbbcode-size-22 {font-size:22px;}
.xbbcode-size-23 {font-size:23px;}
.xbbcode-size-24 {font-size:24px;}
.xbbcode-size-25 {font-size:25px;}
.xbbcode-size-26 {font-size:26px;}
.xbbcode-size-27 {font-size:27px;}
.xbbcode-size-28 {font-size:28px;}
.xbbcode-size-29 {font-size:29px;}
.xbbcode-size-30 {font-size:30px;}
.xbbcode-size-31 {font-size:31px;}
.xbbcode-size-32 {font-size:32px;}
.xbbcode-size-33 {font-size:33px;}
.xbbcode-size-34 {font-size:34px;}
.xbbcode-size-35 {font-size:35px;}
.xbbcode-size-36 {font-size:36px;}
.xbbcode-size-37 {font-size:37px;}
.xbbcode-size-38 {font-size:38px;}
.xbbcode-size-39 {font-size:39px;}
.xbbcode-size-40 {font-size:40px;}

.xbbcode-u {
    text-decoration: underline;
}

.xbbcode-table {
    border-collapse:collapse;
}

.xbbcode-tr {

}

.xbbcode-table , .xbbcode-th, .xbbcode-td {
    border: 1px solid #666;
}
`
