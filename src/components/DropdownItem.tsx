import { FC } from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const DropdownItem: FC<Props> = ({ text, onClick }) => {
  return (
    <a
      className='dropdown-item'
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default DropdownItem;
