import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Product } from '../types/product'; // Adjust the import based on your structure

const CreateProduct= () => {


  const { register, handleSubmit, formState: { errors } } = useForm<Product>();


  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      await axios.post('https://rp-camper-server.vercel.app/api/products/create-product', data);
      alert('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Create New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <label className="block text-lg mb-2">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

 
        <div className="mb-4">
          <label className="block text-lg mb-2">Price</label>
          <input
            type="number"
            {...register("price", { required: "Price is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.price && <span className="text-red-500">{errors.price.message}</span>}
        </div>


        <div className="mb-4">
          <label className="block text-lg mb-2">Stock Quantity</label>
          <input
            type="number"
            {...register("stockQuantity", { required: "Stock quantity is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.stockQuantity && <span className="text-red-500">{errors.stockQuantity.message}</span>}
        </div>

    
        <div className="mb-4">
          <label className="block text-lg mb-2">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
        </div>

      
        <div className="mb-4">
          <label className="block text-lg mb-2">Category</label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.category && <span className="text-red-500">{errors.category.message}</span>}
        </div>

       
        <div className="mb-4">
          <label className="block text-lg mb-2">Ratings</label>
          <input
            type="number"
            {...register("ratings", { required: "Ratings are required", min: 0, max: 5 })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.ratings && <span className="text-red-500">{errors.ratings.message}</span>}
        </div>

     
        <div className="mb-4">
          <label className="block text-lg mb-2">Images (comma-separated URLs)</label>
          <input
            type="text"
            {...register("images", { required: "Images are required" })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.images && <span className="text-red-500">{errors.images.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
