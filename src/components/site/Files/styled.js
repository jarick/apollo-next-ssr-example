// @flow

import styled from 'styled-components'

export const Item = `
  width: 100%;
  margin-top: 10px;
  margin-bottom: 1em;
  margin-left: 3px;
  font-family: 'Open Sans',sans-serif;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
      
  a {
    text-decoration: underline;
    color: #231f20;
    line-height: 1.5;
  }
`

export const FolderLink = styled.div`
  ${Item}
  
  &:before {
    width: 21px;
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAB3RJTUUH4QseEwskF01TCQAAAHlJREFUOMtj/P//PwOx4HOQDHbFrOwMPPMvMDJy8TIwMDAwsDCQCJgW38QQ+z8hm+HPmT3/We0CGRkYGBiYGKgBzDwY/hzbAucyfgqU/k+pSxm+f2H4l23FwPD7J8JQrArJBP9i1ankfXTfjBo6auiooVQEJBcoxAAA8JgiuYfWzZ8AAAAASUVORK5CYII=');
    padding: 0 1em;
    position: relative;
    top: 3px;
  }
`

export const FileLink = styled.div`
  ${Item}
  
  &:before {
    width: 21px;
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAVCAYAAABPPm7SAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAB3RJTUUH4QseEwwX59yk2AAAAFZJREFUOMtj1Frq9J+BAsDCwMDAcMp/E1mazTb6QQxgYGBgmH1zOcPsG8uJ0piqEcmQqh6JcAEDAwNDqjpCkBTAxEAhGHgvjAbiaCCOeoFKXmCktEwEAJMkPe2v5g/CAAAAAElFTkSuQmCC');
    padding: 0 1em;
    position: relative;
    top: 1px;
  }
`
