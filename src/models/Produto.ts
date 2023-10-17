import Categoria from './Categoria';


export default interface Produto {
  id: number;
  nomeProduto: string;
  descricao: string;
  precoProduto: number;
  imgProduto: string;

  categoria: Categoria | null;
}