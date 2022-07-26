import {screen , render}from '@testing-library/react';
import Async from './Async'


describe("Async Component" , ()=>{
    test ("renders post if request succeeds" , async() =>{

        //mock function :

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async() => [{id : 'p1' , title : "First Post"}]
        });
        render(<Async/>) ;

        const listItemElement = await screen.findAllByRole("listitem");

        expect(listItemElement).not.toHaveLength(0);
    })
})