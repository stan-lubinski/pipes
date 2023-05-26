import { rest } from 'msw';
import { CartItemModel } from 'src/app/modules/cart/models/cart';
import { productsMock } from './data/products-mock';

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        data: productsMock,
      })
    );
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    const id = +req.params['id'];
    const product = productsMock.find((el) => el.id === id);

    return res(
      ctx.status(200),

      ctx.json(product)
    );
  }),
  rest.get('/cart', (req, res, ctx) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return res(
      ctx.status(200),

      ctx.json({
        data: cart,
      })
    );
  }),
  rest.post('/cart', (req, res, ctx) => {
    const productItem = productsMock.find(
      (el) => el.id === (req.body as any).id
    );
    const item: CartItemModel = {
      count: (req.body as any).count,
      id: productItem.id,
      name: productItem.name,
      image: productItem.image,
      price: productItem.price,
    };
    const currentCart: CartItemModel[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
    const existingItem: CartItemModel | undefined = currentCart.find(
      (el) => el.id === item.id
    );

    if (existingItem && existingItem.count === 5) {
      return res(
        ctx.status(422),
        ctx.json({
          error: 'Max quantity reached',
        })
      );
    }

    if (existingItem) {
      existingItem.count += item.count;
      localStorage.setItem('cart', JSON.stringify(currentCart));
    } else {
      const newCart = [...currentCart, item];
      localStorage.setItem('cart', JSON.stringify(newCart));
    }

    return res(
      ctx.json({
        id: item.id,
        count: item.count,
      })
    );
  }),
  rest.delete('/cart/:id', (req, res, ctx) => {
    const useCounter = (req.body as any).useCounter;
    const id = +req.params['id'];

    const cart: CartItemModel[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
    const item: CartItemModel | undefined = cart.find((el) => el.id === id);
    if (item) {
      if (useCounter && item.count > 1) {
        item.count -= 1;
      } else {
        cart.splice(cart.indexOf(item), 1);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    }

    return res(ctx.status(200));
  }),
  rest.delete('/cart', (req, res, ctx) => {
    localStorage.removeItem('cart');
    return res(ctx.status(200));
  }),
  rest.get('/cart-size', (req, res, ctx) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    let cartSize = 0;
    if (cartItems.length) {
      cartItems.forEach((el: CartItemModel) => {
        cartSize += el.count;
      });
    }

    return res(ctx.status(200), ctx.json(cartSize));
  }),
];
