import { Text, HStack } from "@chakra-ui/react";

export default function PlayerBar(props) {
  return (
    <>
      <HStack justifyContent="space-between" borderBottom="1px dashed">
        <Text>Username</Text>
        <Text>WPM</Text>
      </HStack>
    </>
  );
}
