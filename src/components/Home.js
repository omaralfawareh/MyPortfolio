import React from 'react'
import {LinkedinFilled,GithubFilled,InstagramFilled,FacebookFilled} from '@ant-design/icons'
import {Flex } from 'antd'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.8 }}
    > 
      <Flex vertical justify='center' align='center' style={{height:'100vh', color:'white'}}>
          <Flex className='flex' gap={70} horizontal justify='center' align='center'>
              <img style={{height:'200px', display:'block', }} src={require("../assets/Icon.png")} alt="" />
              <Flex className='flex' vertical justify='start' style={{textAlign:'left'}}>
                  <h1 style={{fontSize:'50px',margin:'0px',fontFamily:'Montserrat'}}>Omar Alfawareh</h1>
                  <TypeAnimation
                      sequence={[
                        'Software Engineer',
                        1000, 
                        'Web Developer',
                        1000,
                        'Mobile Developer',
                        1000
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '24px', display: 'inline-block', fontFamily:'Montserrat' }}
                      repeat={Infinity}
                    />
                    <p style={{fontSize:'16px',color:'#BBBBBB', fontFamily:'Montserrat', width:'90%',}}>
                    Hardworking software engineering student and web developer.
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
    </motion.div>

  )
}

export default Home
