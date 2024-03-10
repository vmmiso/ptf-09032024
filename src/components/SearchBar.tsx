import styled from 'styled-components';

const SearchForm = styled.form`
  width: 100%;
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const SearchInput = styled.input`
  height: 19px;
  font-size: 16px;
  border: none;
  text-transform: uppercase;

  position: absolute;
  left: 28px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

type SearchBarProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

const SearchBar = ({ handleSubmit }: SearchBarProps) => {
  return (
    <SearchForm role='search' onSubmit={handleSubmit}>
      <SearchInput
        id='searchBar'
        type='text'
        name='searchBar'
        placeholder='Search a character...'
      />
      <SearchButton type='submit' aria-label='submit search'>
        <svg xmlns='http://www.w3.org/2000/svg' width='13' height='13' fill='#000'>
          <path d='M11.906 10.99c.117.116.117.304 0 .398l-.539.539c-.094.117-.281.117-.398 0L8.133 9.09a.378.378 0 0 1-.07-.211v-.305a4.935 4.935 0 0 1-3.188 1.172A4.871 4.871 0 0 1 0 4.872C0 2.2 2.18-.003 4.875-.003 7.547-.003 9.75 2.2 9.75 4.872A4.908 4.908 0 0 1 8.555 8.06h.304c.07 0 .141.046.211.093l2.836 2.836ZM4.875 8.621a3.746 3.746 0 0 0 3.75-3.75 3.761 3.761 0 0 0-3.75-3.75 3.746 3.746 0 0 0-3.75 3.75 3.731 3.731 0 0 0 3.75 3.75Z' />
        </svg>
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
