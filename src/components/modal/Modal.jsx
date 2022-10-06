import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "../buttons/Buttons";
import { Backdrop } from "./Backdrop";

//Todo transfer to styled, refactor
const variants = {
	hidden: {
		top: "-100%",
	},
	visible: {
		top: "25%",
	},
};

const closeButtonStyle = {
	position: "absolute",
	top: 0,
	right: 0,
	margin: "0.75rem",
	scale: 1.4,
};

export default function Modal({ content, open, handleClose }) {
	return (
		<>
			<AnimatePresence>
				{open && (
					<Backdrop onClick={handleClose}>
						<StyledModal
							key="modal"
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.25, ease: "easeInOut" }}
							variants={variants}
							onClick={(e) => e.stopPropagation()}
						>
							<CloseButtonWrapper>
								<CloseButton handleClose={handleClose} />
							</CloseButtonWrapper>
							<ModalContent>{content}</ModalContent>
						</StyledModal>
					</Backdrop>
				)}
			</AnimatePresence>
		</>
	);
}

const StyledModal = styled(motion.div)`
	position: fixed;
	width: 80%;
	height: 80%;
	max-width: 500px;
	max-height: 500px;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.mainText};
	box-shadow: ${(props) => props.theme.containerDropShadow};
`;

const ModalContent = styled.div`
	width: 100%;
	height: 100%;
`;

const CloseButtonWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	margin: 0.25rem;
	svg {
		scale: 1.5;
	}
`;
