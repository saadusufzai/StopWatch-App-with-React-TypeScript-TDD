import React from 'react'
import {shallow, ShallowWrapper, mount, ReactWrapper} from 'enzyme'
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

describe('mounted Timer', () => {
    let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  
    beforeEach(() => (container = mount(<Timer />)));
  
    it('invokes startTimer when the start button is clicked', () => {
      const spy = jest.spyOn(container.instance(), 'startTimer');
      container.instance().forceUpdate();
      expect(spy).toHaveBeenCalledTimes(0);
      container.find('.start-timer').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  
    
  });


  // Unit test
  describe('SomeComponent', () => {
    it('validates model on button click', () => {
        
        const wrapper = mount(
          <Timer />
        );
        
        const instance = wrapper.instance();
        wrapper
          .find('startTimer')
          .at(0)
          .simulate('click');
        expect(validateSpy).toHaveBeenCalledTimes(1);
      });
    }