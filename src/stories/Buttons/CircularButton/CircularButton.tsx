import styles from './CircularButton.module.scss';

type CircularButtonProps = {
    active?: string;
    imgpath: string;
};

const CircularButton = (props: CircularButtonProps) => {
    const { imgpath, active } = props;

    return (
        <button
            className={`
            ${styles.button} 
            ${active === 'left' ? styles.left : ''} 
            ${active === 'right' ? styles.right : ''}
            ${active === 'cross' ? styles.cross : ''}
            `}
        >
            <img src={imgpath} />
        </button>
    );
};

export default CircularButton;
