import './App.css';
import React from 'react';
import 'antd/dist/antd.css';

import AppHeader from './Component/Common/header';


import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import View from './Component/View/View';
const { Header } = Layout;



function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <View />
      </Content>
    </Layout>
  );
}

export default App;
