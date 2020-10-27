import { loadFirebase } from "../../Firebase/Firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  List,
  ListItem,
  ListIcon,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";
import {
  ImTarget,
  ImCoinDollar,
  ImStop,
  ImBin,
  ImPencil,
  ImPen,
} from "react-icons/im";
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
const handleUpdate = (
  id,
  symbol,
  targetLevel,
  profitLevel,
  stopLevel,
  onClose
) => {
  let firebase = loadFirebase();
  firebase.firestore().collection("Levels").doc(id).set({
    Symbol: symbol,
    TargetLevel: targetLevel,
    ProfitLevel: profitLevel,
    StopLevel: stopLevel,
  });
  onClose();
};

const handleDelete = (id) => {
  let firebase = loadFirebase();
  firebase
    .firestore()
    .collection("Levels")
    .doc(id)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};

function myLevels(
  targetLevel,
  profitLevel,
  stopLevel,
  id,
  symbol,
  onOpen,
  lastTrade,
  levels
) {
  // const lastTrades = lastTrade.map((trade) => {
  //   for (let i = 0; i < lastTrade.length; i++) {
  //     if (lastTrade[i].symbol === symbol) {
  //       return lastTrade[i].price;
  //     }
  //   }
  // });

  let lastTrades = "";

  for (let i = 0; i < levels.length; i++) {
    if (lastTrade.length > 0) {
      if (lastTrade[i].symbol === symbol) {
        lastTrades = lastTrade[i].price;
      }
    }
  }
  return (
    <>
      <List
        border="1px"
        display="flex"
        listStyleType="none"
        key={id}
        margin="10px"
        borderRadius="10px"
      >
        <ListItem margin="5px" fontSize="18px" padding={2} alignSelf="center">
          {symbol}
          <br></br>
          {lastTrades}
        </ListItem>
        <ListItem margin="5px" fontSize="16px" padding={2} alignSelf="center">
          <ListIcon icon={ImTarget} />
          Target Level: {targetLevel}
        </ListItem>
        <ListItem margin="5px" fontSize="16px" padding={2} alignSelf="center">
          <ListIcon icon={ImCoinDollar} color="Green" />
          Profit Level: {profitLevel}
        </ListItem>
        <ListItem margin="5px" fontSize="16px" padding={2} alignSelf="center">
          <ListIcon icon={ImStop} color="Red" />
          Stop Level: {stopLevel}
        </ListItem>
        <ListItem margin="5px" fontSize="16px" alignSelf="center">
          <IconButton icon={ImPencil} onClick={onOpen} />
        </ListItem>
        <ListItem margin="5px" fontSize="16px" alignSelf="center">
          <IconButton icon={ImBin} onClick={() => handleDelete(id)} />
        </ListItem>
      </List>
    </>
  );
}

export default function Plays() {
  const levels = useLevels();
  const { lastTrade } = useSelector((state) => state.lastTrade);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [targetLevel, setTargetLevel] = useState(null);
  const [stopLevel, setStopLevel] = useState(null);
  const [profitLevel, setProfitLevel] = useState(null);
  const [shares, setShares] = useState(null);

  return (
    <>
      {levels.map((level) => {
        return (
          <>
            {myLevels(
              level.TargetLevel,
              level.ProfitLevel,
              level.StopLevel,
              level.id,
              level.Symbol,
              onOpen,
              lastTrade,
              levels
            )}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Levels</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <>
                    <Stack isInline spacing={3} paddingY={3}>
                      <Box>
                        <Text marginX={2}>Target Level</Text>
                        <NumberInput
                          defaultValue={0}
                          precision={2}
                          step={0.01}
                          value={targetLevel}
                        >
                          <NumberInputField
                            onChange={(e) => {
                              setTargetLevel(e.target.value);
                            }}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text marginX={2}>Profit Level</Text>
                        <NumberInput
                          defaultValue={0}
                          precision={2}
                          step={0.01}
                          value={profitLevel}
                        >
                          <NumberInputField
                            onChange={(e) => {
                              setProfitLevel(e.target.value);
                            }}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Box>
                      <Box>
                        <Text marginX={2}>Stop Level</Text>
                        <NumberInput
                          defaultValue={0}
                          precision={2}
                          step={0.01}
                          value={stopLevel}
                        >
                          <NumberInputField
                            onChange={(e) => {
                              setStopLevel(e.target.value);
                            }}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text marginX={2}>Shares</Text>
                        <NumberInput defaultValue={0} step={1} value={shares}>
                          <NumberInputField
                            onChange={(e) => {
                              setShares(e.target.value);
                            }}
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Box>
                    </Stack>
                  </>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variantColor="teal"
                    onClick={() =>
                      handleUpdate(
                        level.id,
                        level.Symbol,
                        targetLevel,
                        profitLevel,
                        stopLevel,
                        onClose
                      )
                    }
                  >
                    Save
                  </Button>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        );
      })}
    </>
  );
}
