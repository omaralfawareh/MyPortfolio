import React from 'react'
import { Flex, } from 'antd'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Flex>
                Project
            </Flex>
        </motion.div>
  )
}

export default Project