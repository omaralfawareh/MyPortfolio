import React from 'react'
import { Flex,  } from 'antd'
import { motion } from 'framer-motion'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Project = () => {
  return (
    <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Flex className='projects' gap={'large'} vertical align='center'>
                <h1>Projects</h1>
                <Flex horizontal gap={"large"}>
                        <Card sx={{ maxWidth: 345, backgroundColor:'#101314', color:'white' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../assets/error.png')}
                            alt="green iguana"
                            />
                            <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography> */}
                            <Typography variant="body2" color="white">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                        </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, backgroundColor:'#101314', color:'white' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={require('../assets/error.png')}
                            alt="green iguana"
                            />
                            <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography> */}
                            <Typography variant="body2" color="white">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                        </CardActions>
                        </Card>
                </Flex>
            </Flex>
        </motion.div>
  )
}

export default Project