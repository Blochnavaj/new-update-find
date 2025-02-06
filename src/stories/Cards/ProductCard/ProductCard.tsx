import styles from './ProductCard.module.scss';
import './../../../index.css';

type ProductCardProps = {
    active: string;
    imgpath: string;
    price: string;
    discount: string;
    model: string;
    kilometers: string;
    ad?: string;
};

const ProductCard = (props: ProductCardProps) => {
    const { active, imgpath, price, discount, model, kilometers, ad } = props;

    return (
        <div
            className={`
            ${styles.productcard}
            ${active === 'green' ? styles.green : ''}
            ${active === 'grey' ? styles.grey : ''}
            ${ad === 'yes' ? styles.ad : ''}
            `}
        >
            <div className={`${styles.productimg}`}>
                <img src={imgpath} />
            </div>
            <div className={`${styles.productinfo}`}>
                <div>
                    <h1>{price}</h1>
                    <h2>{discount}</h2>
                </div>
                <h1>{model}</h1>
                <h2>{kilometers}</h2>
            </div>
        </div>
    );
};

export default ProductCard;
