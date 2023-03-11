import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Text, Input, VStack, Button } from "@chakra-ui/react";

export default function JoinForm() {
  const [username, setUsername] = useState("");
  const [roomid, setRoomid] = useState("");

  const handleClick = () => {
    console.log(username, roomid);
  };

  return (
    <VStack shadow="dark-lg" borderRadius="xl" p="8">
      <Text fontWeight="bold" alignSelf="flex-start">
        Paste Invitation ROOM ID
      </Text>
      <Input
        type="text"
        placeholder="Enter ROOM ID"
        bgColor="white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter your Username"
        bgColor="white"
        value={roomid}
        onChange={(e) => setRoomid(e.target.value)}
      />
      <Button colorScheme="blue" alignSelf="flex-end" onClick={handleClick}>
        Join
      </Button>
      <Text>
        Don't have an invite? Create a{" "}
        <NavLink>
          <u>new room!</u>
        </NavLink>
      </Text>
    </VStack>
  );
}
