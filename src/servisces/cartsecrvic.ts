import { Cart } from "../modules/cart";

interface CartUser {
    userid: string;
}

// Function to create a cart for a user
const createCartForUser = async ({ userid }: CartUser) => {
    const cart = await Cart.create({ userid ,totalamount:0,status:'active'});
    await cart.save()
    return cart; // No need for `await cart.save()`
};

interface GetCartParams {
    userid: string;
}

// Function to get active cart or create a new one
export const getActiveCart = async ({ userid }: GetCartParams) => {
    let cart = await Cart.findOne({ userid, status: 'active' });

    if (!cart) {
        cart = await createCartForUser({ userid });
    }

    return cart;
};
