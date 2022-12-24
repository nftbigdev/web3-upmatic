import React from 'react'
import { Element } from 'react-scroll'
import { Box, Container, Heading, SimpleGrid, GridItem, Button, Text, Image } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TeamSec() {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [15, -15]);
    const rotateY = useTransform(x, [0, 400], [-15, 15]);

    function handleMouse(event:any) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
  return (
    <>
    <Element name="Team">
        <Box className='team_main' data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <Container maxW="container.xl">
                <Box className='about_border_box'>
                    <Box className='sadow_box'>
                        <Heading as="h6">Our Team</Heading>
                        <Heading as="h3">Anon with Trusted Reputation</Heading>
                    </Box>
                    <Box className='team_grid_prnt'>
                        <SimpleGrid columns={12} columnGap={4} rowGap={2} >
                            <GridItem colSpan={[12, 12, 12, 6]}>
                                <Box className='team_p_prnt'>
                                    <Text>
                                        The Root Finance team consists of our stalwart leader and resident mad genius, Professor Kronos as well as multiple other anonymous devs, programmers, moderators and community leads. Our identities are known to many in the space and we have been part of the industry since Bitcoin was the only game in town. We believe keeping our privacy is important and that our technology and reputation should stand on their own. We're very proud to note that multiple other teams have now adopted our technology and even found new uses or ways to implement it. Some of these successful mechanisms have been incorporated into our UpToken Ecosystem and we're thrilled to have learned from those who adopted and improved what we created.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 12, 6]}>
                                <Box className='team_p_prnt team_img_prnt'>
                                <motion.div onMouseMove={handleMouse}
                                style={{
                                    display: "flex",
                                    placeItems: "center",
                                    placeContent: "center",
                                    width: "100%",
                                    perspective: 400
                                }}>
                                <motion.div 
                                style={{
                                    width: "100%",
                                    rotateX: rotateX,
                                    rotateY: rotateY
                                }}>
                                <Image src='img/team_img.png' alt='' />

                                </motion.div>
                            </motion.div>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                    <Box className='enter_app_btn_prnt'>
                        <Button as="a" href="#" className='enter_app_btn glow-on-hover'>ENTER APP</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    </Element>
    </>
  )
}
