import React from 'react'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function StakeTabOne() {
  return (
    <>
        <Box className='stakone_main'>
            <Heading as="h4" >Staking</Heading>
            {/* <Box className='stake_unstake_cro_btn_prnt'>
                <Button>Staking</Button>
                <Button>Vault Staking</Button>
            </Box> */}
            <Tabs variant='unstyled'>
            <TabList className='tab_btn_prnt'>
                <Box className='tab_border'>
                    <Tab bg={'#8049E4'} _selected={{ color: '#FFFFFF', bg: 'transparent' }} className="staktab01">Stake upMATIC</Tab>
                    <Tab bg={'#8049E4'} _selected={{ color: '#FFFFFF', bg: 'transparent' }} className="staktab02">Unstake xUpMATIC</Tab>
                </Box>
            </TabList>
            <TabPanels>
                <TabPanel className='stake_tab_panel01_prnt'>
                    <Box className='stake_tab_panel01'>
                        <Heading as="h6">1 upMATIC = 0.9851 xUpMATIC</Heading>
                        <Box className='stake_inpt_box'>
                            <Box className='text_row'>
                                <Text>Amount to stake</Text>
                                <Text>Balance: 0.00</Text>
                            </Box>
                            <Box className='inpt_btn_row'>
                                <input type="number" value="0.0"></input>
                                <Box className='btn_text_prnt'>
                                    <Button>MAX</Button>
                                    <Text>upMATIC</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Button className='stake_full_btn'>Stake</Button>
                    </Box>
                    <Box className='stake_emp_dex_btns'>
                        <Button disabled >Stake</Button>
                        <Button>EmpireDEX</Button>
                        <Button>DEXScreener</Button>
                    </Box>
                </TabPanel>
                <TabPanel className='stake_tab_panel01_prnt stake_tab_panel02_prnt'>
                    <Box className='stake_tab_panel01'>
                        <Heading as="h6">1 upMATIC = 1.0151 xUpMATIC</Heading>
                        <Box className='stake_inpt_box'>
                            <Box className='text_row'>
                                <Text>Amount to unstake</Text>
                                <Text>Balance: 0.00</Text>
                            </Box>
                            <Box className='inpt_btn_row'>
                                <input type="number" value="0.0"></input>
                                <Box className='btn_text_prnt'>
                                    <Button>MAX</Button>
                                    <Text>xupMATIC</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Button className='stake_full_btn'>Unstake</Button>
                    </Box>
                    <Box className='stake_emp_dex_btns stake_emp_dex_btns02'>
                        <Button>EmpireDEX</Button>
                        <Button>DEXScreener</Button>
                    </Box>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Box>
        <Box className='contracts_box'>
            <Heading as="h4">Contracts</Heading>
            <Box className='upcro_copyflex'>
                <Heading as="h6">upMATIC<Text>0xb0620........f790f<Button><Image src="img/copy_ic.svg" alt='' /></Button></Text></Heading>
                <Heading as="h6" className='right_h6'>xUpMATIC<Text>0x78Bf85......ed90e<Button><Image src="img/copy_ic.svg" alt='' /></Button></Text></Heading>
            </Box>
            <Box className='upcro_copyflex'></Box>
        </Box>
    </>
  )
}
