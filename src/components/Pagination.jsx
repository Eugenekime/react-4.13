import styled from 'styled-components';

export default function Pagination({
  articlesCount,
  onPageChange,
  currentPage,
  limit,
}) {
  const totalPage = Math.ceil(articlesCount / limit);
  let pages = [];

  console.log(currentPage);
  if (currentPage <= 4) {
    pages = [1, 2, 3, 4, 5, '...', totalPage];
  } else if (totalPage - 4 <= currentPage) {
    pages = [
      1,
      '...',
      totalPage - 5,
      totalPage - 4,
      totalPage - 3,
      totalPage - 2,
      totalPage - 1,
      totalPage,
    ];
  } else {
    pages = [
      1,
      '...',
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      '...',
      totalPage,
    ];
  }

  return (
    <Wrapper>
      {pages.map((page) => {
        if (page === '...') {
          return (
            <PageNumber
              key={page.index}
              $active={currentPage === page}
            >
              {page}
            </PageNumber>
          );
        }
        return (
          <PageNumber
            key={page.index}
            $active={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageNumber>
        );
      })}
    </Wrapper>
  );
}

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 20px 0px;
`;

const PageNumber = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.green};
  padding: 12px 16px;
  cursor: pointer;
  color: ${({ $active, theme }) => ($active ? 'white' : theme.colors.green)};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.green : 'white'};
  transition: 0.2s;
`;
