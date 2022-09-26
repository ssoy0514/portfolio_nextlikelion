import React from 'react';
import * as S from "./style";
import profile from "../../asset/myimg.jpg"
function Index() {
  return (
    <S.Container>
      <S.Title>About 소희</S.Title>
      <S.ProfileWrapper>
        <S.Profile src={profile}></S.Profile>
      </S.ProfileWrapper>
      <S.Title>Project</S.Title>
    </S.Container>
  );
}

export default Index