import React from 'react'
import {Flex, Button,Timeline } from 'antd'
import InfiniteCarousel from 'react-leaf-carousel';
import resume from '../assets/Resume.pdf'
// import { motion } from 'framer-motion'

function About() {
  return (
        <Flex wrap className='about' vertical align='left' style={{fontFamily:'MontSerrat' , color:'white' ,textAlign:'left', padding:'1rem', height:'100%'}}>
            <h1 style={{fontSize:'30px'}}>
                About me
            </h1>
            <h2 style={{fontSize:'22px'}}>Omar Alfawareh</h2>
            <span style={{fontSize:'15px', color:'#BBBBBB'} }>Software Engineer</span>
            <hr width={'100%'}/>
            <p style={{color:'#BBBBBB', lineHeight:'1.5rem'}}>
                Hi, my name is Omar Alfawareh, and I am a software engineering student with a passion for web development and 2D game design. With a rich background in creating dynamic and user-friendly websites, I have honed my skills in both front-end and back-end technologies.
            </p>
            <p style={{color:'#BBBBBB', lineHeight:'1.5rem'}}>
                My journey in software engineering is driven by an insatiable curiosity to explore new technologies and push the boundaries of digital innovation.
            </p>
            <hr width={'100%'}/>
            <ul className='list' style={{ textAlign:'left',listStyleType: 'none',  padding:'0'}}>
                    <li style={{marginBottom:'1rem'}}>
                        <Flex  gap={'large'} align='center' justify='start' style={{fontFamily:'Montserrat'}}>
                            <span style={{width:'30%', fontWeight:'bold',}}>
                                Birthday :
                            </span>
                            <span style={{color:'#BBBBBB'}}>
                                17/04/2002
                            </span>
                        </Flex>
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <Flex  gap={'large'} align='center' justify='start' style={{fontFamily:'Montserrat'}}>
                            <span style={{width:'30%', fontWeight:'bold'}}>
                                Age :
                            </span>
                            <span style={{color:'#BBBBBB'}}>
                                21
                            </span>
                        </Flex>
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <Flex  gap={'large'} align='center' justify='start' style={{fontFamily:'Montserrat'}}>
                            <span style={{width:'30%', fontWeight:'bold'}}>
                                Address :
                            </span>
                            <span style={{color:'#BBBBBB'}}>
                                Amman, Jordan
                            </span>
                        </Flex>
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <Flex  gap={'large'} align='center' justify='start' style={{fontFamily:'Montserrat'}}>
                            <span style={{width:'30%', fontWeight:'bold'}}>
                                Email :
                            </span>
                            <span>
                                <a href="mailto:alfawareho@gmail.com" style={{color:'#BBBBBB'}}>alfawareho@gmail.com</a>
                            </span>
                        </Flex>
                    </li>
                    <li style={{marginBottom:'1rem'}}>
                        <Flex  gap={'large'} align='center' justify='start' style={{fontFamily:'Montserrat'}}>
                            <span style={{width:'30%', fontWeight:'bold'}}>
                                Phone :
                            </span>
                            <span>
                                <a href="tel:+962791141046" style={{color:'#BBBBBB'}} >+962791141046</a>
                            </span>
                        </Flex>
                    </li>
            </ul>
            <Button href={resume} download={'Resume'} className='button'>Download CV</Button>
            <h2 style={{fontSize:'22px'}}>Skills</h2>
            <hr width={'100%'} color='#101314'/>
            <InfiniteCarousel
                breakpoints={[
                {
                    breakpoint: 400,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    },
                },
                ]}
                autoCycle={true}
                cycleInterval={2000}
                animationDuration={1000}
                arrows={false}
                dots={false}
                showSides={false}
                sidesOpacity={1}
                sideSize={1}
                slidesToScroll={1}
                slidesToShow={5}
                scrollOnDevice={true}
            >
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/react.png')}
                    onMouseOver={()=>{
                        return <h1>REACT</h1>
                    }}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/java.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/cpp.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/css.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/html.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/python.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/csharp.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/unity.png')}
                />
                </Flex>
                <Flex justify='center' align='center' >
                <img
                    style={{width:'100px',height:'100px'}}
                    alt=""
                    src={require('../assets/bootstrap.png')}
                />
                </Flex>
            </InfiniteCarousel> 
            <hr width={'100%'} color='#101314'/>
                <Flex  justify='space-around'>
                </Flex>
            <Flex  justify='space-around' >
                <Flex vertical>
                    <h3 style={{fontSize:'20px'}}>Education</h3>
                    <Timeline style={{fontFamily:'Montserrat', marginTop:'2rem',color:'#BBBBBB'}}
                    items={
                        [
                    {
                        children: 'Create a services site 2015-09-01',
                        color: 'black'
                    },
                    {
                        children: 'Solve initial network problems 2015-09-01',
                        color: 'black'
                    },
                    {
                        children: 'Technical testing 2015-09-01',
                        color: 'black'
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                        color: 'black'
                    },
                    ]}
                    />
                </Flex>
                <Flex vertical>
                    <h3 style={{fontSize:'20px'}}>Experience</h3>
                    <Timeline style={{color:'#BBBBBB', fontFamily:'Montserrat',marginTop:'2rem'}}
                        items={[
                        {
                            children: 'Create a services site 2015-09-01',
                            color: 'black'
                        },
                        {
                            children: 'Solve initial network problems 2015-09-01',
                            color: 'black'
                        },
                        {
                            children: 'Technical testing 2015-09-01',
                            color: 'black'
                        },
                        {
                            children: 'Network problems being solved 2015-09-01',
                            color: 'black'
                        },
                        ]}
                    />
                </Flex>
            </Flex>
                
        </Flex>    
     
  )
}

export default About