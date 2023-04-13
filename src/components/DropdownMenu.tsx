import { Dispatch, FC, SetStateAction } from 'react';
import DropdownItem from './DropdownItem';

interface Props {
  setState: Dispatch<SetStateAction<string | null>>;
}

const DropdownMenu: FC<Props> = ({ setState }) => {
  const resetTheme = () => {
    setState(null);
  };

  return (
    <div className='dropdown-menu'>
      <DropdownItem
        text='Primary Theme'
        onClick={() => setState('primary')}
      />
      <DropdownItem
        text='Danger Theme'
        onClick={() => setState('danger')}
      />
      <DropdownItem
        text='Success Theme'
        onClick={() => setState('success')}
      />

      <div className='dropdown-divider' />
      <DropdownItem
        text=' Default Theme'
        onClick={() => resetTheme()}
      />
    </div>
  );
};

export default DropdownMenu;
