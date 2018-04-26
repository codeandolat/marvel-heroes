import React, { Component } from 'react';
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Title, HeaderLink } from '../styles'

class Header extends Component {
  render() {
    return <HeaderWrapper>
        <Grid>
          <Row middle="xs" between="xs">
            <Title>Marvel API</Title>
            <HeaderLinksWrapper>
              <Row middle="xs" around="xs">
                <HeaderLink href="/">Comics</HeaderLink>
                <HeaderLink href="/about">About</HeaderLink>
              </Row>
            </HeaderLinksWrapper>
          </Row>
        </Grid>
      </HeaderWrapper>;
  }
}

const HeaderWrapper = styled.div`
  background-color: #2196f3;
  padding: 10px;
`;

const HeaderLinksWrapper = styled.div`
  min-width: 200px;
`;

export default Header;
