import { Box, SimpleGrid } from "@chakra-ui/core";
import LeftTab from './LeftTabs/LeftTabs';
import RightTab from './RightTabs/RightTabs';

export default function MainTabs() {
  return (
    <Box bg="#ECF0F1" padding='15px' height='100%'>
      <SimpleGrid columns={2}>
        <LeftTab />
        <RightTab />
      </SimpleGrid>
    </Box>
  );
}
