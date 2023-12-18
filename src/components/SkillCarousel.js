import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import {Flex,} from 'antd'

const SkillCarousel = () => {
  return (
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
                animationDuration={1800}
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
  )
}

export default SkillCarousel