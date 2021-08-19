import { Layout, Menu, Breadcrumb } from 'antd';
import './Main.css';
import { routes } from './routes';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import First from '../pages/First';
import Index from '../pages/Index';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom';
import { useViewport } from '../component/ViewportContext'
import { Home } from '../component/Home';
export default function Main() {
    const { Header, Content, Footer, Sider } = Layout;
    const { width } = useViewport();
    console.log(width);
    return (
        <>
            <Router>
                <Layout>
                    <Header className="header">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                            {
                                routes.map((route, index) => (
                                    <Menu.Item key={index} ><Link to={route.path}>{route.label} </Link></Menu.Item>
                                ))
                            }
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            {
                                width > 1000 ? <ChangeSider /> : <ChangeContent />
                            }
                        </Layout>
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Router>
        </>
    );
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
                style={{ width: '100%', marginTop: 5, minHeight: 280, background: 'white' }}>
                <First />
            </Content>
        </>
    )
}
function SwitchRoute() {
    return (
        <Switch>
            {/* <Route exact path="/" component={Index} /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/:id" component={GetParams} />
        </Switch>
    )
}
