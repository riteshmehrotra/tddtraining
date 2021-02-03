import {render, screen, fireEvent} from '@testing-library/react';
import LikeButton from './LikeButton';

beforeEach(()=>{
    render(<LikeButton title="Like" threshold={5}></LikeButton>)
});

test('Test that Like button displays correctly with a Like Text',()=>{
    expect(screen.getByRole('button')).toHaveTextContent('Like');
})


test('Should show that button clicked once on a single click',()=>{
    const button = screen.getByRole('button');
    fireEvent.click(button)
    expect(button).toHaveTextContent('Like (1)');
})


// test('Should show that button clicked thrice on three clicks',()=>{
//     const button = screen.getByRole('button');
//     fireEvent.click(button)
//     fireEvent.click(button)
//     fireEvent.click(button)
//     expect(button).toHaveTextContent('Like (3)');
// })


// test('Once the threshold is reached, the button is disabled',()=>{
//     const button = screen.getByRole('button');
//     for(let i=0;i<6;i++)
//         fireEvent.click(button);
//     expect(button).toHaveTextContent("Enough likes");
// })