import React from 'react'
import { Box, SimpleGrid, GridItem, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Element } from 'react-scroll'
// import { motion, useMotionValue, useTransform } from "framer-motion";

export default function FirstSec() {
    // const x = useMotionValue(200);
    // const y = useMotionValue(200);

    // const rotateX = useTransform(y, [0, 400], [15, -15]);
    // const rotateY = useTransform(x, [0, 400], [-15, 15]);

    // function handleMouse(event:any) {
    //     const rect = event.currentTarget.getBoundingClientRect();

    //     x.set(event.clientX - rect.left);
    //     y.set(event.clientY - rect.top);
    // }
  return (
    <>
    <Element name="Introdusction">
    <Box className='flex_di'>
        <Box className='grend_color'> 
            <Box className='upcro_launch_main'>
                <Box className='width_full'>
                    <SimpleGrid columns={6} columnGap={3} rowGap={2} >
                        <GridItem colSpan={[12, 12, 12, 6]}>
                            <Box  className="z_index_1">
                                <Box className='launch_text_box'>
                                    <Box className='launch_text_box_inn' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                                        <Heading as="h3">upMATIC</Heading>
                                        <Text className='mrag_b'>
                                            The first ERC-31337 token on Polygon.
                                        </Text>
                                        <Text>Paired against MATIC; upMATIC is the cornerstone vault of the Root Finance upToken ecosystem on Polygon</Text>
                                        <Box className='launch_btns'>
                                            <Button as="a" href='#' className='glow-on-hover' >BUY NOW</Button>
                                            <Button as="a" href='#' className='entr_a glow-on-hover'>ENTER APP</Button>
                                            <Button as="a" href='#' className='glow-on-hover'>CHART</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </GridItem>
                        
                    </SimpleGrid>
                </Box>
            </Box>
                    {/* <motion.div onMouseMove={handleMouse}
                    className="up_box"
                    style={{
                        display: "flex",
                        placeItems: "center",
                        placeContent: "center",
                        width: "100%",
                        perspective: 400
                    }}> */}
                        <Box className='up_box'>
                                {/* <motion.div 
                            style={{
                                width: "100%",
                                rotateX: rotateX,
                                rotateY: rotateY,
                            }}> */}
                                <Image src='img/upcro_first_img.png' className='upcro_first_img'  />
                            {/* </motion.div>         */}
                        </Box>
                    
                {/* </motion.div> */}
        </Box>
    </Box>
    </Element>
    </>
  )
}
