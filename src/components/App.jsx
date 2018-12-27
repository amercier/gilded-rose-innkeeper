import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { ExternalLink } from './Link';
import Items from './Items';

const authorLink = (
  <ExternalLink href="https://github.com/amercier">Alex Mercier</ExternalLink>
);

const employerLink = (
  <ExternalLink href="https://brennus-analytics.com/">
    Brennus Analytics
  </ExternalLink>
);

const Layout = styled.div`
  box-sizing: border-box;
  background: #e9e9e9;
  min-height: 100vh;
`;

const containerStyles = `
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
`;

const innerSpacing = '4rem';

const rubbonHeight = '4rem';

const rubbonStyles = `
  height: ${rubbonHeight};
  line-height: ${rubbonHeight};
`;

const Header = styled.div`
  height: ${rubbonHeight};
  line-height: ${rubbonHeight};
  background: #001529;
  color: #fff;
`;

const HeaderContent = styled.div`
  ${containerStyles}
  ${rubbonStyles}
  padding: 0 ${innerSpacing};
`;

const Content = styled.div`
  ${containerStyles}
  padding: ${innerSpacing};
  box-sizing: border-box;
  min-height: calc(100vh - 2 * ${rubbonHeight});
  background: #fff;
`;

const Footer = styled.div`
  ${rubbonStyles}
  text-align: center;
`;

/**
 * Root application component.
 *
 * @returns {React.Element} The rendered element.
 */
const App = () => (
  <Layout>
    <Header>
      <HeaderContent>
        <Icon type="home" /> Gilded Rose Inn
      </HeaderContent>
    </Header>
    <Content>
      <Items />
    </Content>
    <Footer>
      Created by {authorLink} for {employerLink}.
    </Footer>
  </Layout>
);

export default App;
