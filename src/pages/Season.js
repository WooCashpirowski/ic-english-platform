import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
import seasonsData from "../seasonsData";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Grid = styled.section`
  display: flex;
`;

const Season = () => {
  const { id } = useParams();
  const season = seasonsData.filter((season) => season.season === id);
  const { episodes } = season[0];

  const groups = episodes.map((group) => {
    return group.group;
  });
  // console.log(groups);
  return (
    <>
      <TopBar title={`Season ${id}`} />
      <BackBtn goto="/seasons" />
      <Grid>
        {groups.map((group) =>
          group.map((item) => {
            return <h3 key={item.id}>{item.title}</h3>;
          })
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default Season;
