import { Modal, ModalFuncProps } from 'antd'
import { GetWidth, WidthModal } from 'Helper/Style'
import { FC } from 'react'
import { GetModalIsOpen, setToggleModal } from 'Redux/Slices/Modal/Modal.Get'
import { ModalKeys } from 'Redux/Slices/Modal/Modal.Model'

interface WrapModalProps extends ModalFuncProps {
	name: ModalKeys
	size?: WidthModal
}

export const WrapModal: FC<WrapModalProps> = ({ name, size, children, ...modal }) => {
	const isOpen = GetModalIsOpen(name)

	const closeModal = () => {
		setToggleModal({ name: name, isOpen: false })
	}

	return (
		<Modal footer={null} open={isOpen} onCancel={closeModal} width={GetWidth(size)} centered={true} {...modal}>
			<div>{children}</div>
		</Modal>
	)
}
WrapModal.defaultProps = {
	size: 'medium',
}
