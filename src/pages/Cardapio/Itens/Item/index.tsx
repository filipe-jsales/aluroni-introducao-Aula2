import logo from 'assets/logo.svg';
import styles from './Item.module.scss';

export default function Item() {
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
               <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Descrição do Macarrão</p>
                </div>
            </div>
        </div>
    )
}