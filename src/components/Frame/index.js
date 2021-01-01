import React from 'react'
import { Layout, Input } from 'antd';

const { Header, Content } = Layout;
const { Search } = Input;

function Frame(props) {
    return (
        <Layout>
            <Header style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <h2 style={{ color: 'white', fontWeight: '700', marginRight: '20px' }}>米修商城</h2>
                    <Search style={{ width: '300px' }} placeholder="输入商品名称" enterButton="搜索" size="middle" loading={false} />
                </div>
                <div style={{color: 'white', display: 'flex', fontWeight: '700'}}>
                    <div style={{marginRight: '20px'}}>注册</div>
                    <div>登录</div>
                </div>
            </Header>
            <Content>{props.children}</Content>
        </Layout>
    )
}

export default Frame
