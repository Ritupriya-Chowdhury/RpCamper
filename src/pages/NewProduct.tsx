import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { createProduct } from '../redux/features/productSlice';
import { useState } from 'react';
import { useBeforeUnload } from '../component/RefreshWarning';

type ProductForm = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratings: number;
};

const CreateProduct = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);
  const dispatch = useAppDispatch();
  const [images, setImages] = useState<string[]>([]); 
  const { loading, error } = useAppSelector((state: RootState) => state.products);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductForm>();

  const onSubmit: SubmitHandler<ProductForm> = async (data) => {
    const productData = {
      ...data,
      price: Number(data.price),
      stockQuantity: Number(data.stockQuantity),
      ratings: Number(data.ratings),
      images: images.length > 0 ? images : [""], 
      isDeleted: false,
      __v: 0,
    };
    console.log("Product Data:", productData); 
  
    try {
      await dispatch(createProduct(productData)).unwrap();
      alert('Product created successfully!');
      reset();
      setImages([]);
    } catch (err) {
      console.error('Error creating product:', err);
      alert('Failed to create product. Please try again later.');
    }
  };
  

  const handleImageInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const input = e.currentTarget.value;
      if (input && !images.includes(input)) {
        setImages((prev) => [...prev, input]);
        e.currentTarget.value = '';
      }
    }
  };

  return (
    <div className={`pt-32 pb-4 ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-200'}`}>
      <div className="max-w-3xl mx-auto p-8 rounded-lg bg-white">
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
              {...register("price", { required: "Price is required", min: 0 })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.price && <span className="text-red-500">{errors.price.message}</span>}
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Stock Quantity</label>
            <input
              type="number"
              {...register("stockQuantity", { required: "Stock quantity is required", min: 0 })}
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
            <label className="block text-lg mb-2">Images (add each URL and press Enter)</label>
            <input
              type="text"
              onKeyDown={handleImageInput}
              className="w-full px-4 py-2 border rounded-md"
            />
            <div className="mt-2">
              {images.map((img, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{img}</span>
                  <button type="button" onClick={() => setImages(images.filter((_, i) => i !== index))} className="text-red-500">Remove</button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md"
            disabled={loading}
          >
            {loading ? 'Creating Product...' : 'Create Product'}
          </button>
          {error && <span className="text-red-500">{error}</span>} 
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
