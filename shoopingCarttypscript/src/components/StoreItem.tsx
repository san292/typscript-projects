import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
type StoreIndexType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreIndexType) {
  const {
    getItemQuatity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromcart
  } = useShoppingCart();

  let quantity = getItemQuatity(id);

  return (
    <Card className="h-120">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title
          className=" 
          d-flex
          justify-content-between
          align-items-baseline
          mb-4"
        >
          <span className="fs-3">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 1 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center "
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}> - </Button>

                <div>
                  <span className="fs-4"> {quantity}</span> in cart
                </div>

                <Button onClick={() => increaseCartQuantity(id)}> + </Button>
              </div>

              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromcart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
