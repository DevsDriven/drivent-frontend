import styled from 'styled-components';
import Clickbox from './clickbox';

export default function Options({ data }) {
  return (
    <Container>
      {data.options ?
        data.options.map((optionData, index) => {
          return <Clickbox type={data.type} optionData={{ ...optionData, ticketTypeId: optionData.id, id: index }} key={index}/>;
        }):
        <></>
      }
    </Container>
  );
}

export const Container = styled.div`
     {
      display: flex;
      gap: 22px;
      margin-bottom: 30px;
    }
  `;

