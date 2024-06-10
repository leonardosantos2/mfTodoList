import styled from 'styled-components';

export const TodoInputContainer = styled.div`
  display: flex;

  button {
    margin-left: 8px;
  }
`;

export const StyledListContainer = styled.div`
  margin-top: 16px;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const StyledTask = styled.li<{ $done: boolean }>`
  display: flex;
  margin: 8px 0 0;
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
  cursor: pointer;

  input[type='checkbox'] {
    margin-right: 10px;
  }

  p {
    margin: 0;
  }
`;
