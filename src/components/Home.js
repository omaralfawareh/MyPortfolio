import React from 'react'
import {Flex } from 'antd'
const Home = () => {
  return (
    <Flex vertical justify='center' align='center' style={{height:'100vh'}}>
        <Flex gap={'large'} horizontal justify='center' align='center'>
            <img style={{height:'100px'}} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
            <Flex vertical gap={'none'}>
                <h1 style={{margin:'0'}}> Hello </h1>
                <h2 style={{}}> My name is Omar Alfawareh </h2>
            </Flex>

        </Flex>
        <p style={{width:'50%'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facere rem aspernatur, nostrum fugiat at! Possimus fugit consequatur officiis ex facere sit saepe. Sed, quisquam sequi quod obcaecati sunt ea.
        </p>
        

    </Flex>
  )
}

export default Home
