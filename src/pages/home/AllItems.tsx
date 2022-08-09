import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeTitles, HomeTitleWrapper, Title } from "../../components/StyledComponents/Text";
import AllItemCard from "../../components/NftCards/Cards/AllItemCard";
import BigItemCard from "../../components/NftCards/Cards/BigItemCard";
import { WindowSize } from "../../hooks/useWindowsize";
import { PrevNextButton } from "../../components/StyledComponents/Button";

const NftContainer = styled.div`
  text-align: center;
  margin: 66px 150px 60px 150px;

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
    margin: 100px 0rem 0px 3rem;
    width: 100%;

    .slick-prev {
      margin-left: 82%;
      z-index: 1;
      margin-top: 3%;
      top: 0;
      bottom: 0;
    }
    .slick-next {
      margin-top: 3%;
      margin-right: 14%;
      top: 0;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Slidebox = styled.div`
  text-color: white;
`;

export default function AllItems() {
  const isMobilee = WindowSize();

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
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const nft = [
    { name: "/images/Nft/A1.svg" },
    { name: "/images/Nft/A2.svg" },
    { name: "/images/Nft/A3.svg" },
    { name: "/images/Nft/A4.svg" },
    { name: "/images/Nft/A5.svg" },
    { name: "/images/Nft/A6.svg" },
    { name: "/images/Nft/A7.svg" },
    { name: "/images/Nft/A8.svg" },
  ];
  
  return !isMobilee ? (
    <NftContainer>
      <HomeTitles mr="10px"> All items</HomeTitles>

      <Flex>
        <BigItemCard />
        {nft.map((nfts) => (
          <Slidebox>
            <AllItemCard nft={nfts.name} />
          </Slidebox>
        ))}
      </Flex>
    </NftContainer>
  ) : (
    <NftContainer>
      <HomeTitleWrapper>
        <HomeTitles> All items</HomeTitles>
      </HomeTitleWrapper>

      <Slider {...settings}>
      {nft.map((nfts) => (
            <AllItemCard nft={nfts.name} />
        ))}
      </Slider>
    </NftContainer>
  );
}
