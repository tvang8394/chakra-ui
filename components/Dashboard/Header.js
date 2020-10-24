import { Text, Stack, Input, Button } from '@chakra-ui/core';

export default function Header() {
    return(
        <Stack isInline spacing={3} fontSize='25px' paddingY='10px' justifyContent='center'>
            <Text>Symbol: AMZN </Text>
            <Input size='md' maxW='100px' placeholder='Ticker'/>
            <Button variantColor='teal'>Search</Button>
        </Stack>
    )
}