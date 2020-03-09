import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  min-width: 250px;
  width: 250px;
  min-height: 80px;
  padding: 0 9px;
  margin-right: 21px;
`;

const Header = styled.div`
  display: flex;
  padding: 6px 0 6px 3px;
`;

const Title = styled.div`
  padding-top: 3px;
  width: 199px;
  flex: 1;
`;

const TitleText = styled.div`
  width: 199px;
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  letter-spacing: 0.15px;
  line-height: 1.5;
  overflow-wrap: break-word;
`;

const TitleInput = styled.div`
  textarea {
    display: block;
    outline: none;
    flex: 1;
    resize: none;
    border: none;
    font-weight: bold;
    font-size: 16px;
    width: 199px;
    padding: 0;
    letter-spacing: 0.15px;
    line-height: 1.5;
  }
`;

const CollectionMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 24px;
  flex-shrink: 0;
`;

const TaskList = styled.div`
  min-height: 0.1px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

const Footer = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 6px;
  min-height: 29px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding-left: 6px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #eee;
  }
`;

export {
  Container,
  Header,
  Title,
  TitleText,
  TitleInput,
  TaskList,
  CollectionMenuIcon,
  Footer
};
