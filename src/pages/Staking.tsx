import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import LayoutTwo from './LayoutTwo'
import StakingTabs from '../components/Staking/StakingTabs'

export default function Staking() {
  return (
    <>
        <LayoutTwo>
            <Box className='staking_main'>
                <Container maxW="container.xl">
                    <StakingTabs />
                </Container>
            </Box>
        </LayoutTwo>
    </>
  )
}
