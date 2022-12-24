import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import { connectors } from '../utils/connectors';
import Web3 from 'web3'
// import Sidebar from '../layouttwo/Sidebar';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { NavLink } from 'react-router-dom';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ];

const LayoutTwo = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', xl: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent className='drawer_slider'>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, xl: "300px" }} className="sidebar_main_prnt">
        {props.children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <Box
      transition="0.3s ease"
      w={{ base: 'full', xl: "300px" }}
      pos="fixed"
      zIndex={999999}
      h="full"
      {...rest}
      className="sidebar_main"
    >
      <Flex alignItems="center" className='sidebar_logo_prnt'>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <NavLink to="/">
            <Image src="img/dahboard_logo.png" alt="" />
          </NavLink>
        </Text>
        <CloseButton display={{ base: 'flex', xl: 'none' }} onClick={onClose} className="sidebar_close_btn" />
      </Flex>
      <Flex className='dashboard_links_prnt'>
        <Text>App</Text>
        <Flex className='dashboard_links'>
          <NavLink
            to='/dashboard'
            className={splitLocation[1] === 'dashboard' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic01.svg' alt="" />
            <span>dashboard</span>
          </NavLink>
          <NavLink
            to='/staking'
            className={splitLocation[1] === '' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic02.svg' alt="" />
            <span>Stake</span>
          </NavLink>
          <NavLink
            to='/swap'
            className={splitLocation[1] === '' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic03.svg' alt="" />
            <span>Swap</span>
          </NavLink>
          <NavLink
            to='/'
            className={splitLocation[1] === '' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic04.svg' alt="" />
            <span>Pools</span>
          </NavLink>
          <NavLink
            to='/'
            className={splitLocation[1] === '' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic071.svg' alt="" />
            <span>Voting</span>
          </NavLink>
          <NavLink
            to='/faq'
            className={splitLocation[1] === '' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic06.svg' alt="" />
            <span>FAQ</span>
          </NavLink>
          <NavLink
            to='/roadmap'
            className={splitLocation[1] === '' ? 'active' : ''}
          >
            <Image src='img/sidebar_link_ic06.svg' alt="" />
            <span>Roadmap</span>
          </NavLink>
        </Flex>
      </Flex>
      <Flex className='social_links_prnt'>
        <Text>Social Media</Text>
        <Flex className='socl_links_dash'>
          <Link href='#'><Image src='img/twitter_ic.svg' alt="" /><span>Twitter</span></Link>
          <Link href='#'><Image src='img/telegram_ic.svg' alt="" /><span>Telegram</span></Link>
          <Link href='#'><Image src='img/discord_ic.svg' alt="" /><span>Discord</span></Link>
          <Link href='#'><Image src='img/medium_ic.svg' alt="" /><span>Medium</span></Link>
        </Flex>
      </Flex>
      {/* {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))} */}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {

  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          // bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [account, setAccount] = useState("")
  const [scroll, setScroll] = useState(false)
  const { activate } = useWeb3React();
  const connectWallet = async () => {
    const eth:any = window
    const enableeth = eth.ethereum
    const web3 = new Web3(enableeth)
    if (enableeth) {
      await enableeth.enable()
      const networkId = await web3.eth.net.getId()
      if (networkId == 137) {
        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]
        setAccount(account)
      } else {
        window.alert('Please Connect to Polygon mainnet')
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  return (
    <>
      <Box className="margin_a">
        <Flex
          ml={{ base: 0, xl: 60 }}
          alignItems="center"
          justifyContent={{ base: 'space-between', xl: 'flex-end' }}
          className={scroll ? "sidebar_header scrolled" : "sidebar_header"}
          {...rest}>
          <IconButton
            display={{ base: 'flex', xl: 'none' }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            className="dashbourd_menu_btn"
            icon={<FiMenu />}
          />
          <HStack spacing={{ base: '0', xl: '6' }} >
            <Flex alignItems={'center'} className="sidebar_header_btns">
              <Button as="a" href="#" >Contract Address List</Button>
              {
                account ? 
                <Button as="div" className='cnct_wallet_btn' onClick={connectWallet}>
                  {`${account.substring(0, 4)}...${account.slice(account.length - 4)}`}
                </Button>
                : 
                <Button as="div" className='cnct_wallet_btn' onClick={connectWallet}>Connect Wallet</Button>
              }
            </Flex>
          </HStack>
        </Flex>
      </Box>

    </>
  );
};

export default LayoutTwo;