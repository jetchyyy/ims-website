import { ContactInfo } from './../types/contact.types';

export const contactInfo: ContactInfo = {
  phones: [
    '+1 (239) 516-5873',
    '+1 (239) 516-5877',
    '+1 (239) 516-7152',
  ],
  address: {
    street: '206 S Magnolia Ave unit f',
    city: 'Ocala',
    state: 'FL',
    zip: '34471',
    full: '206 S Magnolia Ave unit f, Ocala, FL 34471',
  },
  email: 'vagraceteam@gmail.com', // Add actual email if available
  hours: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },
};

export const paymentInfo = {
  localBank: {
    title: 'LOCAL BANKS - Use these details to pay USD from bank accounts within US',
    accountHolder: 'INTERNATIONAL MARKETING & SERVICES',
    accountHolderWise: 'Wise US Inc.',
    routingNumber: '084009519',
    accountNumber: '759078756028891',
    accountType: 'Checking',
    bankName: 'Column National Association',
    bankAddress: 'A4-700 1 Letterman Drive, San Francisco CA 94129, United States',
  },
  internationalBank: {
    title: 'International bank details - Use these details to pay USD from bank accounts outside the US',
    accountHolder: 'INTERNATIONAL MARKETING & SERVICES',
    accountHolderWise: 'Wise US Inc.',
    swiftBIC: 'TRWIUS35XXX',
    accountNumber: '759078756028891',
    bankName: 'Wise US Inc',
    bankAddress: '108 W 13th St, Wilmington DE 19801, United States',
  },
};