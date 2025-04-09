
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="pt-24 pb-12 bg-furniture-beige">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-furniture-walnut text-center">About Omar's Furniture</h1>
        </div>
      </div>
      
      <main>
        {/* Our Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-medium text-furniture-walnut mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2010 by Omar Jenkins, a third-generation furniture craftsman, 
                  Omar's Furniture was born from a passion for exquisite design and uncompromising quality.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  What began as a small workshop in Brooklyn has grown into a respected name in furniture design, 
                  known for blending traditional craftsmanship with modern aesthetics.
                </p>
                <p className="text-lg text-gray-700">
                  Our commitment remains the same as when we started: to create furniture that tells a story, 
                  stands the test of time, and transforms living spaces into homes.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
                  alt="Elegantly designed living room with Omar's furniture" 
                  className="rounded-sm w-full h-auto"
                />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-furniture-walnut rounded-sm hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-furniture-softwhite">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-medium text-furniture-walnut text-center mb-16">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-sm shadow-md">
                <div className="w-16 h-16 bg-furniture-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-furniture-walnut">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium text-furniture-walnut text-center mb-4">Craftsmanship</h3>
                <p className="text-gray-700 text-center">
                  We believe in the beauty of handcrafted pieces, where every detail matters and quality is never compromised.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-md">
                <div className="w-16 h-16 bg-furniture-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-furniture-walnut">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium text-furniture-walnut text-center mb-4">Innovation</h3>
                <p className="text-gray-700 text-center">
                  While honoring traditional techniques, we embrace modern design and innovative solutions for contemporary living.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-md">
                <div className="w-16 h-16 bg-furniture-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-furniture-walnut">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium text-furniture-walnut text-center mb-4">Sustainability</h3>
                <p className="text-gray-700 text-center">
                  We are committed to responsible sourcing and eco-friendly practices that respect our planet's resources.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-medium text-furniture-walnut text-center mb-16">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Omar Jenkins" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-serif font-medium text-furniture-walnut mb-2">Omar Jenkins</h3>
                <p className="text-furniture-darkbrown mb-4">Founder & Lead Designer</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  With over 20 years of experience, Omar brings vision and craftsmanship to every design.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Sofia Martinez" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-serif font-medium text-furniture-walnut mb-2">Sofia Martinez</h3>
                <p className="text-furniture-darkbrown mb-4">Creative Director</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Sofia's innovative approach to design keeps our collections fresh and forward-thinking.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="David Kim" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-serif font-medium text-furniture-walnut mb-2">David Kim</h3>
                <p className="text-furniture-darkbrown mb-4">Master Craftsman</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  David's attention to detail and expertise in woodworking are the foundation of our quality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
