import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Card
        name={"Louay Moussa"}
        title={"CS Chair"}
        desc={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut sequi qui eveniet ducimus veniam neque provident commodi aperiam nostrum rem, ipsum aliquid incidunt delectus."
        }
      />
      <Card
        name={"xqsdf"}
        title={"qsg"}
        desc={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut sequi qui eveniet ducimus veniam neque provident commodi aperiam nostrum rem, ipsum aliquid incidunt delectus."
        }
      />
    </div>
  );
}

export default App;
