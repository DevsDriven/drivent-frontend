import { createContext, useState } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelSelected, setHotelSelected] = useState({
    hotelId: 0,
    name: '',
    image: '',
    Rooms: [],
    accommodationTypes: 'Em construção',
    vacancies: 'Em construção',
  });

  const [roomSelected, setRoomSelected] = useState({
    roomId: 0,
    name: '',
  });

  return (
    <HotelContext.Provider value={{ hotelSelected, setHotelSelected, roomSelected, setRoomSelected }}>
      {children}
    </HotelContext.Provider>
  );
}
