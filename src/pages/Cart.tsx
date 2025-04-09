
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample cart data - in a real app, this would come from state management or context
const initialCartItems = [
  {
    id: 1,
    name: "Harmony Sofa",
    price: 1299.99,
    quantity: 1,
    imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    id: 3,
    name: "Nova Dining Table",
    price: 899.99,
    quantity: 1,
    imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { toast } = useToast();

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 99.99 : 0;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "In a real application, you would be redirected to a payment page.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="pt-24 pb-12 bg-furniture-beige">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-furniture-walnut text-center">Your Cart</h1>
        </div>
      </div>
      
      <main className="py-16">
        <div className="container-custom">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-sm shadow-md p-6">
                  <h2 className="text-2xl font-serif font-medium text-furniture-walnut mb-6">Shopping Cart ({cartItems.length} items)</h2>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-32 h-32 flex-shrink-0">
                          <img 
                            src={item.imageSrc} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-sm"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-lg font-medium text-furniture-darkbrown">{item.name}</h3>
                          <p className="text-gray-500 mb-4">Unit Price: ${item.price.toFixed(2)}</p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex border border-gray-300 rounded-sm overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-1 flex items-center justify-center min-w-[40px]">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right font-medium text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-between border-t border-gray-200 pt-6">
                    <a href="/shop" className="text-furniture-walnut hover:text-furniture-darkbrown transition-colors">
                      &larr; Continue Shopping
                    </a>
                    <button 
                      onClick={() => setCartItems([])}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-sm shadow-md p-6 sticky top-24">
                  <h2 className="text-2xl font-serif font-medium text-furniture-walnut mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleCheckout}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Proceed to Checkout
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  
                  <div className="mt-6 text-xs text-gray-500 text-center">
                    <p>Shipping costs calculated at checkout.</p>
                    <p className="mt-2">We accept:
                      <span className="font-medium text-gray-700"> Visa, Mastercard, American Express, PayPal</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-furniture-beige rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-furniture-walnut">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-medium text-furniture-walnut mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <a href="/shop" className="btn-primary inline-block">
                Start Shopping
              </a>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
