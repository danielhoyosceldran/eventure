import { useEffect } from 'react';

export default function Modal({
    children,
    show = false,
    closeable = true,
    onClose = () => {},
}) {
    useEffect(() => {
        if (show) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => document.body.classList.remove('modal-open');
    }, [show]);

    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    if (!show) return null;

    return (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={close}>
            <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-body">
                        {children}
                    </div>
                    {closeable && (
                        <button type="button" className="btn-close position-absolute top-0 end-0 m-3" aria-label="Close" onClick={close}></button>
                    )}
                </div>
            </div>
        </div>
    );
}
