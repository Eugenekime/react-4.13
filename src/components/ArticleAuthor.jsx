import styled from "styled-components";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ArticleAuthor({ author, createdAt }) {
  return (
    <AuthorContainer>
      {author.image ? (
        <Avatar src={author.image} alt="author" />
      ) : (
        <AvatarPlaceholder icon={faUser} />
      )}

      <Author>
        <UserName>{author.username}</UserName>
        <UserDate>{format(new Date(createdAt), "dd MMMM yyyy")}</UserDate>
      </Author>
    </AuthorContainer>
  );
}

const AvatarPlaceholder = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.green};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid white;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.green};
`;

const UserDate = styled.span`
  font-size: 12.8px;
  line-height: 100%;
  color: rgb(154, 146, 146);
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid white;
`;
