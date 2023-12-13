import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  scroll-behavior: smooth;
  font-size: 100%;
  @media screen and (min-width: 2500px) {
    html {
      font-size: 17px;
    }
  }
  
  @media screen and (min-width: 2750px) {
    html {
      font-size: 18px;
    }
  }
  
  @media screen and (min-width: 3000px) {
    html {
      font-size: 19px;
    }
  }
  
  @media screen and (min-width: 3250px) {
    html {
      font-size: 20px;
    }
  }
}
html,
body,
* {
  box-sizing: border-box;
  margin-block-start: 0;
  margin-block-end: 0;
}
body {
  font-family: ${props => props.theme.typography.fontFamily};
}
a {
  color: ${props => props.theme.palette.primary[400]};
  text-decoration: none;
}
code, kbd, pre, samp {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  font-size: 1em;
}

code, pre {
  background-color: #1E2C3C;
}
`;
