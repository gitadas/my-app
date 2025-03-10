// All test scripts are placed here in App.test.js. They can be placed in a separate
// folder called "__test__" in components, and one file for each component. 
// For ex. Navigation.test.js  

import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header/Header'; 
import Navigation from './components/Navigation/Navigation'; 
import Main from './components/Main/Main';

// /* Test script 1 - checks for header text*/
// describe('Header', () => {
//   test('Header is rendered', () => {
//     render(<Header />);
//     const linkElement = screen.getByText("Creative Designs Bakery");
   
//     // explicit assertion
//     expect(linkElement).toBeInTheDocument();
//   });
// });

// /* Test script 2 - checks for flower image */
// describe('Main', () => {
//   test('renders image', () => {
//     const { getByText } = render(<Main />);
//     const sampleImg = screen.getByAltText('sampleImage');
//     expect(sampleImg).toBeInTheDocument();
//     expect(sampleImg.src).toContain('flowers.jpg'); // Assuming 'flower.jpg' is the correct one
//   });
// });    

// /* Test script 3 - checks for Navigation items */
// describe('Navigation', () => {
//   test('renders navigation items', () => {
//     const { getByText } = render(<Navigation />);
    
//     // Verify that all navigation items are rendered
//     expect(getByText('Welcome')).toBeInTheDocument();
//     expect(getByText('Photo Gallary')).toBeInTheDocument();
//     expect(getByText('Weather Information')).toBeInTheDocument();
//     expect(getByText('Community Blog')).toBeInTheDocument();
//     expect(getByText('Contact Us')).toBeInTheDocument();
//   });  
// });



