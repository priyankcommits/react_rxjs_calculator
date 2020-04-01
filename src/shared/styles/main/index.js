// Main styles and share styles go here
import styled from 'styled-components';

const HomeStyle =  styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const BoxStyle = styled.div`
  border-style: double;
  border-color: lightgray;
  border-radius: 5px;
  text-align: right;
  min-height: 50px;
`;

const OverFlowProtect = styled.div`
  overflow-wrap: break-word;
`;

const RoundedButton = styled.div`
  border-radius: 50%;
`;

export { HomeStyle, BoxStyle, OverFlowProtect, RoundedButton };
