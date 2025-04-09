
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="pt-24 pb-12 bg-furniture-beige">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-furniture-walnut text-center">Contact Us</h1>
        </div>
      </div>
      
      <main>
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-medium text-furniture-walnut mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <MapPin className="text-furniture-walnut mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-medium text-furniture-darkbrown mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        29 Summerville Rd<br />
                        Bradford BD7 1NS
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-furniture-walnut mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-medium text-furniture-darkbrown mb-2">Phone</h3>
                      <p className="text-gray-600">
                        Mobile: 07929 886930<br />
                        Office: 01274 726011
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-furniture-walnut mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-medium text-furniture-darkbrown mb-2">Email</h3>
                      <p className="text-gray-600">
                        muhammadimran308@yahoo.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-furniture-walnut mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-medium text-furniture-darkbrown mb-2">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9am - 7pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-furniture-cream p-6 rounded-sm">
                  <h3 className="text-xl font-serif font-medium text-furniture-walnut mb-4">Visit Our Showroom</h3>
                  <p className="text-gray-700 mb-4">
                    Experience our furniture in person. Our showroom features our complete collections in beautifully staged settings.
                  </p>
                  <a 
                    href="https://maps.google.com/?q=29+Summerville+Rd,+Bradford+BD7+1NS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-medium text-furniture-walnut mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-furniture-darkbrown mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-furniture-walnut focus:border-furniture-walnut"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-furniture-darkbrown mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-furniture-walnut focus:border-furniture-walnut"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-furniture-darkbrown mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-furniture-walnut focus:border-furniture-walnut"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Delivery Question">Delivery Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-furniture-darkbrown mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-furniture-walnut focus:border-furniture-walnut"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <div className="h-96 bg-gray-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.4099325365574!2d-1.7781892!3d53.7864659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be15605627e99%3A0x8f580222e0f6f933!2s29%20Summerville%20Rd%2C%20Bradford%20BD7%201NS!5e0!3m2!1sen!2suk!4v1712684689780!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Omar's Furniture Location"
          ></iframe>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
