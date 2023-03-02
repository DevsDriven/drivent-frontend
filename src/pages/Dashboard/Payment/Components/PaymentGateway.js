import styled from 'styled-components';

export default function PaymentGateway() {
  return (
    <PaymentContainer>
      <PaymentLabel>Pagamento</PaymentLabel>
      <InformationContainer>
        <CardInfoContainer />
        <FormContainer>
          <CardNumber placeholder='Card Number' />
          <CardNumberLabel>E.g.: 49..., 51..., 36..., 37... </CardNumberLabel>
          <CardOwner placeholder='Name' />
          <SensitiveCardInfoContainer>
            <ValidThru placeholder='Valid Thru' />
            <CVC placeholder='CVC' />
          </SensitiveCardInfoContainer>
        </FormContainer>
      </InformationContainer>
      <ConfirmButton>Finalizar Pagamento</ConfirmButton>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div``;

const PaymentLabel = styled.h1``;

const InformationContainer = styled.div``;

const CardInfoContainer = styled.div``;

const FormContainer = styled.div``;

const CardNumber = styled.input``;

const CardNumberLabel = styled.h2``;

const CardOwner = styled.input``;

const SensitiveCardInfoContainer = styled.div``;

const ValidThru = styled.input``;

const CVC = styled.input``;

const ConfirmButton = styled.button``;
