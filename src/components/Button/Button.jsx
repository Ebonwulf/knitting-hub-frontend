import './Button.scss';

const Button = ({ onClickType, buttonText }) => {
  return (
    <div className='button' onClick={onClickType}>
      {buttonText}
    </div>
  );
};

export default Button;
