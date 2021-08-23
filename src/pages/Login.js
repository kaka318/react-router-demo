import { Input, Button, Checkbox, Form } from 'antd'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Login() {
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

const LogginForm = () => {
    const [login,setLogin] = useState(false);
    const [rule,setRule] = useState('Please input your username!');
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    const BtnClick = () => {
        let username = document.getElementById('username').value.toString();
        let password = document.getElementById('password').value.toString();
        if (username.match(/^\w{3,15}$/)) {
            if(password.match(/^\w{6,15}$/)){
                setLogin(true);
            }else{
                setRule('password must be 6 to 15 digits');
            }
        }else{
            setRule('username must be 3 to 15 digits');
        }
        if(login){
            window.location.reload();
        }
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
                rules={[{ required: true, message: `${rule}` }]}
            >
                <Input id='username' placeholder='请输入用户名' />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: `${rule}` }]}
            >
                <Input.Password id='password' placeholder='请输入密码' />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Router>
                    <Button type="primary" htmlType="submit" onClick={BtnClick}>
                        {
                            login === true ? <Link to='/'>submit</Link> : `submit`
                        }
                    </Button>
                </Router>  

            </Form.Item>
        </Form>
    )
}
export default Login;