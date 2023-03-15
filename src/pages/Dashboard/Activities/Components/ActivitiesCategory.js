import styled from 'styled-components';

export default function ActivitiesCategory(props) {
  const {} = props;

  return (
    <Container>
      <CategoryContainer>
        <CategoryName>Category Name</CategoryName>
        <ActivitiesContainer>map activities</ActivitiesContainer>
      </CategoryContainer>
    </Container>
  );
}

const Container = styled.div``;

const CategoryContainer = styled.div``;

const CategoryName = styled.div``;

const ActivitiesContainer = styled.div``;
