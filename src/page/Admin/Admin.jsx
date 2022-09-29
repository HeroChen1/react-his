import LeftNav from '@/LeftNav/LeftNav';
import { Layout, Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '@/page/Admin/Admin.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/moudle/moudle'

const { Header, Footer, Sider, Content } = Layout;
const { confirm } = Modal;

export default function Admin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //存当前时间
  const [time, setTime] = useState([])
  //读取状态
  const { username, navName } = useSelector(state => state.userReducer)
  //检验是否处于登录状态
  useEffect(() => {
    if (!username) navigate('/login', { replace: true })
  }, [username, navigate])//登录于页面跳转时触发
  //获取当前时间
  const getDate = () => {
    let date = new Date();
    let year = date.getFullYear(); //获取当前年份
    let mon = date.getMonth() + 1; //获取当前月份
    mon = mon < 10 ? '0' + mon : mon
    let da = date.getDate(); //获取当前日
    da = da < 10 ? '0' + da : da
    let h = date.getHours(); //获取小时
    h = h < 10 ? '0' + h : h
    let m = date.getMinutes(); //获取分钟
    m = m < 10 ? '0' + m : m
    let s = date.getSeconds();//获取秒钟
    s = s < 10 ? '0' + s : s
    return `${year}-${mon}-${da} ${h}:${m}:${s}`
  }
  //启动定时器--动态当前时间
  useEffect(() => {
    setInterval(() => { setTime(getDate()) }, 1000)
  }, [time])
  //退出登录并清除账号
  const exit = () => {
    confirm({
      title: '确定退出吗?',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        console.log('确定');
        navigate('/login', { replace: true })
        dispatch(setUser(''))
      },

      onCancel() {
        console.log('取消');
      },
    });
  }

  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Sider style={{ color: '#fff' }}>
          <LeftNav />
        </Sider>
        <Layout>
          <Header style={{ height: '60px', backgroundColor: '#fff' }} className='head' >
            <div className='top'>
              <div className='left'>
                {/* 欢迎，{username} */}
                <span className='coding'>
                机构国家编码：H41080210334
                </span>
                <span className='uname'>
                  登录用户：{username}
                </span>
              </div>
              <div className='right'>
                <Button type="primary" size='small'>增加</Button>
                <Button type="primary" size='small'>删除</Button>
                <Button type="primary" size='small'>取消</Button>
                <Button type="primary" size='small'>保存</Button>
                <Button type="primary" size='small' onClick={exit}>退出</Button>
                {/* -----------------------------退出------------------------------ */}
                {/* <span className='exit' onClick={exit}>退出</span> */}
              </div>
            </div>
            <div className='buttom'>
              <span>当前位置：{navName}</span>
              <span>{time}</span>
            </div>
          </Header>
          <Content style={{ margin: '15px', backgroundColor: '#fff' }}><Outlet /></Content>
          <Footer style={{ textAlign: 'center', color: '#d6d5d5', fontSize: '14px', padding: '10px 50px 20px ' }}>推荐使用谷歌浏览器，可以获得更加页面操作体验</Footer>
        </Layout>
      </Layout>
    </>
  )
}
