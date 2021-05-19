function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  const liststyle = {
    border: "1px solid white",
    border_collapse: "collapse",
    background: "gray"
  }

  return (
    <div>
      <div>
      <h1>CityList</h1>
      </div>
      <ul>
        {cities.map((item, index) => {
          const searchLink = "https://www.google.com/search?q=" + item;
          return <li style = {liststyle} key={index}><a href={searchLink} target="_blank">{item}</a></li>
        })}
      </ul>
    </div>
  );
}

export default CityList;
