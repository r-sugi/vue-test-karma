import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/Counter.vue'
import flushPromises from 'flush-promises'

describe('Counter.vue', () => {
  it('increments count when button is clicked #1', async () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    await flushPromises() // wait until mutation => render
    expect(wrapper.find('div').text()).contains('1')
  })

  it('increments count when button is clicked #2', done => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => { // wait until mutation => render
      expect(wrapper.find('div').text()).contains('1')
      done()
    })
  })
})
