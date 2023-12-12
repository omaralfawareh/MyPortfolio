import './App.css';
import {Menu,Layout} from 'antd';
import {HomeOutlined} from '@ant-design/icons'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'
// import Sider from 'antd/es/layout/Sider';
const { Sider, Content } = Layout;
function App() {
  const navigate = useNavigate();
  return (
    <div className="App" style={{display:'flex',flexDirection:'row' ,justifyContent:'center', alignContent:'center'}}>
      <Layout hasSider>
        <Sider collapsible collapsedWidth={0} className='sider' width={250} style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:'black'
        }}
        >
          <div style={{ display:'flex', flexDirection:'column' ,
                alignContent:'center', justifyContent:'center', border:'solid 1px', height:'100vh'}}>
            <Menu theme="dark" mode="inline" style={{textAlign:'left',backgroundColor:'black', padding:'1rem', }} 
            onClick={({key}) => {
                navigate(key)
            }}
            items={[
            {label: <h2 className='label'>home</h2>, key:'/' , icon: <HomeOutlined style={{fontSize:'20px'}} />},
            {label: <h2 className='label'>about</h2>, icon: <HomeOutlined style={{fontSize:'20px'}} />},
            {label: <h2 className='label'>projects</h2>, icon: <HomeOutlined style={{fontSize:'20px'}} />},
            {label: <h2 className='label'>contact</h2>, icon: <HomeOutlined style={{fontSize:'20px'}} />},
            ]}
            >
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Content style={{display:'flex', justifyContent:'center', alignContent:'center' , height:'100vh',}}>
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
    </Routes>
  </div>
}
export default App;
