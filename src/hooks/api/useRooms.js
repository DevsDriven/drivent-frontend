import useAsync from '../useAsync';
import useToken from '../useToken';
import * as roomsApi from '../../services/roomsApi';

export default function useRooms(hotelId) {
  const token = useToken();
 
  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getManyRooms,
  } = useAsync(() => roomsApi.getManyRooms(token, hotelId));

  return {
    rooms,
    roomsLoading,
    roomsError,
    getManyRooms,
  };
}
