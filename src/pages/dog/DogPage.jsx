import React from "react";
import { DogCardContainer, PaginationNav } from "../../components";
import styled from "styled-components";

const dogs = [
  {
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  }
];

const DogPageWrap = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DogPage = () => {
  return (
    <DogPageWrap>
      <DogCardContainer dogs={dogs} />
      <PaginationNav />
    </DogPageWrap>
  );
};

export default DogPage;
