import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="position-relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>
            {open && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{ zIndex: 1040 }}
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};

const Content = ({
    align = 'right',
    width = 'auto',
    contentClasses = '',
    children,
}) => {
    const { open, setOpen } = useContext(DropDownContext);

    let alignmentClasses = 'dropdown-menu';
    if (align === 'left') {
        alignmentClasses += ' dropdown-menu-start';
    } else if (align === 'right') {
        alignmentClasses += ' dropdown-menu-end';
    }

    let widthStyle = {};
    if (width !== 'auto') {
        widthStyle = { minWidth: `${width}px` };
    }

    return (
        <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div
                className={alignmentClasses + ' show'}
                style={{ position: 'absolute', zIndex: 1050, ...widthStyle }}
                onClick={() => setOpen(false)}
            >
                <div className={contentClasses}>{children}</div>
            </div>
        </Transition>
    );
};

const DropdownLink = ({ className = '', children, ...props }) => {
    return (
        <Link
            {...props}
            className={
                'dropdown-item ' + className
            }
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
