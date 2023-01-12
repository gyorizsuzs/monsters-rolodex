/* import { Component } from 'react'; */
import { ChangeEvent } from 'react';

import './search-box.styles.css';

// an example in case of using interfaces
/* interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
} */

// demonstrating difference between interfaces (OOP style - better for smaller projects) and types (FP style - we can use unions on them to be more accurate in extensive projects)
/* interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

type CanadianAdress = {
  street: string;
  province: string;
};

type USAdress = {
  street: string;
  state: string;
};

type ItalianAdress = {
  street: string;
  region: string;
};

type Adress = CanadianAdress | USAdress | ItalianAdress;

const Adress: Adress = {
  street: 'nlvsdf',
  region: 'jbsdfiv',
}; */

// you can either use ChangeEventHandler to specify the return value of <T> element or use ChangeEvent where you type out the event where you return the element (the second is better, cleaner)
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: /* (a: string) => void */ (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
