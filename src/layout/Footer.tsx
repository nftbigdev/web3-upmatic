import React from 'react'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <>
      <Box as='footer' className='footer'>
        <Heading as="h4">Social Media</Heading>
        <Box className='social_lin_prnt'>
          <Box className='social_lin_prnt_in'>
            <Box className='box_shodo' data-aos="fade-down" data-aos-delay="400"> </Box>
            <Button as="a" href='#' data-aos="fade-down" data-aos-delay="400"><Image src='img/social_ic01.svg' alt='' /></Button>
          </Box>
          <Box className='social_lin_prnt_in'>
            <Box className='box_shodo' data-aos="fade-down" data-aos-delay="500"> </Box>
            <Button as="a" href='#' data-aos="fade-down" data-aos-delay="500"><Image src='img/social_ic02.svg' alt='' /></Button>
          </Box>
          <Box className='social_lin_prnt_in'>
            <Box className='box_shodo' data-aos="fade-down" data-aos-delay="600"> </Box>
            <Button as="a" href='#' data-aos="fade-down" data-aos-delay="600"><Image src='img/social_ic03.svg' alt='' /></Button>
          </Box>
          <Box className='social_lin_prnt_in'>
            <Box className='box_shodo' data-aos="fade-down" data-aos-delay="700"> </Box>
            <Button as="a" href='#' data-aos="fade-down" data-aos-delay="700"><Image src='img/social_ic04.svg' alt='' /></Button>
          </Box>
        </Box>
        <Text>2022, All Rights Reserved.</Text>
      </Box>
    </>
  )
}
