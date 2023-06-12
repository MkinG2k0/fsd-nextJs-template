import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Footer } from './index'

describe('Тестирование Footer', () => {
	it('on document', () => {
		const footer = render(<Footer />)

		expect(footer.getByText('With Feature-Sliced Design')).toBeInTheDocument()
	})
})
