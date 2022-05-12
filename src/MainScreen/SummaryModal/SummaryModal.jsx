import { Modal } from '@mui/material';
import React from 'react';
import texts from 'texts';
import { ModalContentContainer, SummaryLabel, ValueContainer } from './styles';

export const SummaryModal = ({ isOpen, closeModal }) => {
	const labels = texts.modalLabels;

	return (
		<Modal open={isOpen} onClose={closeModal}>
			<ModalContentContainer>
				<SummaryLabel>{labels.mostExpensive} : </SummaryLabel>
				<ValueContainer>placeholder, as task was omitted.</ValueContainer>
				<SummaryLabel>{labels.lastPurchaseDate} : </SummaryLabel>
				<ValueContainer>placeholder, as task was omitted.</ValueContainer>
				<SummaryLabel>{labels.totalSpent} : </SummaryLabel>
				<ValueContainer>placeholder, as task was omitted.</ValueContainer>
				<SummaryLabel>{labels.expensiveProductImage} : </SummaryLabel>
				<ValueContainer>placeholder, as task was omitted.</ValueContainer>
			</ModalContentContainer>
		</Modal>
	);
};
