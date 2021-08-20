import { Input, Button, Checkbox, Form } from 'antd'
import ViewportContext from '../component/ViewportContext'
import Main from '../layout/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function Index() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 750 }}>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div>
                    <img src="images/leftImg.jpg" width={420}></img>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <LogginForm />
                </div>
            </div>
        </div>
    )
}
const BtnClick = () => {
    window.location.reload();
}
const LogginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder='请输入用户名' />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder='请输入密码' />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Router>
                    <Button type="primary" htmlType="submit" onClick={BtnClick}>
                        <Link to='/'>submit</Link>
                    </Button>
                </Router>

            </Form.Item>
        </Form>
    )
}