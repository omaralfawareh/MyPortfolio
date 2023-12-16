import React, { useState } from 'react';
import './App.css';
import {Menu,Layout,} from 'antd';
import {HomeOutlined, UserOutlined, SettingOutlined, MailFilled,LeftOutlined} from '@ant-design/icons'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const { Sider, Content,} = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="App" style={{display:'flex',flexDirection:'row' ,justifyContent:'center', alignContent:'center'}}>
      <Layout >
        <Sider 
          className='sider'
          breakpoint='lg' 
          collapsible 
          onCollapse={toggleSider}
          collapsed={collapsed}
          collapsedWidth ='0' 
          width={390} 
          style={{
            height: '100%',
            backgroundColor:'#101314',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex:'1',
           }}
        >
          <div style={{ display:'flex', flexDirection:'row' , alignItems:'center',
                justifyContent:'center', height:'100vh'}}>
            <Menu theme="dark" mode="inline" style={{textAlign:'left',backgroundColor:'#101314', padding:'1rem',width:'50%',}} 
            
            onClick={({key}) => {
                if(key !== "exit")
                  navigate(key)
                if (window.innerWidth < 768 || key === "exit") 
                  toggleSider();

            }}
            items={[
            {label: <h3 className='label'>home</h3>, key:'/' , icon: <HomeOutlined style={{display:'block',fontSize:'20px',}} />,},
            {label: <h3 className='label'>about</h3>, key:'/about' ,icon: <UserOutlined style={{display:'block',fontSize:'20px'}} />},
            {label: <h3 className='label'>projects</h3>, key:'/projects' , icon: <SettingOutlined style={{display:'block',fontSize:'20px'}} />},
            {label: <h3 className='label'>contact</h3>, key:'/contact' ,icon: <MailFilled style={{display:'block',fontSize:'20px'}} />},
            {label: <h3  className='label'>exit</h3>, key:'exit',icon: <LeftOutlined  style={{display:'block',fontSize:'20px'}} />},
            ]}
            >
            </Menu>
          </div>
        </Sider>
        <Layout style={{backgroundColor:'#36454f',}}>
          <Content
           className='container' 

           style={{
              display:'flex', 
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center', 
              alignContent:'center' , 
              backgroundColor:'#36454f',
              height:'100%',
              width: collapsed ? '100%' : 'calc(100% - 390px)', // Adjust width based on Sider state
              marginLeft: collapsed ? 0 : 390, // Adjust margin based on Sider state
              transition: 'width 0.8s, margin-left 0.8s', // Specify transitions for width and margin-left
              border:'white solid 1px'
          }}>
              <LoadContent/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

function LoadContent(){
  return <div>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/projects' element={<div>Projects</div>}></Route>
      <Route path='/contact' element={<div>Contact</div>}></Route>
      <Route path='/*' element={<div><h1>ERROR 404</h1></div>}></Route>
    </Routes>
  </div>
}
export default App;
