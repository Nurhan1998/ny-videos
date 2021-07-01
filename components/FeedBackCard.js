import { Box, Stack, Heading, Text } from '@chakra-ui/react';

const FeedBackCard = ({ name, desc, company, ...props }) => {
  return (
    <Box
      position='relative'
      height='300px'
      overflow='hidden'
      className='keen-slider__slide'
      {...props}
    >
      <Stack padding={[3, null, 4, 6]} spacing={[3, null, 4, 6]} height='100%'>
        <Text color='white' fontWeight='400'>
          {desc}
        </Text>
        <Heading fontWeight='bold' fontSize='18px' color='white'>
          {name}
        </Heading>
        <Text fontWeight='bold' fontSize='12px' color='white'>
          {company}
        </Text>
      </Stack>
    </Box>
  );
};
export default FeedBackCard;
