import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      alignItems="flex-start"
      color="black"
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} />
      <Heading as="h3" size="md" alignContent="start" paddingX={4} paddingTop={2}>
        {title}
      </Heading>
      <Text color="grey" paddingX={4} paddingY={2}>{description}</Text>
      <HStack justifyContent="flex-end" paddingX={4} paddingBottom={4}>
        <Text>See more </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
  
  
};

export default Card;
