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
        <button className='description__back-button' onClick={toggleDetails}>
          Back
        </button>
      </div>
    </section>
  );
};

export default FullDescription;
