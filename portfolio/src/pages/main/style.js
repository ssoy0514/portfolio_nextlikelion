import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
export const ProfileWrapper = styled.div`
  width: 30%;
  
  overflow: hidden;
  object-fit:cover;
  border-radius: 9999px;
  &:after {
    padding-top: 30%;
  }
`;
export const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit:cover;
`;