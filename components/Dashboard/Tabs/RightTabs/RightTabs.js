import { Box, Tabs, TabPanels, TabPanel, TabList, Tab } from "@chakra-ui/core";
import { loadFirebase } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

function useLevels() {
  const [levels, setLevels] = useState([]);
  // const { symbol } = useSelector((state) => state.symbol);
  useEffect(() => {
    let firebase = loadFirebase();
    firebase
      .firestore()
      .collection("Levels")
      .onSnapshot((snapshot) => {
        const newLevels = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLevels(newLevels);
      });
  }, []);

  return levels;
}

function showLevel(level) {
  
}
export default function RightTab() {
  const levels = useLevels();
  const { currentPrice } = useSelector((state) => state.currentPrice)


  return (
    <Tabs>
    {console.log(currentPrice)}
      <TabList>
        <Tab>Symbol 1</Tab>
        <Tab>Symbol 2</Tab>
        <Tab>Symbol 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
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
