import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';


test("render correctly ", ()=>{
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
});
