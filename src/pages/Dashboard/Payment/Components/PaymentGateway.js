import styled from 'styled-components';
import PaymentForm from '../../../../components/Dashboard/Payment/CreditCard';

export default function PaymentGateway() {
  return (
    <PaymentContainer>
      <PaymentLabel>Pagamento</PaymentLabel>
      <InformationContainer>
        <PaymentForm />
      </InformationContainer>
      <ConfirmButton>Finalizar Pagamento</ConfirmButton>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div``;

const PaymentLabel = styled.h1``;

const InformationContainer = styled.div``;

const ConfirmButton = styled.button``;
