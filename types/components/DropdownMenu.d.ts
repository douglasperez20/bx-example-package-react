import { Dispatch, FC, SetStateAction } from 'react';
interface Props {
    setState: Dispatch<SetStateAction<string | null>>;
}
declare const DropdownMenu: FC<Props>;
export default DropdownMenu;
