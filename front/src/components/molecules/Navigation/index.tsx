import NavigationLink from '@/components/atoms/NavigationLink';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const Navigation: React.FC = () => {
  return (
    <>
      <StyledNavigation>
        <NavigationLink linkPath="/" title="Home" />
        <NavigationLink linkPath="/todo/new" title="Add Todo" />
      </StyledNavigation>
    </>
  );
};

export default Navigation;
