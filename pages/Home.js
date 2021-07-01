import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Stack,
  Heading,
  Icon,
  HStack,
  Input,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { Slider } from '../components/Slider';
import FeedBackCard from '../components/FeedBackCard';
import ReactPlayer from 'react-player';

const Banner = () => {
  return (
    <Box
      id='main'
      height='calc(100vh)'
      position='relative'
      backgroundColor='rgba(0, 0, 0, 0.5)'
      _before={{
        content: "''",
        position: 'absolute',
        top: 0,
        bgRepeat: 'no-repeat',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/assets/1MainBG.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    >
      <Box position='absolute' width='100%' height='100%'>
        <Container maxW='container.lg' height='100%'>
          <Box
            d='flex'
            width='100%'
            height='100%'
            bgRepeat='no-repeat'
            bgPos='center'
            justifyContent='center'
            bgImage="url('/assets/1MainBgGlass.png')"
          >
            <Heading
              marginTop='50px'
              fontSize={['50px', null, null, '75px']}
              lineHeight='tall'
              color='white'
            >
              NY VideoService
            </Heading>
          </Box>
          <Flex
            alignItems={['center', null, 'start', null]}
            marginTop='-300px'
            h='440px'
            justifyContent={['space-around', null, null, 'space-between']}
            flexWrap='wrap'
          >
            <Box w='390px' marginTop={['200px', null, '0', null]}>
              <Heading fontSize='32px' color='white' fontWeight='bold'>
                Who we are?
              </Heading>
              <Text color='white'>
                We make you memories immortal and unforgettable. By bringing our
                ideas to life we create the best solution to your
                business/project/channel giving it the most attractive view
              </Text>
            </Box>
            <ContactsForm />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

const ContactsForm = () => {
  return (
    <Stack
      marginLeft={['0', '20px', null, '0']}
      justifyContent='center'
      marginTop={['50px', '0', null, null]}
      alignItems='center'
      bgColor='black'
      w={['300px', null, null, '425px']}
      h='440px'
      spacing={5}
      boxShadow='0px 0px 20px 10px white'
    >
      <Flex alignItems='center' flexDir='column' marginTop='20px'>
        <Heading fontSize='24px' color='#99E836'>
          Contact Us
        </Heading>
        <Text color='white'>Make your memories immortal!</Text>
      </Flex>
      <Input w='80%' placeholder='Name' />
      <Input w='80%' placeholder='E-mail' />
      <Input w='80%' placeholder='Phone number' />
      <Input w='80%' height='80px' placeholder='Message' />
      <Button bgColor='#99E836' color='white' w='80%'>
        Send
      </Button>
    </Stack>
  );
};

export const About = () => {
  return (
    <Box
      bgColor='#030308'
      w='100%'
      id='about'
      marginTop={['350px', null, '0', null]}
    >
      <Container maxW='container.lg'>
        <Heading
          margin='0'
          fontSize='36px'
          paddingTop='300px'
          color='white'
          fontWeight='bold'
          textAlign={['center', null, 'left', null]}
        >
          What we do?
        </Heading>
        <Flex
          marginTop='70px'
          justifyContent={['center', null, 'space-between', null]}
          alignItems='center'
          flexWrap='wrap'
        >
          <Flex mx='auto' flexWrap='wrap' justifyContent='center'>
            <Benefits
              mx='auto'
              bgUrl='1Benefits'
              photoContent='1benefContent'
              desc='Corporate Videos'
            />
            <Benefits
              mx='auto'
              bgUrl='3beneficts'
              photoContent='2benefContent'
              desc='Commercials'
            />
          </Flex>
          <Flex mx='auto' flexWrap='wrap' justifyContent='center'>
            <Benefits
              mx='auto'
              bgUrl='1Benefits'
              photoContent='3benefContent'
              desc='Drone filming'
            />
            <Benefits
              mx='auto'
              bgUrl='1Benefits'
              photoContent='4benefContent'
              desc='360 - degree shots'
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const Benefits = ({ bgUrl, photoContent, desc }) => {
  return (
    <Stack spacing={10} alignItems='center'>
      <Box
        d='flex'
        alignItems='center'
        justifyContent='center'
        h='200px'
        w='200px'
        bg={`url('/assets/${bgUrl}.png')`}
        bgSize='cover'
      >
        <Image src={`/assets/${photoContent}.png`} h='150px' w='150px' />
      </Box>
      <Text color='white' fontSize='24px'>
        {desc}
      </Text>
    </Stack>
  );
};

const videos = [
  {
    name: '1',
    link: 'https://www.youtube.com/watch?v=K0ExQES7KJE',
  },
  {
    name: '2',
    link: 'https://www.youtube.com/watch?v=K0ExQES7KJE',
  },
  {
    name: '3',
    link: 'https://www.youtube.com/watch?v=K0ExQES7KJE',
  },
  {
    name: '4',
    link: 'https://vimeo.com/509811987',
  },
];

const Projects = () => {
  return (
    <Box bgColor='#030308' paddingTop='150px' id='projects'>
      <Container maxW='container.lg'>
        <Flex
          justifyContent='space-between'
          flexDir={['column', null, 'row', null]}
        >
          <Box size='auto' border='white 15px solid'>
            <Image src='/assets/ProjectsBanner.png' />
          </Box>
          <Stack
            paddingLeft={['0', null, '10px', '0']}
            w={['300px', null, '360px', '458px']}
            spacing={3}
            alignItems={['center', null, 'start', null]}
          >
            <Heading fontSize='48px' color='white' fontWeight='bold'>
              Charley and <br /> Hannah’s <br />
              wedding
            </Heading>
            <Text
              display={['none', null, 'block', null]}
              paddingY='5px'
              borderTop='1px solid #353539'
              borderBottom='1px solid #353539'
              color='#B7B7B7'
            >
              2019 - 14 April
            </Text>
            <Text
              fontSize='12px'
              color='#919191'
              display={['none', null, 'block', null]}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit. Totam
              rem emo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos.
            </Text>
            <Button
              color='white'
              bgColor='#030308'
              border='1px solid white'
              borderRadius='20px'
              w='180px'
            >
              Watch Now
            </Button>
          </Stack>
        </Flex>
        <Stack paddingY='50px' borderY='1px solid white' marginTop='20px'>
          <Heading color='white' fontWeight='bold'>
            Other projects
          </Heading>
          <Slider
            paddingTop='80px'
            slidesCount={[{ base: 1, md: 1 }, null, null, { base: 1, md: 1 }]}
            items={videos.map(({ link }, idx) => (
              <Box key={idx} padding='0'>
                {/* <ReactPlayer url={link} /> */}
                <iframe
                  className='keen-slider__slide'
                  src={`https://player.vimeo.com/video/76979871?background=0&muted=1`}
                  width='500'
                  height='360'
                  frameBorder='0'
                  allow='autoplay'
                  allowFullScreen
                ></iframe>
              </Box>
            ))}
          />
        </Stack>
      </Container>
    </Box>
  );
};

const testimonals = [
  {
    desc: 'We make our customers  products valuable in the eyes of customers. Todo this, we analyze and study people, build long-term strategies for interacting with them, develop creative ideas our customers products valuable in the eyes of',
    name: 'Dwight Schrute',
    company: 'Creative Market inc.',
  },
  {
    desc: 'We make our customers  products valuable in the eyes of customers. Todo this, we analyze and study people, build long-term strategies for interacting with them, develop creative ideas our customers products valuable in the eyes of',
    name: 'Dwight Schrute',
    company: 'Creative Market inc.',
  },
  {
    desc: 'We make our customers  products valuable in the eyes of customers. Todo this, we analyze and study people, build long-term strategies for interacting with them, develop creative ideas our customers products valuable in the eyes of',
    name: 'Dwight Schrute',
    company: 'Creative Market inc.',
  },
  {
    desc: 'We make our customers  products valuable in the eyes of customers. Todo this, we analyze and study people, build long-term strategies for interacting with them, develop creative ideas our customers products valuable in the eyes of',
    name: 'Dwight Schrute',
    company: 'Creative Market inc.',
  },
];

const Testimonals = () => {
  return (
    <Box
      id='feedback'
      height='calc(100vh)'
      position='relative'
      bgColor='#030308'
      d='flex'
      _after={{
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/assets/FeedbackBG.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container
        maxW='container.lg'
        d='flex'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Box zIndex='2' w={['250px', null, '400px', null]}>
          <Heading fontSize='48px' color='white' fontWeight='bold'>
            What people say about us?
          </Heading>
          <Slider
            paddingTop='80px'
            slidesCount={{ base: 1, md: 1 }}
            items={testimonals.map(({ desc, name, company }, idx) => (
              <FeedBackCard
                key={idx}
                name={name}
                desc={desc}
                company={company}
              />
            ))}
          />
        </Box>
      </Container>
    </Box>
  );
};

const Contacts = () => {
  return (
    <Box id='contacts' bgColor='black' paddingTop='80px' h='800px'>
      <Container maxW='container.lg'>
        <Flex
          justifyContent={['space-around', null, null, 'space-between']}
          flexWrap='wrap'
          alignItems='center'
        >
          <ContactsForm />
          <Stack
            w={['400px', null, '300px', '400px']}
            spacing={7}
            marginTop={['50px', '30px', '0', null]}
          >
            <Heading fontSize='36px' color='white' fontWeight='bold'>
              We keep your best memories
            </Heading>
            <Box
              bg='url("/assets/contactsFire.png")'
              bgSize='cover'
              height={['200px', null, '350px', null]}
            >
              <Text color='white'>
                We make you memories immortal and unforgettable. By bringing our
                ideas to life we create the best solution to your
                business/project/channel giving it the most attractive view
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box bgColor='black' marginTop={['200px', null, '0', null]}>
      <Container maxW='container.lg'>
        <Heading fontSize='32px' fontWeight='400' color='white'>
          Logotype
        </Heading>
        <Flex
          justifyContent='space-between'
          paddingBottom='40px'
          borderBottom='1px solid #71777D'
          flexWrap='wrap'
        >
          <HStack
            spacing={[5, null, 10, null]}
            flexWrap={['wrap', null, 'no-wrap', null]}
            borderBottom={['1px solid white', null, null, 'none']}
          >
            <Text fontSize='16px' color='white'>
              <a href='#main'>Who we are</a>
            </Text>
            <Text fontSize='16px' color='white'>
              <a href='#about'></a>What we do
            </Text>
            <Text fontSize='16px' color='white'>
              <a href='#projects'>Our Projects</a>
            </Text>
            <Text fontSize='16px' color='white'>
              <a href='#feedback'>Testimonals</a>
            </Text>
            <Text fontSize='16px' color='white'>
              <a href='#contacts'>Contact Us</a>
            </Text>
          </HStack>
          <Stack paddingTop={['20px', null, null, '0']}>
            <Text fontSize='16px' color='white'>
              Get the freshest news from us
            </Text>
            <HStack>
              <Input
                borderRadius='2px'
                bgColor='white'
                placeholder='Your email address'
              />
              <Button borderRadius='2px' bgColor='#99E836' color='white'>
                Subscribe
              </Button>
            </HStack>
            <HStack spacing={4} justifyContent='flex-end'>
              <Link isExternal href={'/'}>
                <a>
                  <Icon
                    _hover={{
                      paddingBottom: '2px',
                      borderBottom: '2px solid #7CC0E9',
                    }}
                    as={FaFacebookF}
                    color='white'
                    boxSize={4}
                  />
                </a>
              </Link>
              <Link isExternal href={'/'}>
                <a>
                  <Icon
                    _hover={{
                      paddingBottom: '2px',
                      borderBottom: '2px solid #7CC0E9',
                    }}
                    as={FaInstagram}
                    color='white'
                    boxSize={4}
                  />
                </a>
              </Link>
              <Link isExternal href={'/'}>
                <a>
                  <Icon
                    _hover={{
                      paddingBottom: '2px',
                      borderBottom: '2px solid #7CC0E9',
                    }}
                    as={FaTwitter}
                    color='white'
                    boxSize={4}
                  />
                </a>
              </Link>
            </HStack>
          </Stack>
        </Flex>
        <Flex paddingY='40px' justifyContent='space-between' flexWrap='wrap'>
          <HStack>
            <Text color='#92989F'>Terms & conditions |</Text>
            <Text color='#92989F'>Privacy Policy |</Text>
          </HStack>
          <Text color='#92989F' marginTop={['10px', '0', null, null]}>
            Design with love © Rearm.dev 2021. All right reserved
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor='#030308'>
      <Stack
        spacing='80px'
        pos='fixed'
        marginLeft={[0, null, '10px', null]}
        paddingLeft={['2px', null]}
        marginTop='50px'
        zIndex='16'
      >
        <a href='#main'>
          <Text
            color='#696A6B'
            transform='rotate(90deg)'
            _hover={{
              color: 'white',
              borderBottom: '1px solid #18A0FB',
              padding: '0',
            }}
          >
            Who we are
          </Text>
        </a>
        <a href='#about'>
          <Text
            color='#696A6B'
            transform='rotate(90deg)'
            _hover={{
              color: 'white',
              borderBottom: '1px solid #18A0FB',
              padding: '0',
            }}
          >
            What we do
          </Text>
        </a>
        <a href='#projects'>
          <Text
            color='#696A6B'
            transform='rotate(90deg)'
            _hover={{
              color: 'white',
              borderBottom: '1px solid #18A0FB',
              padding: '0',
            }}
          >
            Our projects
          </Text>
        </a>
        <a href='#feedback'>
          <Text
            color='#696A6B'
            transform='rotate(90deg)'
            _hover={{
              color: 'white',
              borderBottom: '1px solid #18A0FB',
              padding: '0',
            }}
          >
            Testimonals
          </Text>
        </a>
        <Text
          color='#696A6B'
          transform='rotate(90deg)'
          _hover={{
            color: 'white',
            borderBottom: '1px solid #18A0FB',
            padding: '0',
          }}
        >
          <a href='#contacts'>Contact Us</a>
        </Text>
      </Stack>
      <Banner name='main' />
      <About name='about' />
      <Projects name='projects' />
      <Testimonals name='feedback' />
      <Contacts name='contacts' />
      <Footer />
    </Box>
  );
};
export default Home;
