import { Button, Form, Input, Row, Col } from 'antd';
import { useAuth } from "../../test/useAuth";


const LoginMovies = () => {
    const { login, loading, error } = useAuth();
    const onFinish = (values) => {
        console.log(loading);
        console.log(error);
        login(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={6} offset={9}>
                {error !== null && <h3 style={{textAlign:'center', margin: '20px 0px'}}>{error.mess}</h3>}
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
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
};
export default LoginMovies;