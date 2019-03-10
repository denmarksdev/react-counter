import { shallow } from 'enzyme'
import { DisplayCounter } from './DisplayCounter'
import React from 'react';

describe('<DisplayCounter />', () => {

    it('mounts', () => {
        const wrapper = shallow(<DisplayCounter count={10} />)
        expect(wrapper.html() ).toContain('O contador está em 10')
    })
})
