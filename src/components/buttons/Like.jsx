import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Like({ likeCount }) {
  let token = false;

  return (
    <Container>
      <Heart icon={faHeart} $token={token} />
      <LikeCount $token={token}>{likeCount}</LikeCount>
    </Container>
  );
}

//styles

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 8px;
  gap: 12px;
  cursor: pointer;
`;

const Heart = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
  color: ${({ theme, $token }) => {
    return $token ? theme.colors.green : theme.colors.grey;
  }};
`;

const LikeCount = styled.p`
  font-size: 12.8px;
  color: ${({ theme, $token }) => {
    return $token ? theme.colors.green : theme.colors.grey;
  }};
`;
