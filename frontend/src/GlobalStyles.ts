import reset from 'styled-reset';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${reset};
  body {
    background-color: #f2f3f5;
  }
`;
