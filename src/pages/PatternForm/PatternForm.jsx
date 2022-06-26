import './PatternForm.scss';
import { useState } from 'react';

const PatternForm = () => {
  const [pattern, setPattern] = useState({
    patternName: '',
    patternType: '',
    patternDifficulty: '',
    woolType: '',
    needleSize: '',
    patternDescription: '',
    pattern: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/pattern',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pattern),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <div className='form-page'>
      <div className='form'>
        <h2 className='form__heading'>Add a new pattern</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='pattern name'
            onInput={(e) =>
              setPattern({ ...pattern, patternName: e.target.value })
            }
          />
          <select className='form__dropdown'>
            <option>Pattern type</option>
            <option
              value='Knitting'
              onSelect={(e) =>
                setPattern({ ...pattern, patternType: e.target.value })
              }
            >
              Knitting
            </option>
            <option
              value='Crochet'
              onSelect={(e) =>
                setPattern({ ...pattern, patternType: e.target.value })
              }
            >
              Crochet
            </option>
          </select>
          <select className='form__dropdown'>
            <option>Difficulty</option>
            <option
              value='Beginner'
              onSelect={(e) =>
                setPattern({ ...pattern, patternDifficulty: e.target.value })
              }
            >
              Beginner
            </option>
            <option
              value='Intermediate'
              onSelect={(e) =>
                setPattern({ ...pattern, patternDifficulty: e.target.value })
              }
            >
              Intermediate
            </option>
            <option
              value='Expert'
              onSelect={(e) =>
                setPattern({ ...pattern, patternDifficulty: e.target.value })
              }
            >
              Expert
            </option>
          </select>

          <input
            type='text'
            placeholder='wool type'
            onInput={(e) =>
              setPattern({ ...pattern, woolType: e.target.value })
            }
          />
          <input
            type='text'
            placeholder='needle size'
            onInput={(e) =>
              setPattern({ ...pattern, needleSize: e.target.value })
            }
          />
          <input
            type='text'
            placeholder='pattern description'
            onInput={(e) =>
              setPattern({ ...pattern, patternDescription: e.target.value })
            }
          />
          <textarea
            type='text'
            placeholder='pattern'
            onInput={(e) => setPattern({ ...pattern, pattern: e.target.value })}
          />
          <button type='submit' className='form__form-button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatternForm;
