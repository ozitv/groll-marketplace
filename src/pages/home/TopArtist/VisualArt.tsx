import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopArtistCard from "../../../components/NftCards/Cards/TopArtistCard";
import {

  Text32,
  Text14,
} from "../../../components/StyledComponents/Text";
import { PrevNextButton } from "../../../components/StyledComponents/Button";

const NftContainer = styled.div`
  display: block;
  text-align: left;
  align-items: flex-start;

  .slick-prev:before {
    display: none;
    position: absolute;
    color: #777e90;
    font-size: 30px;
  }
  .slick-next:before {
    color: #777e90;
    display: none;
    position: absolute;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 60px 0px;
    padding:0px 32px;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: 6%;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: 6%;
      margin-right: 14%;
      top: 0;
    }
  }
`;


 const Flex = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: ${(props) => props.dir};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0px;
  }
`;

export default function VisualArt() {
  const settings = {
    infinite: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: <PrevNextButton img="/images/Staticlogos/PrevArrow.svg" />,
    nextArrow: <PrevNextButton img="/images/Staticlogos/Arrow.svg" />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  const PrevArrow = styled.div`
    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: absolute;
      top:60px;
    }
  `;

  const icons = [
    { name: "/images/Nft/1.svg" },
    { name: "/images/Nft/2.svg" },
    { name: "/images/Nft/3.svg" },
    { name: "/images/Nft/4.svg" },
    { name: "/images/Nft/5.svg" },
  ];
  return (
    <NftContainer>
      <PrevArrow>
        <Flex dir="column">
          <Text32>Visual Art</Text32>
          <Text14 color={({ theme }) => theme.filterText} letterSpacing="-0.01em">Some visual art from the gallery</Text14>
        </Flex>
      </PrevArrow>

      <Slider {...settings}>
      {icons.map((icon) => (
            <TopArtistCard nft={icon.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
