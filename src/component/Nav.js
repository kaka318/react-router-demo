import { Layout, Menu, Breadcrumb } from 'antd';
import { routes } from '../layout/routes';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function Nav() {
    const { Header } = Layout;
    const handleOnLoggin = (e) => {
        // setLoggin(true);
    }
    const handleLoggined = (e) => {
        // setLoggin(false);
    }
    return (
        <>
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
            </Layout>

        </>
    )
}
export default Nav;