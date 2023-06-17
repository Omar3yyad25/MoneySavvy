import { Badge, Avatar, Space, Layout } from 'antd';
import { NotificationOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import '../assets/styles/CustomAvatar.css'; // Import the CSS file for styling


const { Header } = Layout;

const AppHeader = () => {
  const theme = {
    token: {
      colorPrimary: '#ffffff', // Replace with your desired color
    },
  };

  return (
    <Header style={{ padding: 10, background: theme.token.colorPrimary }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Space wrap size={16} align="center">
          <Badge count={5} size="small">
            <BellOutlined  style={{ fontSize: 20, color: '#000000' }} />
          </Badge>
          <Avatar size="large" icon={<UserOutlined />} />
          <div class="container">
            <span className="custom-text">Omar Ayyad</span>
          </div>
        </Space>
      </div>
    </Header>
  );
};

export default AppHeader;
