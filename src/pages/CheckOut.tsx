import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { userDetail } from "../types/order";
import { placeOrder } from "../redux/features/orderSlice";
import { updateStock } from "../redux/features/productSlice";






const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<userDetail>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const [paymentMethod] = useState("Cash on Delivery");

 
  const cartItems = useSelector((state: RootState) => state.cart.items);


  const onSubmit: SubmitHandler<userDetail> = (data) => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    dispatch(placeOrder({ userDetails: data, cartItems, paymentMethod }));

  
    cartItems.forEach(item => dispatch(updateStock({ productId: item.product._id, quantity: item.product.stockQuantity - item.quantity })));
    
    navigate("/order-success");
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="mb-4">
          <label className="block text-lg mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

      
        <div className="mb-4">
          <label className="block text-lg mb-2">Phone Number</label>
          <input
            type="text"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
        </div>

        
        <div className="mb-4">
          <label className="block text-lg mb-2">Delivery Address</label>
          <textarea
            {...register("address", { required: "Delivery address is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.address && <span className="text-red-500">{errors.address.message}</span>}
        </div>

      
        <div className="mb-6">
          <h3 className="text-lg mb-2">Payment Method</h3>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Cash on Delivery"
              checked={paymentMethod === "Cash on Delivery"}
              onChange={() => setPaymentMethod("Cash on Delivery")}
              className="form-radio"
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </div>

      
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
