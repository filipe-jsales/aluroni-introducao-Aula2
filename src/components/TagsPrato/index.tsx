import styles from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

export default function TagsPrato(props:Prato) {
    const { title, description, price, serving, category, size, photo } = props;
    return (
        <div className={styles.item__tags}>
            <div className={classNames({
                [styles.item__tipo]: true,
                [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}</div>
            <div className={styles.item__porcao}>{size}g</div>
            <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
            <div className={styles.item__valor}>R${price.toFixed(2)}</div>
        </div>
    )
}