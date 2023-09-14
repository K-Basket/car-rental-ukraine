import { ButtonSt } from './Btn.styled';

export const Btn = ({ children, $width, onClick }) => {
  return (
    <div>
      <ButtonSt $width={$width} onClick={onClick}>
        {children}
      </ButtonSt>
    </div>
  );
};
