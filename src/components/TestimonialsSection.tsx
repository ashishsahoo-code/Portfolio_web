
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Gupta',
      role: 'Platform Manager',
      company: 'Accenture , GSK PLC',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Ashish delivered exceptional work on our GSK Project. His attention to detail and ability to solve complex problems made our project a huge success. The final product exceeded our expectations."
    },
    {
      id: 2,
      name: 'Anuhsri Jain',
      role: 'Senior Analyst',
      company: 'Accenture , GSK PLC' ,
      image: 'https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Working with Ashish was a game-changer for our GSK project. He built our web application from scratch and delivered it on time . His technical expertise is outstanding."
    },
    {
      id: 3,
      name: 'Akhila Muraleedharan',
      role: 'Tech Specialist',
      company: 'Accenture , OPTUM (UHG)',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Ashish has an incredible ability to up the work and deliver it before the deadlines. He perfectly translated our complex design concepts into functional, beautiful web applications. A true professional."
    },
    {
      id: 4,
      name: 'Sangameshwaram Kumar',
      role: 'Platform Advisory Manager',
      company: 'Accenture , OPTUM (UHG)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Ashish's full-stack development skills helped us launch our MVP in record time. His code quality is excellent, and he's always available for support. Highly recommended!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">What Clients Say</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Don't just take my word for it - hear from some of the amazing people I've worked with
          </p>

          {/* Main Testimonial Display */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 text-center relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-neon-blue/30">
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-neon-teal text-neon-teal" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-8 relative z-10">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-blue/50">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg text-gradient">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-neon-blue shadow-lg'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === activeTestimonial ? 'ring-2 ring-neon-blue' : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-neon-teal text-neon-teal" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
