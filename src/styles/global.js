import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
p,
span {
  margin: 0;
}
html {
  font-size: 16px;
}
#root {
  width: 100%;
  height: 100vh;
}
iframe {
  width: inherit;
  height: inherit;
}
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
button {
  font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyle;
