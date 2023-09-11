import React from 'react';
import { Layout, Typography, Space, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;

/**
 * EventFooter Component
 * 
 * This component represents the footer of the My Events App. 
 * It displays social media icons and links, as well as general information about the app.
 */
const EventFooter = () => {
    return (
        // Styling the footer with a darker background for a more professional look
        <Footer style={{ backgroundColor: '#001529', padding: '26px 0' }}>
            
            {/* Row for social media icons. It centers the icons horizontally on the page. */}
            <Row justify="center" gutter={32}>
                
                {/* Facebook Icon with a link. Adjust the href value to your Facebook page. */}
                <Col>
                    <Typography.Link href="#" style={{ color: '#fff', fontSize: '24px' }}>
                        <FacebookOutlined />
                    </Typography.Link>
                </Col>

                {/* Twitter Icon with a link. Adjust the href value to your Twitter profile. */}
                <Col>
                    <Typography.Link href="#" style={{ color: '#fff', fontSize: '24px' }}>
                        <TwitterOutlined />
                    </Typography.Link>
                </Col>

                {/* LinkedIn Icon with a link. Adjust the href value to your LinkedIn profile. */}
                <Col>
                    <Typography.Link href="#" style={{ color: '#fff', fontSize: '24px' }}>
                        <LinkedinOutlined />
                    </Typography.Link>
                </Col>
            </Row>

            {/* A space component to layout app copyright and important links */}
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
                {/* Copyright statement */}
                <Typography.Text style={{ color: '#aaa' }}>
                    © 2023 My Events App. All Rights Reserved.
                </Typography.Text>
                
                {/* Privacy Policy link. Adjust href to link to your policy page */}
                <Typography.Link href="#" style={{ color: '#aaa' }}>
                    Privacy Policy
                </Typography.Link>

                {/* Terms of Service link. Adjust href to link to your terms page */}
                <Typography.Link href="#" style={{ color: '#aaa' }}>
                    Terms of Service
                </Typography.Link>
            </Space>
        </Footer>
    );
};

export default EventFooter;
