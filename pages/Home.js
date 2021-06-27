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
  useBreakpointValue,
  IconButton,
  HStack,
  Input,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
// import BurgerMenu from "../components/BurgerMenu";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';

const Banner = () => {
  return (
    <Box
      height='calc(100vh)'
      position='relative'
      backgroundColor='rgba(0, 0, 0, 0.5)'
      _before={{
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/assets/1MainBG.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    >
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
      <Box position='absolute' width='100%' height='100%'>
        <Container maxW='container.lg' height='100%'>
          <Box
            d='flex'
            width='100%'
            height='100%'
            justifyContent='center'
            bgImage="url('/assets/1MainBgGlass.png')"
          >
            <Heading
              marginTop='50px'
              fontSize={['xl', null, null, '75px']}
              lineHeight='tall'
              color='white'
            >
              NY VideoService
            </Heading>
          </Box>
          <Flex
            marginTop='-300px'
            h='440px'
            justifyContent='space-between'
            flexWrap='wrap'
          >
            <Box w='390px'>
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
      alignItems='center'
      bgColor='black'
      w='425px'
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
      <Input w='350px' placeholder='Name' />
      <Input w='350px' placeholder='E-mail' />
      <Input w='350px' placeholder='Phone number' />
      <Input w='350px' placeholder='Message' />
      <Button bgColor='#99E836' color='white' w='350px'>
        Send
      </Button>
    </Stack>
  );
};

export const About = () => {
  return (
    <Box bgColor='#030308'>
      <Container maxW='container.lg'>
        <Heading
          fontSize='36px'
          paddingTop='300px'
          color='white'
          fontWeight='bold'
        >
          What we do?
        </Heading>
        <Flex marginTop='70px' justifyContent='space-between' flexWrap='wrap'>
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

const Projects = () => {
  return (
    <Box bgColor='#030308' paddingTop='150px'>
      <Container maxW='container.lg'>
        <Flex justifyContent='space-between'>
          <Box border='white 23px solid'>
            <Image src='/assets/ProjectsBanner.png' />
          </Box>
          <Stack w='458px' spacing={6}>
            <Heading fontSize='48px' color='white' fontWeight='bold'>
              Charley and <br /> Hannah’s <br />
              wedding
            </Heading>
            <Text
              paddingY='5px'
              borderTop='1px solid #353539'
              borderBottom='1px solid #353539'
              color='#B7B7B7'
            >
              2019 - 14 April
            </Text>
            <Text fontSize='12px' color='#919191'>
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
        <Flex
          justifyContent='space-between'
          paddingY='50px'
          borderY='1px solid white'
          marginTop='20px'
        >
          <Text color='white'>Other projects</Text>
          <Box>
            {/* Здесь будет каруселька с видосиками вынести в компонент*/}
          </Box>
        </Flex>
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
      height='calc(100vh)'
      position='relative'
      backgroundColor='rgba(0, 0, 0, 0.5)'
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
        zIndex: -1,
      }}
    >
      <Container
        maxW='container.lg'
        d='flex'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Box w='400px'>
          <Heading fontSize='48px' color='white' fontWeight='bold'>
            What people say about us?
          </Heading>
          <TestimonalsSlider paddingTop='80px' testimonals={testimonals} />
        </Box>
      </Container>
    </Box>
  );
};

const TestimonalsSlider = ({ testimonals }) => {
  const slidesCount = useBreakpointValue({ base: 1, md: 2 });

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesCount,
    spacing: 20,
  });

  const sliderButtonColorScheme = useBreakpointValue({
    base: 'gray',
    xl: 'blackAlpha',
  });

  useEffect(() => {
    if (slider) {
      slider.resize();
    }
  }, [testimonals, slider]);

  return (
    <Box position='relative' width='100%'>
      <Flex ref={sliderRef} className='keen-slider' overflow='hidden'>
        {testimonals.map(({ desc, name, company }, idx) => (
          <Stack spacing={6} key={idx} w='400px'>
            <Text fontSize='14px' color='white'>
              {desc}
            </Text>
            <Text fontSize='18px' fontWeight='bold' color='white'>
              {name}
            </Text>
            <Text fontSize='12px' fontWeight='bold' color='white'>
              {company}
            </Text>
          </Stack>
        ))}
      </Flex>
      <IconButton
        position='absolute'
        colorScheme={sliderButtonColorScheme}
        borderRadius='full'
        top='calc(50% - 20px)'
        left={'20px'}
        _hover={{
          transform: 'scale(1.1)',
        }}
        icon={<Icon as={FaAngleLeft} boxSize='20px' />}
        onClick={() => {
          slider.prev(1);
        }}
      />
      <IconButton
        borderRadius='full'
        colorScheme={sliderButtonColorScheme}
        position='absolute'
        top='calc(50% - 20px)'
        right={'20px'}
        _hover={{
          transform: 'scale(1.1)',
        }}
        icon={<Icon as={FaAngleRight} boxSize='20px' />}
        onClick={() => {
          slider.next(1);
        }}
      />
    </Box>
  );
};

const Contacts = () => {
  return (
    <Box bgColor='black' paddingTop='80px' h='800px'>
      <Container maxW='container.lg'>
        <Flex justifyContent='space-between'>
          <ContactsForm />
          <Stack w='400px' spacing={7}>
            <Heading fontSize='36px' color='white' fontWeight='bold'>
              We keep your best memories
            </Heading>
            <Box bg='url("/assets/contactsFire.png")' bgSize='cover' h='400px'>
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
    <Box bgColor='black'>
      <Container maxW='container.lg'>
        <Heading fontSize='32px' fontWeight='400' color='white'>
          Logotype
        </Heading>
        <Flex
          justifyContent='space-between'
          paddingBottom='40px'
          borderBottom='1px solid #71777D'
        >
          <HStack spacing={10}>
            <Text fontSize='16px' color='white'>
              About
            </Text>
            <Text fontSize='16px' color='white'>
              Careers
            </Text>
            <Text fontSize='16px' color='white'>
              Press
            </Text>
            <Text fontSize='16px' color='white'>
              Customer Care
            </Text>
            <Text fontSize='16px' color='white'>
              Service
            </Text>
          </HStack>
          <Stack>
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
          </Stack>
        </Flex>
        <Flex paddingY='40px' justifyContent='space-between'>
          <HStack>
            <Text color='#92989F'>Terms & conditions |</Text>
            <Text color='#92989F'>Privacy Policy |</Text>
            <Text color='#92989F'>Accessibility |</Text>
            <Text color='#92989F'>Legal</Text>
          </HStack>
          <Text color='#92989F'>
            Design with love © Rearm.dev 2021. All right reserved
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Testimonals />
      <Contacts />
      <Footer />
    </>
  );
};
export default Home;
