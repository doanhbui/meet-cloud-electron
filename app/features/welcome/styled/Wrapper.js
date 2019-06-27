// @flow

import styled from 'styled-components';
import image from '../../../images/watermark.png'
export default styled.div`
    // background: #1D69D4;
    background: url(${image});
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;