import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

import MainApplication from '@/components/MainApplication.vue'
import BikeList from '@/components/BikeList.vue'

describe('MainApplication.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'Hello Genomics!'
    const wrapper = shallowMount(MainApplication, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
