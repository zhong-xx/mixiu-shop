import React from 'react'
import { Layout, Input } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const { Header, Content } = Layout;
const { Search } = Input;

function Frame(props) {
    console.log(props.identity)
    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <h2 style={{ color: 'white', fontWeight: '700', marginRight: '20px' }}>米修商城</h2>
                    <Search style={{ width: '300px' }} placeholder="输入商品名称" enterButton="搜索" size="middle" loading={false} />
                </div>
                <div style={{ display: 'flex', fontWeight: '700', color: 'white' }}>
                    {
                        props.identity === 'visitor'?
                        (<div>
                            <Link to="/register" style={{ color: 'white', marginRight: '20px' }}>注册</Link>
                            <Link to="/login" style={{ color: 'white' }}>登录</Link>
                        </div>): (props.identity === 'admin'? <div>admin</div>: '12')
                    }
                </div>
            </Header>
            <Content style={{ background: 'white' }}>{props.children}</Content>
        </Layout>
    )
}

const mapStateToProps = function (state) {
    console.log(state)
    return {
        identity: state.user.identity
    }
}

export default connect(mapStateToProps)(Frame)
