import {
  Stack,
  Box,
  Button,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";
import { useState } from "react";
import { loadFirebase } from "../../Firebase/Firebase";
import { useSelector } from "react-redux";

export default function CreatePlay() {
  const { symbol } = useSelector((state) => state.symbol);
  const [targetLevel, setTargetLevel] = useState(null);
  const [stopLevel, setStopLevel] = useState(null);
  const [profitLevel, setProfitLevel] = useState(null);
  const [shares, setShares] = useState(null);

  const handleSubmit = async () => {
    let firebase = await loadFirebase();
    firebase.firestore().collection("Levels").add({
      Symbol: symbol,
      TargetLevel: targetLevel,
      ProfitLevel: profitLevel,
      StopLevel: stopLevel,
      Shares: shares,
    });
  };
  
  return (
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
      <Button variantColor="teal" onClick={handleSubmit}>
        Create Play
      </Button>
    </>
  );
}
