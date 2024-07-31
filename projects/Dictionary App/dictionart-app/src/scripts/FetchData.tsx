import { useEffect, useState } from "react";

type FetchDataPropsType = {
  word: string;
  handleWordData: Function;
};
const FetchData = (props: FetchDataPropsType) => {
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);

  //console.log("inside fetch");
  //console.log(props.word);
  //console.log("https://api.dictionaryapi.dev/api/v2/entries/en/" + props.word);
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + props.word)
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching is not successful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setWordData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [props.word]);

  //console.log("WordData: ");
  props.handleWordData(wordData);
  //console.log(error);
  return <div></div>;
};

export default FetchData;
