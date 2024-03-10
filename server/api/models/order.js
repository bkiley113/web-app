import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
});

const orderModel = mongoose.model('Order', orderSchema)
export { orderModel }
  