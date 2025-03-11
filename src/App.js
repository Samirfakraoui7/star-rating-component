import StarRating from "./StarRating";

function App() {
  return (
    <div className='App'>
      <StarRating
        size='32'
        maxRating={8}
        messages={["terrible", "okey", "good", "Amazing"]}
      />
    </div>
  );
}

export default App;
