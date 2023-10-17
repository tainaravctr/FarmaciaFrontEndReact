import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../service/Service';
import CardCategoria from '../cardCategorias/CardCategorias';
import Util from '../../util/Util';
import ICategory from '../../models/Categoria';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<ICategory[]>(Util as ICategory[]);

  

  async function buscarCategoria() {
    try {
      await buscar('/categoria', setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }



  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;