import React from 'react';
import { Card, Typography, Space, Divider } from 'antd';
import { AppstoreAddOutlined, SmileOutlined, HeartOutlined } from '@ant-design/icons';

// HomePage Component
// This component serves as the main landing page for the app.
const HomePage = () => {
  return (
    // Main container with some padding and a background color
    <div style={{ padding: '24px', backgroundColor: '#001529' }}>
      
      {/* Main heading/title of the app using the Typography component */}
      <Typography.Title 
        style={{ 
          fontWeight: 'bolder', 
          color: '#fff', 
          fontSize: '2.5em', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'  // Slight shadow for depth
        }}
      >
        <AppstoreAddOutlined style={{ marginRight: '10px', color: '#46a0fc' }} /> 
        Welcome to My Events App
      </Typography.Title>
      
      // Subtitle/Description under the main title
      <Typography.Text 
        type="secondary" 
        style={{ 
          fontSize: '20px', 
          color: '#fff', 
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',  // Slight shadow for depth
          display: 'block',  // Ensures margin applies
          marginTop: '20px'  // Adds some space from the title
        }}
      >
        Your tech event platform
      </Typography.Text>

      {/* A card containing more details about the platform */}
      <Card 
        style={{ 
          marginTop: '20px', 
          borderRadius: '8px', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Slight shadow for depth
          backgroundColor: '#6082B6', // Dark Gradient for Card
          color: '#EAEAEA' // Text color for better visibility against dark background
        }}
      >
        {/* Grouped content within the card using the Space component */}
        <Space direction="vertical" size="middle">
          {/* Heading inside the card */}
          <Typography.Title level={3} style={{ fontWeight: 'bold' , color:'white'}}>
            Get Started with <SmileOutlined style={{ color: 'white' }} />
          </Typography.Title>

          {/* Main content/text inside the card */}
          <Typography.Text style={{ fontSize: '16px' , color:'white'}}>
            Discover events, learn from experts, and network with peers. This platform brings the tech community closer, enabling you to stay updated with the latest trends and advancements.
          </Typography.Text>
          
          {/* Divider to separate content sections within the card */}
          <Divider style={{ background: '#EAEAEA' }}/>

          {/* Closing note/text inside the card */}
          <Typography.Text style={{ fontSize: '16px' , color:'white'}}>
            <HeartOutlined style={{ color: '#f54291' }} /> We hope you enjoy your time here.
          </Typography.Text>
        </Space>
      </Card>
    </div>
  );
};

export default HomePage;
