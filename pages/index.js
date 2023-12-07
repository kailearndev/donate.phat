import { EmailIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  chakra,
  useColorModeValue,
  useDisclosure,
  useToast,
  useClipboard
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { FaYoutube } from 'react-icons/fa'
import { PiDiscordLogoDuotone } from 'react-icons/pi'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import pld from '../public/images/pld.webp'
import qr from '../public/images/qrdonate.jpeg'
import vcb from '../public/images/vcb.png'
import stk from '../public/images/passcode.png'
import { motion } from 'framer-motion'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const { onCopy } = useClipboard('0791000060184')
  const handleCopy = () => {
    onCopy
    toast({
      title: 'Đã Copy',
      description: 'VCB 0791000060184',
      status: 'info',
      duration: 3000,
      isClosable: true
    })
  }
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, mấy bạn trẻ =))
        </Box>

        <Box display={{ md: 'flex' }} alignItems={'center'}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Phát Mê Game
            </Heading>
            <p> ( Photographer/Streamer/Xiaoliner )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="200"
              h="200px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                translate={''}
               
              >
                <ProfileImage
                  src="/images/avt.jpg"
                  alt="Profile image"
                  // borderRadius="full"
                  width="200"
                  height="200"
                />
              </motion.div>
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Kênh Donate
          </Heading>

          <Box align="center" my={4}></Box>
        </Section>
        <List p={'unset'} display={'flex'} flexDirection={'row'}>
          <ListItem>
            <Link>
              <Button
                onClick={onOpen}
                variant="ghost"
                colorScheme="green"
                leftIcon={<Image width={20} height={20} src={vcb} alt="" />}
              >
                QR VCB
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://playerduo.net/phatsaygame" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Image width={20} height={20} src={pld} alt="" />}
              >
                Playerduo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button
              onClick={handleCopy}
              variant="ghost"
              colorScheme="telegram"
              leftIcon={<Image width={20} height={20} src={stk} alt="" />}
            >
              STK
            </Button>
          </ListItem>
        </List>

        {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

        {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Network
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://discord.com/invite/Cu4Wvdm8GX"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<PiDiscordLogoDuotone />}
                >
                  @Discord
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.youtube.com/@phatsaygame" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaYoutube />}
                >
                  @Youtube
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="mailto:dannyphat199004@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Liên hệ cho công việc
            </Button>
          </Box>
        </Section>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody sx={{ display: 'flex', justifyContent: 'center', p: 20 }}>
            <Image
              width={400}
              height={400}
              alt=""
              src={qr}
              style={{
                objectFit: 'cover',
                borderRadius: 10
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
