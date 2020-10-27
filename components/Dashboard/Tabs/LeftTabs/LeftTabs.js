import { Tabs, TabPanels, TabPanel, TabList, Tab } from "@chakra-ui/core";
import Plays from './Plays';
import CreatePlay from './CreatePlays';
import { useDispatch, useSelector } from "react-redux";
import { fetchlasttrade } from "../../../../store/actions/lastTradeAction";
import { loadFirebase } from "../../Firebase/Firebase";
import { useState, useEffect } from 'react';

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

export default function LeftTab() {

  const levels = useLevels();
  const dispatch = useDispatch();

  useEffect(() => {
    levels.map((level) => {
      dispatch(fetchlasttrade(level.Symbol));
    });
  },[]);




  
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
