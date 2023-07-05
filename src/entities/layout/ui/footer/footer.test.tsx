import { Footer } from './index'

import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

describe('Тестирование Footer', () => {
	it('on document', () => {
		const footer = render(<Footer />)

		// expect(footer.getByText('With Feature-Sliced Design')).toBeInTheDocument()
	})
})
