export const Modal = ({isOpen, onClose, rating}) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Thank You</h2>
                <p>You rated us {rating} star{rating > 1 ? 's' : ''}</p>
                <button className='close-btn' onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
