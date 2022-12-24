
import React from 'react'
import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Element } from 'react-scroll'

export default function ArticleSec() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
    <Element name="Article">
        <Box className='articlesec_main' data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <Container maxW="container.xl">
                <Heading as="h6">Read about</Heading>
                <Heading as="h3">Articles</Heading>
                <Box className='slider_prnt_artcl'>
                    <Slider {...settings}>
                        <div>
                            <Box className='artcl_slider_cntnt'>
                                <Box className='artcl_slider_inn'>
                                    <Image src='img/slider_img_01.png' alt='' />
                                    <Box className='slider_text_box'>
                                        <Heading as="h4">UpMATIC to launch on Empire Dex</Heading>
                                        <Box className='flex_box'>
                                            <Text><Image src='img/clndr_ic.svg' className='clndr_ic' alt='' /> 16.01.2022</Text>
                                            <Button as="a" href='#'>Read More <Image src='img/arrow_ic.svg' alt='' /></Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div>
                            <Box className='artcl_slider_cntnt'>
                                <Box className='artcl_slider_inn'>
                                    <Image src='img/slider_img_02.png' alt='' />
                                    <Box className='slider_text_box'>
                                        <Heading as="h4">ROOT Bridge User guide</Heading>
                                        <Box className='flex_box'>
                                            <Text><Image src='img/clndr_ic.svg' className='clndr_ic' alt='' /> 16.01.2022</Text>
                                            <Button as="a" href='#'>Read More <Image src='img/arrow_ic.svg' alt='' /></Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div>
                            <Box className='artcl_slider_cntnt'>
                                <Box className='artcl_slider_inn'>
                                    <Image src='img/slider_img_03.png' alt='' />
                                    <Box className='slider_text_box'>
                                        <Heading as="h4">xToken Staking and the Drip Vault</Heading>
                                        <Box className='flex_box'>
                                            <Text><Image src='img/clndr_ic.svg' className='clndr_ic' alt='' /> 16.01.2022</Text>
                                            <Button as="a" href='#'>Read More <Image src='img/arrow_ic.svg' alt='' /></Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div>
                            <Box className='artcl_slider_cntnt'>
                                <Box className='artcl_slider_inn'>
                                    <Image src='img/slider_img_01.png' alt='' />
                                    <Box className='slider_text_box'>
                                        <Heading as="h4">ROOT Bridge User guide</Heading>
                                        <Box className='flex_box'>
                                            <Text><Image src='img/clndr_ic.svg' className='clndr_ic' alt='' /> 16.01.2022</Text>
                                            <Button as="a" href='#'>Read More <Image src='img/arrow_ic.svg' alt='' /></Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Slider>
                </Box>
            </Container>
        </Box>
    </Element>
    </>
  )
}
