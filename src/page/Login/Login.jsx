import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import {https} from '@/api/Http/https.jsx'
import logo from '@/assets/imgs/LOGO.jpg'
import '@/page/Login/Login.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/moudle/moudle';
export default function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const onFinish = (values) => {
        const { password, username } = values
        https.post('/login',{
            username,
            password
        }).then((res)=>{
           if(res.data.status===0){  
            message.success('登录成功')
            navigate('/admin',{replace:true})
            dispatch(setUser(username))
           }else{
            console.log('用户名或密码错误');
            message.error('用户名或密码错误')
           }
        }).catch((err)=>{
            console.log(err);
        })
    };
    return (
        <div className='login'>
            <div className='header'>
                <img src={logo} alt=''/>
                <span>医院管理后台</span>
            </div>
            <div className='from'>
                <p>用户登录</p>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                            {
                                min: 2,
                                message: '用户名长度最少为4位'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            {
                                pattern: /^[A-z0-9]{2,}$/,
                                message: '密码格式错误!'
                            }
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
