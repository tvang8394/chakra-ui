import { Text, Stack, Input, Button, FormControl } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchsymbol } from "../../store/actions/symbolAction";
import { useState } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const { symbol } = useSelector((state) => state.symbol);
  const [newSymbol, setNewSymbol] = useState("");
  const handleSubmit = (e) => {
    if (newSymbol !== null) {
      dispatch(fetchsymbol(newSymbol.toUpperCase()));
    } 
  };
  return (
    <Stack
      isInline
      spacing={3}
      fontSize="25px"
      paddingY="10px"
      justifyContent="center"
    >
      <Text>Ticker: {symbol} </Text>
      <FormControl display="felx">
        <Input
          size="md"
          maxW="100px"
          placeholder="Ticker"
          value={newSymbol}
          onChange={(e) => {
            setNewSymbol(e.target.value);
          }}
          roundedRight="0"
          focusBorderColor="Teal"
        />
        <Button
          variantColor="teal"
          onClickCapture={handleSubmit}
          roundedLeft="0"
        >
          Search
        </Button>
      </FormControl>
    </Stack>
  );
}
