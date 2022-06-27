import './DescriptionPage.scss';

const DescriptionPage = ({
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
        <button className='description__back-button' onClick={toggleDetails}>
          Back
        </button>
      </div>
    </section>
  );
};

export default DescriptionPage;
