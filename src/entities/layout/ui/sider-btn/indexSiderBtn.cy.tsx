import React from 'react'

import { SiderBtn } from './index'

describe('<SiderBtn />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<SiderBtn />)
	})
})
