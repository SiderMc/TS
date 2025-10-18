// Задача 5.  У localStorage зберігається об’єкт у форматі JSON. Проаналізувати чи є цей об'єкт  типу Product{     title:string,     price:number }

type Product = { title: string; price: number };

let product: Product = {
  title: 'Phone',
  price: 200,
};

localStorage.setItem('product', JSON.stringify(product));

const isProduct = (data: unknown): data is Product => {
  return (
    !!data && typeof data === 'object' && 'title' in data && 'price' in data
  );
};

const getProduct = (): Product | null => {
    const dataStorage = localStorage.getItem('product');
    if (!dataStorage) return null;
  
    const parsedData = JSON.parse(dataStorage);
    if (isProduct(parsedData)) {
      return parsedData;
    }
    return null;
  };
const renderProduct = (product:Product| null)=>{
if(product){document.write(
    `<p>Назва товару : ${product.title}</p>
    <p>Ціна товару : ${product.price}</p>`
)}
}
renderProduct(getProduct())