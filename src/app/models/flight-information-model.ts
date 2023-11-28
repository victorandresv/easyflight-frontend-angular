export interface FlightInformationModel {
    origin: string;
    destiny: string;
    departureDate: string;
    returnDate?: string;
    adults: number;
    children?: number;
    infants?: number;
}
