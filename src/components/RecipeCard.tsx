"use client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  ListItem,
  OrderedList,
  Tag,
  SimpleGrid,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";

export interface RecipeData {
  key: number;
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
interface RecipeProps {
  recipe: RecipeData;
}

const RecipeCard: React.FC<RecipeProps> = ({ recipe }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    key,
    id,
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    caloriesPerServing,
    tags,
    userId,
    image,
    rating,
    reviewCount,
    mealType,
  } = recipe;
  return (
    <Card maxW="lg">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="lg">{name}</Heading>
          <Text color="blue.600" fontSize="lg">
            Ingredients required :
          </Text>
          <OrderedList>
            {ingredients.map((ingredient: string, index: number) => (
              <ListItem key={index}>{ingredient}</ListItem>
            ))}
          </OrderedList>

          <Text size="md" mt={5}>Tags</Text>

          <SimpleGrid columns={2} spacing={10} >
            {tags.map((tag: string, index: number) => (
              <Tag key={index} size="lg" justifyContent="center">
                {tag}
              </Tag>
            ))}
          </SimpleGrid>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={onOpen}>
            Instructions
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>How to cook {name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <OrderedList>
                  {instructions.map((instruction: string, index: number) => (
                    <ListItem key={index}>{instruction}</ListItem>
                  ))}
                </OrderedList>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
