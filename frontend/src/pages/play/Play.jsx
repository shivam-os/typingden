import {
  HStack,
  VStack,
  Heading,
  Button,
  Container,
  Input,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import randomWords from "random-words";
import PlayerBar from "./PlayerBar";

export default function Play() {
  const [generatedWords, setGeneratedWords] = useState([]);
  const [enteredWord, setEnteredWord] = useState("");
  const [wordPointer, setWordPointer] = useState(0);

  useEffect(() => {
    setGeneratedWords(randomWords(50));
  }, []);

  const checkWordMatch = () => {
    const currentWord = generatedWords[wordPointer];
    if (enteredWord.length !== currentWord.length) {
      return false;
    }

    for (let i = 0; i <= enteredWord.length; i++) {
      if (enteredWord[i] !== currentWord[i]) {
        return false;
      }
    }
    return true;
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      if (checkWordMatch()) {
        console.log("Right word");
        setEnteredWord("");
        setWordPointer((wordPointer) => wordPointer + 1);
      } else {
        console.log("Wrong word");
      }
    }
  };

  return (
    <HStack w="100vw" h="100%" spacing="20" p="5">
      <VStack
        w="20%"
        h="100%"
        justifyContent="space-between"
        borderRight="1px solid black"
      >
        <Box
          bgColor="blue.400"
          border="2px"
          borderColor="blue.700"
          borderRadius="md"
          py="3"
          px="10"
          color="white"
        >
          <Text textAlign="center">Timer</Text>
          <Text fontSize="4xl">2:00</Text>
        </Box>
        <Heading fontSize="xl"> You are connected</Heading>
        <VStack spacing="5" alignItems="stretch">
          <Button bgColor="white">Copy ROOM ID</Button>
          <Button colorScheme="red">Leave</Button>
        </VStack>
      </VStack>
      <VStack h="100%" w="60%" justifyContent="space-between">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          w="100%"
        >
          <PlayerBar />
        </VStack>
        <Container bgColor="White" fontSize="xl" p="5" borderRadius="xl">
          {generatedWords.map((item, id) => {
            if (id < wordPointer) {
              return (
                <span className="correct" key={id}>
                  {item}{" "}
                </span>
              );
            } else if (wordPointer === id) {
              return (
                <span className="current" key={id}>
                  {item}{" "}
                </span>
              );
            } else {
              return item + " ";
            }
          })}
        </Container>
        <Input
          type="text"
          placeholder="Start typing here..."
          className="white"
          fontSize="xl"
          p="5"
          borderRadius="xl"
          value={enteredWord}
          onChange={(e) => setEnteredWord(e.target.value.trim())}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </VStack>
    </HStack>
  );
}
