import { useNavigate } from "react-router-dom";
import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";

export const ErrorComponent = () => {
  const navigate = useNavigate();

  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justify={"center"}
      gap={4}
    >
      <HStack>
        <Heading>Oops!</Heading>
        <Text fontSize={14} fontWeight={400}>
          Something went wrong
        </Text>
      </HStack>

      <Button onClick={() => navigate(-1)} variant={"outline"}>
        Take Me Back
      </Button>
    </Stack>
  );
};
