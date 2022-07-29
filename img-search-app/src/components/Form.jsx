const Form = ({setWord, getUnsplashData}) => {
  return (
    <form>
      <input type="text" name="keyword" placeholder="e.g cat" onChange={event => setWord(event.target.value)}/>
      <button type="submit" onClick={getUnsplashData}>Search</button>
    </form>
  );
};

export default Form;