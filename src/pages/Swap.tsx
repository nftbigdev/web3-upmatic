import React, {useEffect} from 'react'
import { Box, Container, Heading, Text, Button, Image, Modal, Checkbox, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack, useDisclosure, FormControl, FormLabel,Switch  } from '@chakra-ui/react'
import LayoutTwo from './LayoutTwo'
// import ReactSelect from 'react-select';

const currency = [
    {
        label: 'upMATIC',
        value: 0,
        image: '/img/upcro_coin_ic.svg',
    },
    {
        label: 'upMATIC',
        value: 1,
        image: '/img/upcro_coin_ic.svg',
    }
];
const currencytwo = [
{
    label: 'BTC',
    value: 0,
    image: '/img/btc_coin_ic.svg',
},
{
    label: 'BTC',
    value: 1,
    image: '/img/btc_coin_ic.svg',
}
];
  

export default function Swap() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isSettingModalOpen , onOpen: onSettingModalOpen, onClose: onSettingModalClose } = useDisclosure()
    const { isOpen: isFirstModalOpen , onOpen: onFristModalOpen, onClose: onFirstModalClose } = useDisclosure()
    const { isOpen: isSecondModalOpen , onOpen: onSecondModalOpen, onClose: onSecondModalClose } = useDisclosure()
    const { isOpen: isThirdModalOpen , onOpen: onThirdModalOpen, onClose: onThirdModalClose } = useDisclosure()
    const { isOpen: isFourthModalOpen , onOpen: onFourthModalOpen, onClose: onFourthModalClose } = useDisclosure()
    useEffect(() => {
        document.body.classList.toggle('modalopenslcttknone', isFirstModalOpen);
    },[isFirstModalOpen])
    useEffect(() => {
        document.body.classList.toggle('modalopenslcttkntwo', isSecondModalOpen);
    },[isSecondModalOpen])
    useEffect(() => {
        document.body.classList.toggle('modalopenslcttknthree', isThirdModalOpen);
    },[isThirdModalOpen])
    useEffect(() => {
        document.body.classList.toggle('modalopenslcttknfour', isFourthModalOpen);
    },[isFourthModalOpen])
  return (
    <>
        <LayoutTwo>
            <Box className='swap_main'>
                <Container maxW="container.xl">
                    <Box className='swap_border_Box'>
                        <Heading as="h4">
                            Swap
                        </Heading>
                             <Button onClick={onSettingModalOpen}
                                className="setting_swap_btn"
                                >
                                    <Image
                                    src='/img/setting_swap_img.svg'
                                    alt=''
                                    className='setting_swap_img'
                                    />
                            </Button>
                            <Box className='modale_box'>
                                <Modal
                                isOpen={isSettingModalOpen} onClose={onSettingModalClose} isCentered
                                >
                                    <ModalOverlay 
                                    />
                                    <ModalContent
                                    className='man_box_modal'
                                    >
                                    <ModalHeader className='trans_hader'>Transaction Settings</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Box className='modal_body'>
                                             <Heading as="h2">Slippage tolerance</Heading>
                                             <Box className='forth_box_nums'>
                                                <Box className='cstm_radio'>
                                                    <input type='radio' name='tollrens' />
                                                    <Heading as='h6' className='point_smn_won'>
                                                        0.1%
                                                    </Heading>
                                                </Box>
                                                <Box className='cstm_radio'>
                                                    <input type='radio' name='tollrens'/>
                                                    <Heading as='h6' className='point_smn_won point_smn_nonas'>
                                                        0.5%
                                                    </Heading>
                                                </Box>
                                                <Box className='cstm_radio'>
                                                    <input type='radio' name='tollrens' />
                                                    <Heading as='h6' className='point_smn_won'>
                                                        1%
                                                    </Heading>
                                                </Box>
                                                <Box className='input_any_popup'>
                                                    <input type='text' value="0.50%" className='nums_color'/>
                                                </Box>
                                            </Box>
                                            <Heading as="h4">Transaction deadline</Heading>
                                            <Box className='mint_box'>
                                                 <input type='text' value="20" className='nums_color'/>
                                                <Text>Min</Text>
                                            </Box>
                                                <Heading as="h1">Transaction deadline</Heading>
                                                <Box className='switch_box margi_btm'>
                                                    <Text>Toggle Expert Mode</Text>
                                                    <FormControl display='flex' alignItems='center' className='switch_min'>
                                                        <FormLabel className='switch_text'>
                                                            on
                                                        </FormLabel>
                                                        <Switch id='email-alerts' className='round_switch' />
                                                        <FormLabel className='switch_text'>
                                                            off
                                                        </FormLabel>
                                                    </FormControl>
                                                </Box>
                                                <Box className='switch_box'>
                                                    <Text>Disable Multihops</Text>
                                                    <FormControl display='flex' alignItems='center' className='switch_min'>
                                                        <FormLabel className='switch_text'>
                                                            on
                                                        </FormLabel>
                                                        <Switch id='email-alerts' className='round_switch' />
                                                        <FormLabel className='switch_text'>
                                                            off
                                                        </FormLabel>
                                                    </FormControl>
                                                </Box>
                                               
                                        </Box>
                                    </ModalBody>
                                    </ModalContent>
                                </Modal>
                            </Box>
                            
                        <Box className='spwa_cntnt_dark_box'>
                            <Box className='swap_upcro_brdr_bx'>
                                <Box className='flex_bx'>
                                    <input type="number" value="281.594" />
                                    <Button className='upmatic_btn_pop'onClick={onFristModalOpen}>
                                        <Image
                                        src='/img/upcro_coin_ic.svg'
                                        alt=''
                                        className='upcro_coin_ic'
                                        />
                                        upMATIC
                                        <Image
                                        src='/img/pop_01.svg'
                                        alt=''
                                        className='down_arrow'
                                        />
                                    </Button>
                                    {/* <Box className='slect_box'>
                                        <ReactSelect
                                            className='select_one'
                                            classNamePrefix="slct"
                                            options={currency}
                                            formatOptionLabel={currency => (
                                            <Box className='slect_bg'>
                                            <div className="country-option slect_bg">
                                                <img src={currency.image} alt="country-image" />
                                                <span >{currency.label}</span>
                                            </div>
                                            </Box>
                                            )}
                                        /> 
                                    </Box> */}
                                </Box>
                                
                                <Box className='flex_bx flex_bx_02'>
                                    <Text>$281.594</Text>
                                    <Text>Balance: 0.00</Text>
                                </Box>
                            </Box>
                            <Box className='swap_upcro_brdr_bx swap_btc_brdr_bx'>
                                <Box className='flex_bx'>
                                    <input type="number" value="281.594" />
                                    <Button className='upmatic_btn_pop'>
                                        <Image
                                        src='/img/upcro_coin_ic.svg'
                                        alt=''
                                        className='upcro_coin_ic'
                                        />
                                        upMATIC
                                        <Image
                                        src='/img/pop_01.svg'
                                        alt=''
                                        className='down_arrow'
                                        />
                                    </Button>
                                    {/* <Box className='slect_box'>
                                        <ReactSelect
                                            className='select_one'
                                            classNamePrefix="slct"
                                            options={currencytwo}
                                            formatOptionLabel={currencytwo => (
                                            <div className="country-option slect_bg">
                                                <img src={currencytwo.image} alt="country-image" />
                                                <span>{currencytwo.label}</span>
                                            </div>
                                            )}
                                        /> 
                                    </Box>       */}
                                </Box>
                                <Box className='flex_bx flex_bx_02'>
                                    <Text>$281.594</Text>
                                    <Text>Balance: 1,688,648</Text>
                                </Box>
                            </Box>
                            <Button className='swep_arw_btn_box'>
                                <Image src="img/swep_aro_butm.svg" alt='' />
                            </Button>
                            <Box className='text_row_darc'>
                                <Text>1 upMATIC = 0.00846454 BTC</Text>
                                <Text>($0.00065486635)</Text>
                                <Text>Gas: $32.455</Text>
                            </Box>
                            <Button className='stake_full_btn'>Stake</Button>
                        </Box>
                    </Box>
                    <Box className='contracts_box'>
                        <Heading as="h4">Contracts</Heading>
                        <Box className='upcro_copyflex'>
                            <Heading as="h6">upMATIC<Text>0xb0620........f790f<Button><Image src="img/copy_ic.svg" alt='' /></Button></Text></Heading>
                            <Heading as="h6" className='right_h6'>xUpMATIC<Text>0x78Bf85......ed90e<Button><Image src="img/copy_ic.svg" alt='' /></Button></Text></Heading>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </LayoutTwo>
        {/* Select a token */}
        <Modal isOpen={isFirstModalOpen} onClose={onFirstModalClose} isCentered id="SelectTokenModalone">
            <ModalOverlay />
            <ModalContent className='transaction_settings select_tocan_popup'>
            <ModalHeader>Select a token</ModalHeader>
            <ModalCloseButton />
            <ModalBody className='containt_cntr'>
                <Box className='select_tocan_cntnt'>
                    <Box className='inpt_slect_prnt'>
                        <input type="text" placeholder="Search name or paste address"></input>
                    </Box>
                    <Box className='select_tocans_btm_box'>
                        <Box className='select_tocans_btm_box_inn'>
                            <Button onClick={onSecondModalOpen} className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_01.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">BNB</Heading>
                                        <input type="number" value="0.06273"></input>
                                    </Box>
                                    <Text>BNB</Text>
                                </Box>
                            </Button>
                            <Box className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_02.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">ADAFLECT</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>ADAFlect</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_03.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">bPRISM</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Binance PRISM Token</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_04.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">ADMC</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Adamant</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_05.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">BUSD</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Binange-Pegged BUSD</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_06.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">DOLPH</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Doplhins Finance</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slect_tokn_ic_07.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">EMPIRE</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>EmpireDEX</Text>
                                </Box>
                            </Box>
                            {/* <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_01.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">BNB</Heading>
                                        <input type="number" value="0.06273"></input>
                                    </Box>
                                    <Text>BNB</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_02.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">ADAFLECT</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>ADAFlect</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_03.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">bPRISM</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Binance PRISM Token</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_04.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">ADMC</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Adamant</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_05.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">BUSD</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Binange-Pegged BUSD</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_06.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">DOLPH</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>Doplhins Finance</Text>
                                </Box>
                            </Box>
                            <Box className='tocn_bx'>
                                <Image src='/img/slt_tcn_07.svg' />
                                <Box className='tcn_nam_input'>
                                    <Box className='text_inpt_box'>
                                        <Heading as="h5">EMPIRE</Heading>
                                        <input type="number" value="0"></input>
                                    </Box>
                                    <Text>EmpireDEX</Text>
                                </Box>
                            </Box> */}
                        </Box>
                        
                    </Box>
                </Box>
                <Box className='manage_btn_prnt'>
                    <Button onClick={onThirdModalOpen}><Image src='/img/mange_btn_img.svg' />Manage</Button>
                </Box>
            </ModalBody>
            
            </ModalContent>
        </Modal>
        {/* Manage Modal */}
        <Modal isOpen={isSecondModalOpen} onClose={onSecondModalClose} isCentered id="SelectTokenModaltwo">
            <ModalOverlay />
            <ModalContent className='transaction_settings select_tocan_popup'>
            <ModalHeader>Select a token</ModalHeader>
            <ModalCloseButton />
            <ModalBody className='containt_cntr'>
                <Box className='select_tocan_cntnt'>
                    <Box className='inpt_slect_prnt'>
                        <input type="text" placeholder="Search name or paste address"></input>
                    </Box>
                    <Button onClick={onFourthModalOpen} className='select_tocan_root_box'>
                        <Box className='root_img_text_box'>
                            <Image src='/img/slect_tokn_ic_01.svg' />
                            <Box >
                                <Heading as="h6" >upBNB</Heading>
                                <Text>ROOTKIT</Text>
                            </Box>
                        </Box>
                        <Heading as="h6" >0.06273</Heading>
                    </Button>
                    {/* <ImportToken /> */}
                    <Box className='exclim_text'>
                        <Heading as="h5" >Expanded results from inactive Token Lists</Heading>
                        <Image src='/img/nolj_ic.svg' />
                    </Box>
                </Box>
                <Box className='manage_btn_prnt'>
                    <Button ><Image src='/img/mange_btn_img.svg' />Manage</Button>
                </Box>
            </ModalBody>
            </ModalContent>
        </Modal>
        <Modal isOpen={isThirdModalOpen} onClose={onThirdModalClose} isCentered id="SelectTokenModalthree">
            <ModalOverlay />
            <ModalContent className='transaction_settings select_tocan_popup manag_modal_cntnt'>
            <ModalHeader>Manage</ModalHeader>
            <ModalCloseButton />
            <ModalCloseButton className='arrow_btn'/>
            <ModalBody className='containt_cntr'>
                <Box className='manage_tab_main'>
                    <Box className='select_tocan_cntnt pading_box'>
                        <Box className='inpt_slect_prnt slect_width'>
                            <input type="text" placeholder="Search name or paste address"></input>
                        </Box>
                        <Box className='empr_df_list_tcn'>
                              <Box className='empr_text'>
                                <Image src='/img/mange_ic_01.svg' />
                                <Box>
                                    <Heading as="h5">upBNB</Heading>
                                    <Text >84 tokens <Image src='/img/mange_sting_ic.svg' /></Text>
                                </Box>
                              </Box>
                              <Stack direction='row' className='manage_switch'>
                                <Text>Off</Text>
                                <Switch colorScheme='teal' size='lg' />
                                <Text>On</Text>
                              </Stack>
                            </Box>
                    </Box>
                </Box>
            </ModalBody>
            </ModalContent>
        </Modal>

        <Modal isOpen={isFourthModalOpen} onClose={onFourthModalClose} isCentered id="SelectTokenModalfour">
            <ModalOverlay />
            <ModalContent className='transaction_settings select_tocan_popup imp_tocan_popup' >
            <ModalHeader>Import Token</ModalHeader>
            <ModalCloseButton />
            <ModalCloseButton className='back_btn_imp' />
            <ModalBody className='containt_cntr'>
                <Box className='select_tocan_cntnt'>
                    <Box className='root_bnb_box'>
                        <Box className='root_bnb_raw'>
                            <Image src='/img/mange_ic_01.svg' />
                            <Heading as="h6" >upBNB</Heading>
                            <Text>ROOTKIT</Text>
                        </Box>
                        <Text className='alt_text'>
                            0x1759254EB142bcF0175347DA0f3c19235538a9A
                        </Text>
                        <Box className='unknwon_bx'>
                            <Image src='/img/alrt_ic.svg' />
                            <Text>Unknown source</Text>
                        </Box>
                    </Box>
                    <Box className='trade_at_your_risk_box'>
                        <Image src='/img/red_alrt_ic.svg' className='jam_tringle_ic' />
                        <Heading as="h5">Trade at your owk risk!</Heading>
                        <Text>Anyone an create a token, including creating fake versions of exiting tokens that claim to represent projects.</Text>
                        <Heading as="h6">If you purchase this token, you may not be avle to sell it back.</Heading>
                        <Checkbox className='undersan_check_box'>I understand</Checkbox>
                    </Box>
                </Box>
                <Box className='manage_btn_prnt'>
                    <Button>Import</Button>
                </Box>
            </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}
