import styled from 'styled-components'

const PrimaryButton = styled.button`
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.75rem;
  margin: 0.5rem;
  font-weight: 600;
  border-width: 0px;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};

  :hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`

export default PrimaryButton
