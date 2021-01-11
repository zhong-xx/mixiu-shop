import React from 'react'
import { Form, Input, Button, message } from 'antd';
import './login.less'
import { connect } from 'react-redux'
import user from '../../../store/actions/user'

function Login(props) {
    function onFinish(values) {
        if(values.mailbox === 'admin@qq.com' && values.password === '123456') {
            props.history.push('/')
            message.success('登录成功')
            props.identityChange('admin')
            return
        }
        message.error('邮箱或密码错误')
        console.log(values)
    }

    return (
        <div className="login-wrap">
            <Form
                layout="vertical"
                labelCol={{ span: 8 }}
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="邮箱地址"
                    name="mailbox"
                    rules={[{ required: true, message: '请输入邮箱地址' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
            <div className="toRegister">新用户？去注册</div>
        </div>
    )
}

const mapDispatchToProps = function (dispatch) {
    return {
        identityChange (identity) {
            let action = user.identityChangeAction(identity)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
