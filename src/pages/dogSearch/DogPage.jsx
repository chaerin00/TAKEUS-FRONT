import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  DogCardContainer,
  PaginationNav,
  DogSearchNavigation,
  Filter,
} from "../../components";
//api
import { getPageDogs } from "lib/api/sample";
//redux
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dogData: state.dogData,
  };
};
const Styled = {
  Wrapper: styled.section`
    .container {
      margin-top: 3.6rem;
    }
  `,
};
const DogPage = ({ dogData }) => {
  const [dogs, setDogs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const contents = ["최신순", "오래된순"];
  const [selectedFilter, setSelectedFilter] = useState(contents[0]);

  useEffect(() => {
    if (dogData.length !== 0) {
      if (selectedFilter === "최신순") {
        setDogs(dogData);
      } else {
        setDogs([...dogData].reverse());
      }
      setTotalPage(dogData.length);
    } else {
      (async () => {
        const data = await getPageDogs(pageNum, selectedFilter);
        setDogs(data[0]);
        setTotalPage(data[1]);
      })();
    }
  }, [pageNum, dogData, selectedFilter]);

  return (
    <Styled.Wrapper>
      <DogSearchNavigation />
      <div className="container">
        <Filter
          contents={contents}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPage={totalPage}
      />
    </Styled.Wrapper>
  );
};

export default connect(mapStateToProps)(DogPage);
