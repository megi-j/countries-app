import FilterSection from "./FilterSection";
import MainSection from "./MainSection";

export default function Home(props) {
  return (
    <>
      <FilterSection
        data={props.data}
        fetched={props.fetched}
        handleChange={props.handleChange}
        handleInput={props.handleInput}
        isClickedMode={props.isClickedMode}
        change={props.change}
      />
      <MainSection
        data={props.data}
        fetched={props.fetched}
        filteredData={props.filteredData}
        isClickedMode={props.isClickedMode}
      />
    </>
  );
}
