import { FormEvent, useState } from "react";
import FetchData from "./scripts/FetchData";

const App = () => {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");
  const [wordData, setWordData] = useState([]);
  const [fetchDataEnabled, setFetchDataEnabled] = useState(false);

  // const handleChange = (e) => {
  //     set
  // }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWord2(word);
    setFetchDataEnabled(true);
  };
  const handleWordData = (data: any) => {
    setWordData(data);
    console.log(data);
    //console.log(data);
    //data.map((entry: any, index: any) => console.log(entry.meanings));
  };

  let audioPlayed = false;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search for any word..."
        />
      </form>

      {fetchDataEnabled && (
        <FetchData word={word2} handleWordData={handleWordData} />
      )}

      <div>
        {wordData &&
          wordData.map((entry: any, index: any) => (
            <div key={index}>
              <h1>{entry.word}</h1>
              <p>{entry.phonetic}</p>

              {entry.phonetics.map((phonetic: any, index: any) => {
                if (phonetic.audio && !audioPlayed) {
                  audioPlayed = true;
                  return (
                    <div key={index}>
                      <audio controls>
                        <source src={phonetic.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <p>Hello!</p>
                    </div>
                  );
                }
              })}

              {entry.meanings.map((meaning: any, index: any) => (
                <div key={index}>
                  <h2>{meaning.partOfSpeech}</h2>
                  <p>Meaning:</p>
                  <ul>
                    {meaning.definitions.map((definition: any, index: any) => (
                      <li key={index}>
                        {definition.definition}
                        {definition.example && (
                          <p>Example: {definition.example}</p>
                        )}
                      </li>
                    ))}
                  </ul>

                  {meaning.synonyms.length > 0 && (
                    <p>synonyms: {meaning.synonyms}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
