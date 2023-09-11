import React from 'react';
import { Layout, Typography, Space, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const EventFooter = () => {
    return (
        <Footer style={{ backgroundColor: '#001529', padding: '26px 0' }}>
            <Row justify="center" gutter={32}>
                <Col>
                    <Typography.Link href="#" style={{ color: '#fff', fontSize: '24px' }}>
                        <FacebookOutlined />
                    </Typography.Link>
                </Col>
                <Col>
                    <Typography.Link href="#" style={{ color: '#fff', fontSize: '24px' }}>
                        <TwitterOutlined />
                    </Typography.Link>
                </Col>
                <Col>
                    <Typography.Link href="#" style={{ color: '#fff', fontSize: '24px' }}>
                        <LinkedinOutlined />
                    </Typography.Link>
                </Col>
            </Row>

            <Space 
    direction="horizontal" 
    size="middle" 
    style={{ 
        marginTop: '20px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }}
>
    <Typography.Text style={{ color: '#aaa' }}>
        © 2023 My Events App. All Rights Reserved.
    </Typography.Text>
    <Typography.Link href="#" style={{ color: '#aaa' }}>
        Privacy Policy
    </Typography.Link>
    <Typography.Link href="#" style={{ color: '#aaa' }}>
        Terms of Service
    </Typography.Link>
</Space>
        </Footer>
    );
};

export default EventFooter;
