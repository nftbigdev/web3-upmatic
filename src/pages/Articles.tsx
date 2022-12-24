
import React, {useEffect} from 'react'
import { Box, SimpleGrid, GridItem, Image, Heading, Container } from '@chakra-ui/react';
import HowToBuySec from '../components/Home/HowToBuySec';


import Layout from './Layout';
import AOS from 'aos';

export default function Articles() {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout className='app-page'>
      <>
        <Box className="article_main_page">
          <Container maxW="container.xl">
            <SimpleGrid columns={20} columnGap={4} rowGap={3} >
              <GridItem colSpan={[20, 20, 12, 12]}>
                <Box className='article_left_box'>
                  <Box className='article_text_img'><Image src='img/midium_art_ic.svg' alt='' /><Heading as="h3">Articles</Heading> </Box>
                  <Image src='img/article_img_01.png' className="article_img_01" alt='' />
                  <Image src='img/article_img_02.png' className="article_img_01" alt='' />
                  <Image src='img/article_img_03.png' className="article_img_01" alt='' />
                  <Image src='img/article_img_04.png' className="article_img_01" alt='' />
                  <Image src='img/article_img_05.png' className="article_img_01" alt='' />
                  <Image src='img/pagination_img.png' className="pagination_img" alt='' />
                </Box>
              </GridItem>
              <GridItem colSpan={[16, 16, 8, 8]}>
                <Box className='tweets_box'>
                  <Box className='article_text_prnt'>
                    <Box className='article_text_img'><Image src='img/tweet_art_ic.svg' alt='' /><Heading as="h3">Tweets</Heading> </Box>
                  </Box>
                  <Image src='img/tweet_ic.png' className="tweet_ic" alt='' />
                </Box>
              </GridItem>
            </SimpleGrid>
          </Container>
          <HowToBuySec />

        </Box>
      </>
    </Layout>
    
  )
}