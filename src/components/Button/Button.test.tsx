import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'
import Button from './Button'

let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> 

beforeEach(()=>{
    container = shallow(
        <Button buttonAction={jest.fn()}
        btnValue={''}/>
    )
})
it('should render a div ', ()=>{
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
})