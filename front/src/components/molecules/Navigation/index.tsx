import NavigationLink from '@/components/atoms/NavigationLink';
import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <>
      <div className="button-container">
        <NavigationLink linkPath="/" title="Home" />
        <NavigationLink linkPath="/todo/new" title="Add Todo" />
      </div>
    </>
  );
};

export default Navigation;
