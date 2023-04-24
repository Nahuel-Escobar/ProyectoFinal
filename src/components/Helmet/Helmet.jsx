function Helmet(props) {
  document.title = "NahuMarket - " + props.title;

  return <div>{props.children}</div>;
}

export default Helmet;
