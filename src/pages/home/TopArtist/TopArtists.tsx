import React from "react";
import VisualArt from "./VisualArt";
import styled from "styled-components";
import { HomeTitles, Title } from "../../../components/StyledComponents/Text";
import AudioArt from "./AudioArt";

const TopArtistContainer = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  flex-direction: column;
  margin: 8vh 10vw 6vh 10vw;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 38px 0px 0px 0px;
  }
`;
const PrevArrow = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    margin-left:3rem;
  }
`;
export default function TopArtists() {
  return (
    <TopArtistContainer>
      <PrevArrow>
        <HomeTitles> Top artists</HomeTitles>
      </PrevArrow>
      <VisualArt />
      <AudioArt />
    </TopArtistContainer>
  );
}
