import Button from '../Button/Button';
import './FullDescription.scss';

const FullDescription = ({
  toggleDetails,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookBlurb,
}) => {
  return (
    <section className='description'>
      <div className='description__div'>
        <h2 className='description__title'>{bookTitle}</h2>
        <h3>{bookAuthor}</h3>
        <h4>{bookDescription}</h4>
        <p>{bookBlurb}</p>
        <Button onClickType={toggleDetails} buttonText='Back' />
      </div>
    </section>
  );
};

export default FullDescription;
