
import style from './Item.module.scss';

import  type  from '@testing-library/user-event/dist/type';
import classNames from 'classnames';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

export default function item(props:Prato){
  const {id,title,description, category, size, serving, price, photo} = props;
  const navigate = useNavigate();

  return (
    <div className={style.item} onClick={()=> navigate(`/prato/${id}`)}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title}></img>
      </div>

      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>    
          <p>{description}</p>
        </div>

        <div className={style.item__tags}>
          <div className={classNames({[style.item__tipo]:true,
            [style[`item__tipo__${category.label.toLowerCase()}`]]:true
          })}>
            {category.label}
          </div>

          <div className={style.item__porcao}>
            {size}g
          </div>

          <div className={style.item__qtdpessoas}>
                        Serve {serving} pessoa{ serving === 1 ? '' : 's' }
          </div>

          <div className={style.item__valor}>
                        R$ {price.toFixed(2)}
          </div>
        </div>

        <TagsPrato {...props}/>
      </div>
    </div>
  );
}