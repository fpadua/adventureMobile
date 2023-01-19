import styled from "styled-components";
import { Box } from 'native-base';

export const Container = styled(Box)`
  position: absolute;
  z-index: 10;
  width: 100%;
  bottom: 0;
  background: #eee;
  padding: 30px 5px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-top: 1px solid #333;
  box-shadow: 1px -5px 15px black;
`;