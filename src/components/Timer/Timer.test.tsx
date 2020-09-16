import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'
import Timer from './Timer'
import Button from '../Button/Button'

describe('Timer', ()=>{
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
    beforeEach(()=> container = shallow(<Timer />)) 

    it('should render a <div/> element',()=>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })

    it('should render a <Button /> Component ',()=>{
        expect(container.find('Button').length).toEqual(3)
    })
})