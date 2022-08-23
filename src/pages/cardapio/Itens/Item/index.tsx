import logo from 'assets/logo.svg';
import style from './Item.module.scss';
import cardapio from  '../itens.json';
import  type  from '@testing-library/user-event/dist/type';

type Props = typeof cardapio[0];

export default function item(props:Props){
const {title,description, category, size, serving, price} = props

    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={logo} alt={title}></img>
            </div>

            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{title}</h2>    
                    <p>{description}</p>
                </div>

                <div className={style.item__tags}>
                    <div className={style.item__tipo}>
                        {category.label}
                    </div>

                    <div className={style.item__porcao}>
                        {size}g
                    </div>

                    <div className={style.item__qtdpessoas}>
                        Serve {serving} pessoa{ serving === 1 ? "" : 's' }
                    </div>

                    <div className={style.item__valor}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}