import { Box, Tabs, TabPanels, TabPanel, TabList, Tab } from "@chakra-ui/core";
import CreatePlay from './CreatePlays';

export default function RightTab() {
  return (
    <Tabs>
      <TabList>
        <Tab>Symbol 1</Tab>
        <Tab>Symbol 2</Tab>
        <Tab>Symbol 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}