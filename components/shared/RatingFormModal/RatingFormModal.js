import React, { useState } from 'react';
import { Modal } from 'react-native';
import ButtonText from '../ButtonText/ButtonText';
import RatingsButton from '../RatingsButton/RatingsButton';
import { ModalButtonContainer, ModalContainer, ModalContent } from './styles'

const RatingFormModal = ({ movieName, isVisible, onClose, onSubmitRating }) => {
    const [selectedRating, setSelectedRating] = useState(0);

    const handleSelectRating = rating => {
        setSelectedRating(rating);
    };

    const handleSubmitRating = () => {
        onSubmitRating(selectedRating);
        setSelectedRating(0); // Reset the rating
        onClose();
    };

    const handleCloseModal = () => {
        onClose();
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ModalContainer onPress={handleCloseModal}>
                <ModalContent>
                    <ModalButtonContainer>
                        <RatingsButton selectedRating={selectedRating} onSelectRating={handleSelectRating}
                        title={movieName}/>
                    </ModalButtonContainer>
                    <ModalButtonContainer>
                    <ButtonText text='Submit Rating' buttonColor='#58F5D9' textColor='#15191E' width='100%' textSize='16'
                    onPress={handleSubmitRating}/>
                    </ModalButtonContainer>
                </ModalContent>
            </ModalContainer>
        </Modal>
    )
}

export default RatingFormModal