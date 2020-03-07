import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 250px;
  min-height: 80px;
  padding: 0 9px;
  margin-right: 21px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  padding: 12px 0 12px 3px;
`;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  letter-spacing: 0.15px;
  line-height: 1.5;
`;

const TaskList = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

const Footer = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 6px;
  min-height: 29px;
  display: flex;
  align-items: center;
  // border: 1px solid red;
  border-radius: 2px;
  padding-left: 6px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #eee;
  }
`;

export { Container, Header, Title, TaskList, Footer };
