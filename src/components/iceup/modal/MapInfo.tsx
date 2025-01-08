import Modal from 'react-modal';
import '../modal/modal.scss';
import Image from "next/image";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '100%',
        maxWidth: "calc(1538px - 80px)",
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        zIndex : '9999',
        padding: '30px 40px',
    },
};

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    mapInfo: any
}

export default function MapInfo({isOpen, onRequestClose, mapInfo}: Props) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            shouldCloseOnEsc={false}
        >
            <div className="modal-wrapper">
                <div className="modal-header">
                    <button onClick={onRequestClose} className="modal-close-button">Close</button>
                </div>
                <div className="modal-content">
                    <div className="info-detail">
                        <div className="info-detail-text">
                            <h3>{mapInfo?.title}</h3>
                            <div className="address">
                                {mapInfo?.address2 !== "" && <p>{mapInfo?.address2}</p>}
                                <address>{mapInfo?.address}</address>
                            </div>
                            <div className="contact">
                                <p className="tel">{mapInfo?.tel}</p>
                                {mapInfo?.fax !== "" && <p className="fax">{mapInfo?.fax}</p>}
                            </div>
                            {mapInfo?.established !== "" && mapInfo?.netSales !== "" && mapInfo?.employee !== "" && (
                                <div className="etc-info">
                                    {mapInfo?.established !== "" && <p>Established: {mapInfo?.established}</p>}
                                    {mapInfo?.netSales !== "" && <p>Net Sales: {mapInfo?.netSales}</p>}
                                    {mapInfo?.employee !== "" && <p>Employee: {mapInfo?.employee}</p>}
                                </div>
                            )}
                        </div>
                        {mapInfo?.image && <Image src={mapInfo?.image} alt={mapInfo?.title} width={480} height={300}/>}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
