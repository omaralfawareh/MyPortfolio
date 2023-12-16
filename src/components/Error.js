import React from 'react'
import {Flex} from 'antd'
const Error = () => {
  return (
    <Flex vertical align='center' justify='center' style={{height:'100vh',color:'white',fontSize:'30px'}}>
        <h2>Page Not Found</h2>
        <img style={{display:'block',height:'200px', width:'400px'}} src={require('../assets/error.png')} alt="Error 404" />
    </Flex>
  )
}

export default Error