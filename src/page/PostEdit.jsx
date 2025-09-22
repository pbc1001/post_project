import React, { useState } from "react";
import styled from "@emotion/styled";
import Vector from "../assets/Vector.svg";
import { postedit } from "../apis/auth";


const PostEdit = () => {
  return (
    <Body>
    <Container>
      <Header>
      <PostList>게시글 목록</PostList>
      <img src = {Vector}></img>
      <MakePost>게시글 작성</MakePost>
      </Header>
      <Main>
      <Title>제목</Title>
      <PostTitleBox
      type = "text"
      placeholder = "제목을 입력해주세요"
      ></PostTitleBox>
      <Detail>내용</Detail>
      <DetailBox 
      placeholder = "내용을 입력해주세요"
      ></DetailBox>
      </Main>
      <PostMakeButton 
      type = "button"
      >
      <ButtonText>수정하기</ButtonText>
      </PostMakeButton>

    </Container>
    </Body>
  );
};



const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 1189px;
  height: 100vh;
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  top: 67px;
`;

const PostList = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #999999;
  margin-right: 20px;
`;
const MakePost = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 167px;
`;
const Title = styled.label`
  font-size: 14px;
  color: #555555;
`;
const PostTitleBox = styled.input`
  border: none;
  background-color: #EEEEEE;
  width: 1189px;
  height: 50px;
  border-radius: 4px;
  font-size: 18px;
  padding: 12px;
  margin-bottom: 14px;
`;


const Detail = styled.label`
  font-size: 14px;
  color: #555555;
`;
const DetailBox = styled.textarea`
  border: none;
  background-color: #EEEEEE;
  width: 1189px;
  height: 500px;
  border-radius: 4px;
  font-size: 18px;
  padding: 12px;
  margin-bottom: 64px;
`;
const PostMakeButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 120px;
  border: none;
  background-color: #3d8aff;
  color: #ffffff;
  width: 1189px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const ButtonText = styled.span`
  font-size: 15px;
  font-weight: 500;
`;


export default PostEdit;