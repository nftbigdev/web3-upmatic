import React from 'react'
import { Box, Container, Image, Heading, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'


export default function AboutusSec() {
  return (
    <>
    <Element name="About">
        <Box className="aboutus_main" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <Container maxW="container.xl">
                <Box className='about_border_box'>
                    <Box className='sadow_box'>
                        <Heading as="h6">About Us</Heading>
                        <Heading as="h3">Bleeding edge innovation</Heading>
                    </Box>
                    <Box className='about_text_prnt'>
                        <Text>
                          As ardent pioneers in the alternative DeFi space, the Root Finance team has built countless experimental DeFi products since its inception in 2020. Two of these creations have now been developed into completely new speculative assets, <span>UpTokens</span> and <span> UpOnlyTokens. </span>UpTokens such as upMATIC are named after the token they are paired against in the main liquidity pool. (MATIC)
                        </Text>
                    </Box>
                    <Image src='img/upcro_ic.svg' className='upcro_ic pulse' />
                </Box>
            </Container>
        </Box>
    </Element>
    </>
  )
}
