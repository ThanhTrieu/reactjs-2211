import { Button, Form, Input, Row, Col } from 'antd';
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const LoginMovies = () => {
    const { login, loading, messError, user } = useAuth();
    

    const onFinish = (values) => {
        login(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(user) {
        return <Navigate to="/" />
    }

    return (
        <Row>
            <Col span={6} offset={9}>
                { messError !== null && <h4 style={{ textAlign: 'center', color: 'red', margin: '20px 0px' }}>{messError.mess}</h4> }
                <Form
                    name="basic"
                    style={{
                      marginTop: 20,
                      border: '1px solid #ccc',
                      padding: 20
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
};
export default LoginMovies;