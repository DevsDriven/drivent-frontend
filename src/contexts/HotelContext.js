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
    vacancies: 'Em construção'
  });

  return (
    <HotelContext.Provider value={{ hotelSelected, setHotelSelected }}>
      {children}
    </HotelContext.Provider>
  );
};
