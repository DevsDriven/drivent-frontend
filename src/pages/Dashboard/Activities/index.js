import { useState } from 'react';
import styled from 'styled-components';
import ActivitiesCategory from './Components/ActivitiesCategory';

export default function Activities() {
  const [selectedDay, setSelectedDay] = useState();

  return (
    <Container>
      <ActivitiesHeader>Escolha de atividades</ActivitiesHeader>
      <DayContainer>
        <DaySelectHeader>Primeiro, filtre pelo dia do evento:</DaySelectHeader>
        <DaySelectButtons></DaySelectButtons>
      </DayContainer>
      <ActivitiesContainer>
        <ActivitiesCategory />
      </ActivitiesContainer>
    </Container>
  );
}

const Container = styled.div``;

const ActivitiesHeader = styled.div``;

const DayContainer = styled.div``;

const DaySelectHeader = styled.h2``;

const DaySelectButtons = styled.div``;

const ActivitiesContainer = styled.div``;
