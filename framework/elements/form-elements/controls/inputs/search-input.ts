import Input, { InputProps } from "./input";

export interface SearchInputProps extends InputProps {}

export default class SearchInput extends Input {
  constructor(
    searchInput: SearchInputProps = {},
  ) {
    super('search', searchInput);
  }
}