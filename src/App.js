import './App.css';
import {Menu,Layout,} from 'antd';
import {HomeOutlined, UserOutlined, SettingOutlined, MailFilled,} from '@ant-design/icons'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'

const { Sider, Content } = Layout;
function App() {
  const navigate = useNavigate();
  return (
    <div className="App" style={{display:'flex',flexDirection:'row' ,justifyContent:'center', alignContent:'center'}}>
      <Layout>
        <Sider breakpoint='lg' collapsible collapsedWidth ='0' className='sider' width={390} style={{
          height: '100vh',
          backgroundColor:'#101314'
        }}
        >
          <div style={{ display:'flex', flexDirection:'row' , alignItems:'center',
                justifyContent:'center', height:'100vh'}}>
            <Menu theme="dark" mode="inline" style={{textAlign:'left',backgroundColor:'#101314', padding:'1rem',width:'50%',}} 
            onClick={({key}) => {
                navigate(key)
            }}
            items={[
            {label: <h3 className='label'>home</h3>, key:'/' , icon: <HomeOutlined style={{display:'block',fontSize:'20px',}} />,},
            {label: <h3 className='label'>about</h3>, key:'/about' ,icon: <UserOutlined style={{display:'block',fontSize:'20px'}} />},
            {label: <h3 className='label'>projects</h3>, key:'/projects' , icon: <SettingOutlined style={{display:'block',fontSize:'20px'}} />},
            {label: <h3 className='label'>contact</h3>, key:'/contact' ,icon: <MailFilled style={{display:'block',fontSize:'20px'}} />},
            ]}
            >
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Content style={{display:'flex', justifyContent:'center', alignContent:'center' , height:'100vh',backgroundColor:'#36454f'}}>
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
      <Route path='/about' element={<div>About</div>}></Route>
      <Route path='/projects' element={<div>Projects</div>}></Route>
      <Route path='/contact' element={<div>Contact</div>}></Route>
      <Route path='/*' element={<div><h1>ERROR 404</h1></div>}></Route>
    </Routes>
  </div>
}
export default App;
