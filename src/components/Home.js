import React from 'react'
import {LinkedinFilled,GithubFilled,InstagramFilled,FacebookFilled} from '@ant-design/icons'
import {Flex } from 'antd'
const Home = () => {
  return (
    <Flex vertical justify='center' align='center' style={{height:'100vh', color:'white'}}>
        <Flex className='flex' gap={70} horizontal justify='center' align='center'>
            <img style={{height:'150px', display:'block', }} src={require("../assets/Icon.png")} alt="" />
            <Flex className='flex' vertical justify='start' style={{textAlign:'left'}}>
                <h1 style={{fontSize:'50px',margin:'0px',}}>Omar Alfawareh</h1>
                <p style={{fontSize:'18px',color:'#BBBBBB',}}>
                  Software Engineering Student and Web Developer.
                </p>
                <Flex horizontal justify='start' gap={'middle'}>
                    <a className='socials' href='https://www.linkedin.com/in/omaralfawareh/'><LinkedinFilled style={{display:'block', fontSize:'20px', color:'white'}}/></a>
                    <a className='socials' href='https://github.com/omaralfawareh'><GithubFilled style={{display:'block', fontSize:'20px', color:'white'}}/></a>
                    <a className='socials' href='https://www.instagram.com/omar_alfawareh/'><InstagramFilled  style={{display:'block', fontSize:'20px',color:'white'}}/></a>
                    <a className='socials' href='/404'><FacebookFilled  style={{display:'block', fontSize:'20px',color:'white'}}/></a>
                </Flex>
            </Flex>
        </Flex>
        
        

    </Flex>
  )
}

export default Home
