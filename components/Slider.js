import {
  Box,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useKeenSlider } from 'keen-slider/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const Slider = ({
  items,
  slidesCount = {
    base: 1,
    md: 3,
  },
  spacing = 100,
}) => {
  const slidesPerPage = useBreakpointValue(slidesCount);

  const sliderButtonColorScheme = useBreakpointValue({
    base: 'gray',
    xl: 'blackAlpha',
  });

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesPerPage,
    spacing,
  });

  return (
    <Box width='100%' position='relative'>
      <Flex ref={sliderRef} className='keen-slider' overflow='hidden'>
        {items}
      </Flex>
      <IconButton
        position='absolute'
        colorScheme={sliderButtonColorScheme}
        borderRadius='full'
        top='calc(50% - 20px)'
        left={['20px', null, null, null, '-60px']}
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
        right={['20px', null, null, null, '-60px']}
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
