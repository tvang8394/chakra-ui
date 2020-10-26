import { Tabs, TabPanels, TabPanel, TabList, Tab } from "@chakra-ui/core";
import CreatePlay from './CreatePlays';
import Plays from './Plays';

export default function LeftTab() {
  return (
    <Tabs>
      <TabList>
        <Tab>Create Play</Tab>
        <Tab>Plays</Tab>
        <Tab>Positions</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CreatePlay />
        </TabPanel>
        <TabPanel>
          <Plays />
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
