import { loadFirebase } from "../Firebase/Firebase";
import { useState, useEffect } from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/core";
import { ImTarget, ImCoinDollar, ImStop, ImPointRight } from "react-icons/im";
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

function myLevels(targetLevel, profitLevel, stopLevel, id, symbol) {
  return (
    <List
      border="1px"
      display="flex"
      listStyleType="none"
      key={id}
      margin="10px"
      borderRadius='10px'
    >
    <ListItem margin="10px" fontSize="18px" padding={2}>
        {symbol}
      </ListItem>
      <ListItem margin="10px" fontSize="16px" padding={2}>
        <ListIcon icon={ImTarget} />
        Target Level: {targetLevel}
      </ListItem>
      <ListItem margin="10px" fontSize="16px" padding={2}>
        <ListIcon icon={ImCoinDollar} color="Green" />
        Profit Level: {profitLevel}
      </ListItem>
      <ListItem margin="10px" fontSize="16px" padding={2}>
        <ListIcon icon={ImStop} color="Red" />
        Stop Level: {stopLevel}
      </ListItem>
    </List>
  );
}

export default function Plays() {
  const levels = useLevels();
  return (
    <>
      {levels.map((level) => {
        return myLevels(
          level.TargetLevel,
          level.ProfitLevel,
          level.StopLevel,
          level.id,
          level.Symbol
        );
      })}
    </>
  );
}
