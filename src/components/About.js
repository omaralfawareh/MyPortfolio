import React from 'react'
import { Flex, Timeline } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import Button from '@mui/material/Button';
import resume from '../assets/Resume.pdf'
import { motion } from 'framer-motion'
import SkillCarousel from './SkillCarousel'
function About() {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Flex className='about' vertical align='left' style={{ border: 'red', fontFamily: 'MontSerrat', color: 'white', textAlign: 'left', padding: '1rem', height: '100%', }}>
                <h1 style={{ fontSize: '30px' }}>
                    About me
                </h1>
                <h2 style={{ fontSize: '22px' }}>Omar Alfawareh</h2>
                <p>Software Engineer</p>
                <hr width={'100%'} style={{ backgroundColor: '#101314', height: '2px', border: 'none' }} />
                <p style={{ color: '', lineHeight: '1.5rem' }}>
                    Hi, my name is Omar Alfawareh, and I am a software engineering student with a passion for web development and 2D game design. With a rich background in creating dynamic and user-friendly websites, I have honed my skills in both front-end and back-end technologies.
                </p>
                <p style={{ color: '', lineHeight: '1.5rem' }}>
                    My journey in software engineering is driven by an insatiable curiosity to explore new technologies and push the boundaries of digital innovation.
                </p>
                <hr width={'100%'} style={{ backgroundColor: '#101314', height: '2px', border: 'none' }} />
                <ul className='list' style={{ textAlign: 'left', listStyleType: 'none', padding: '0' , }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <Flex gap={'large'} align='center' justify='start' style={{ fontFamily: 'Montserrat', fontSize:'16px' }}>
                            <span style={{ width: '30%', fontWeight: 'bold', }}>
                                Birthday :
                            </span>
                            <span style={{  }}>
                                17/04/2002
                            </span>
                        </Flex>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Flex gap={'large'} align='center' justify='start' style={{ fontFamily: 'Montserrat',fontSize:'16px' }}>
                            <span style={{ width: '30%', fontWeight: 'bold' }}>
                                Age :
                            </span>
                            <span style={{ color: '' }}>
                                21
                            </span>
                        </Flex>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Flex gap={'large'} align='center' justify='start' style={{ fontFamily: 'Montserrat',fontSize:'16px' }}>
                            <span style={{ width: '30%', fontWeight: 'bold' }}>
                                Address :
                            </span>
                            <span style={{ color: '' }}>
                                Amman, Jordan
                            </span>
                        </Flex>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Flex gap={'large'} align='center' justify='start' style={{ fontFamily: 'Montserrat',fontSize:'16px' }}>
                            <span style={{ width: '30%', fontWeight: 'bold' }}>
                                Email :
                            </span>
                            <span>
                                <a href="mailto:alfawareho@gmail.com" style={{ color: 'white' }}>alfawareho@gmail.com</a>
                            </span>
                        </Flex>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Flex gap={'large'} align='center' justify='start' style={{ fontFamily: 'Montserrat',fontSize:'16px' }}>
                            <span style={{ width: '30%', fontWeight: 'bold' }}>
                                Phone :
                            </span>
                            <span>
                                <a href="tel:+962791141046" style={{ color: 'white' }} >+962791141046</a>
                            </span>
                        </Flex>
                    </li>
                </ul>
                <Button startIcon={<DownloadOutlined />} variant="contained" href={resume} download={'Resume'} className='button' style={{ color: 'white', backgroundColor: '#101314', fontFamily: 'Montserrat' }}><span style={{fontWeight:'bold'}}>Download CV</span></Button>
                <h2 style={{ fontSize: '22px' }}>Skills</h2>
                <hr width={'100%'} style={{ backgroundColor: '#101314', height: '2px', border: 'none' }} />
                <SkillCarousel />
                <hr width={'100%'} style={{ backgroundColor: '#101314', height: '2px', border: 'none' }} />
                <Flex justify='space-around'>
                </Flex>
                <Flex justify='space-between' style={{ width: '80%' }}>
                    <Flex vertical>
                        <h3 style={{ fontSize: '20px' }}>Education</h3>
                        <Timeline style={{ fontFamily: 'Montserrat', marginTop: '2rem', color: 'white' }}
                            items={
                                [
                                    {
                                        children: <Flex vertical style={{ fontFamily: 'Montserrat' }}><p>Princess Sumaya University for Technology</p> <span style={{ marginLeft: '1rem' }}>Software Engineering</span></Flex>,
                                        color: 'black'
                                    },
                                    {
                                        children: <Flex vertical style={{ fontFamily: 'Montserrat' }}><p>Al-Ittihad International Schools</p> <span style={{ marginLeft: '1rem' }}>Student</span></Flex>,
                                        color: 'black'
                                    },
                                ]}
                        />
                    </Flex>
                    <Flex vertical>
                        <h3 style={{ fontSize: '20px' }}>Experience</h3>
                        <Timeline style={{ color: 'white', fontFamily: 'Montserrat', marginTop: '2rem' }}
                            items={[
                                {
                                    children: <Flex vertical style={{ fontFamily: 'Montserrat' }}><p>Eduhax</p> <span style={{ marginLeft: '1rem' }}>Web Developer Intern</span></Flex>,
                                    color: 'black'
                                },
                                {
                                    children: <Flex vertical style={{ fontFamily: 'Montserrat' }}><p>Orange Jordan</p> <span style={{ marginLeft: '1rem' }}>Full-Stack Developer Intern</span></Flex>,
                                    color: 'black'
                                },

                            ]}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </motion.div>
    )
}

export default About