import { Input, Button, Checkbox, Form } from 'antd'
import ViewportContext from '../component/ViewportContext'
import Main from '../layout/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function Index() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div>
                    <img src="images/leftImg.jpg" width={420}></img>
                </div>
                <div>
                    <LogginForm />
                </div>
            </div>
        </div>
    )
}
const ComMain = () => {
    return (
        <ViewportContext>
            <Main />
        </ViewportContext>
    )
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
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    <Router>
                        <Link>submi</Link>
                        <Route path='/nav' component={ComMain}></Route>
                    </Router>
                </Button>
            </Form.Item>
        </Form>
    )
}