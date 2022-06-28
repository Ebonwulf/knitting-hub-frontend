import './UpdatePattern.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const UpdatePattern = ({
  patternId,
  patternName,
  patternDescription,
  patternDifficulty,
  woolType,
  patternType,
  needleSize,
  pattern,
  toggleUpdateBox,
}) => {
  const [patternUpdate, setPatternUpdate] = useState({
    patternName: { patternName },
    patternType: { patternType },
    patternDifficulty: { patternDifficulty },
    woolType: { woolType },
    needleSize: { needleSize },
    patternDescription: { patternDescription },
    pattern: { pattern },
  });

  const UpdatePattern = (e) => {
    e.preventDefault();
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/pattern/' +
        patternId,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patternUpdate),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log('updated');
  };

  return (
    <div className='update-form'>
      <div className='form'>
        <form onSubmit={UpdatePattern}>
          <input
            type='text'
            placeholder='pattern name'
            defaultValue={patternName}
            onInput={(e) =>
              setPatternUpdate({
                ...patternUpdate,
                patternName: e.target.value,
              })
            }
          />
          <select className='form__dropdown'>
            <option>Pattern type</option>
            <option
              value='Knitting'
              defaultValue={patternType}
              onSelect={(e) =>
                setPatternUpdate({
                  ...patternUpdate,
                  patternType: e.target.value,
                })
              }
            >
              Knitting
            </option>
            <option
              value='Crochet'
              defaultValue={patternType}
              onSelect={(e) =>
                setPatternUpdate({
                  ...patternUpdate,
                  patternType: e.target.value,
                })
              }
            >
              Crochet
            </option>
          </select>
          <select className='form__dropdown'>
            <option>Difficulty</option>
            <option
              value='Beginner'
              defaultValue={patternDifficulty}
              onSelect={(e) =>
                setPatternUpdate({
                  ...patternUpdate,
                  patternDifficulty: e.target.value,
                })
              }
            >
              Beginner
            </option>
            <option
              value='Intermediate'
              defaultValue={patternDifficulty}
              onSelect={(e) =>
                setPatternUpdate({
                  ...patternUpdate,
                  patternDifficulty: e.target.value,
                })
              }
            >
              Intermediate
            </option>
            <option
              value='Expert'
              defaultValue={patternDifficulty}
              onSelect={(e) =>
                setPatternUpdate({
                  ...patternUpdate,
                  patternDifficulty: e.target.value,
                })
              }
            >
              Expert
            </option>
          </select>

          <input
            type='text'
            placeholder='wool type'
            defaultValue={woolType}
            onInput={(e) =>
              setPatternUpdate({ ...patternUpdate, woolType: e.target.value })
            }
          />
          <input
            type='text'
            placeholder='needle size'
            defaultValue={needleSize}
            onInput={(e) =>
              setPatternUpdate({ ...patternUpdate, needleSize: e.target.value })
            }
          />
          <input
            type='text'
            placeholder='pattern description'
            defaultValue={patternDescription}
            onInput={(e) =>
              setPatternUpdate({
                ...patternUpdate,
                patternDescription: e.target.value,
              })
            }
          />
          <textarea
            type='text'
            placeholder='pattern'
            defaultValue={pattern}
            onInput={(e) =>
              setPatternUpdate({ ...patternUpdate, pattern: e.target.value })
            }
          />
          <div className='update-form__btns-div'>
            <Button onClickType={toggleUpdateBox} buttonText='Back' />
            <button type='submit' className='update-form__button'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePattern;
