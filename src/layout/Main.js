import './Main.css';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import First from '../pages/First';
import Login from '../pages/Login';
import { useViewport } from '../component/ViewportContext'
import { routes } from '../layout/routes'

import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom';
import { useState } from 'react';
export default function Main() {
    const { Header, Content, Footer, Sider } = Layout;
    const { width } = useViewport();
    console.log(width);
    const [loggin, setLoggin] = useState(false);
    const handleOnLoggin = (e) => {
        setLoggin(true);
    }
    const handleLoggined = (e) => {
        setLoggin(false);
    }
    return (
        <>
            <Router>
                <Layout>
                    <Header className="header">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                            {
                                routes.map((route, index) => (
                                    <Menu.Item key={index} onClick={handleLoggined} ><Link to={route.path}>{route.label} </Link></Menu.Item>
                                ))
                            }
                            <Menu.Item key='login' style={{ marginLeft: '60%' }} onClick={handleOnLoggin}><Link to='/login'>登录</Link> </Menu.Item>
                            <Menu.Item key='regist'><Link to='regist'>注册</Link> </Menu.Item>
                        </Menu>

                    </Header>
                    <Content style={{ padding: '0 50px', background: "#F0F2F5" }}>
                        {
                            loggin ? <SwitchRoute /> : <LogginedLay width={width} />
                        }
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>

        </>
    );
}
function LogginedLay(props) {
    return (
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            {
                props.width > 1000 ? <ChangeSider /> : <ChangeContent />
            }
        </Layout>
    )
}
function GetParams() {
    let { id } = useParams();
    const { Content } = Layout;
    return (
        <Content
            style={{ minHeight: 280, background: 'white' }}>
            {id}
        </Content>
    )
}
function ChangeSider() {
    const { Sider } = Layout;
    return (
        <>
            <Sider width='30%' style={{ height: 800, background: 'white', marginRight: 10 }} minHeight='400'>
                <First />
            </Sider>
            <SwitchRoute />
        </>

    )
}
function ChangeContent() {
    const { Content } = Layout;
    return (
        <>
            <SwitchRoute />
            <Content
                style={{ marginTop: 5, minHeight: 280 }}>
                <First />
            </Content>
        </>
    )
}
function SwitchRoute() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path='/page3' component={Page3}/>
            <Route path="/:id" component={GetParams} />
        </Switch>
    )
}
