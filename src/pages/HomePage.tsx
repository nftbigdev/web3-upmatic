import React, {useEffect} from 'react'
import FirstSec from '../components/Home/FirstSec';
import Layout from './Layout';
import { Box } from '@chakra-ui/react';
import AboutusSec from '../components/Home/AboutusSec';
import TechnologySec from '../components/Home/TechnologySec';
import FeaturesSec from '../components/Home/FeaturesSec';
import TeamSec from '../components/Home/TeamSec';
import ArticleSec from '../components/Home/ArticleSec';
import RoadmapSec from '../components/Home/RoadmapSec';
import HowToBuySec from '../components/Home/HowToBuySec';
import AOS from 'aos';

export default function HomePage() {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout className='app-page'>
      <>
        <Box className="homepage_main">
          <FirstSec />
          <AboutusSec />
          <TechnologySec />
          <FeaturesSec />
          <TeamSec />
          <ArticleSec />
          <RoadmapSec />
          <HowToBuySec />
        </Box>
      </>
    </Layout>
    
  )
}

