
import React from "react";

import {
  FormControl,
  Input,
} from "@chakra-ui/react";


interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({handleChange} : SearchProps) => {

  return (
    <FormControl mb={5}>
        <Input
          placeholder="Search for recipe"
          size="lg"
          variant="filled"
          onChange={handleChange}
        />
      </FormControl>
  );
};

export default Search;
