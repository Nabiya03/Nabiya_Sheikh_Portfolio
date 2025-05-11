// import { useState } from 'react';
// import { Send, Mail, MapPin, Phone } from 'lucide-react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [submitted, setSubmitted] = useState(false);
//   const [responseMessage, setResponseMessage] = useState();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
  
//   //   try {
//   //     const response = await fetch(import.meta.env.VITE_CONTACT_API, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(formData)
//   //     });
  
//   //     if (response.ok) {
//   //       console.log('Form submitted:', formData);
//   //       setSubmitted(true);
//   //       setFormData({ name: '', email: '', message: '' });
//   //     } else {
//   //       console.error('Failed to send message');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error submitting form:', error);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!formData.name || !formData.email || !formData.message) {
//       setResponseMessage('Please fill in all fields.');
//       return;
//     }
  
//     setSubmitted(true);
  
//     // try {
//     //   console.log("xyz>>>>",import.meta.env.VITE_CONTACT_API);
//     //   const response = await fetch(import.meta.env.VITE_CONTACT_API, {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(formData),
//     //     // mode: 'cors'
//     //   });
  
//     //   console.log("response :", response);
//     //   const data = await response.json();
  
//     //   if (response.ok) {
//     //     //setResponseMessage('Message sent successfully!');
//     //     setFormData({ name: '', email: '', message: '' });
//     //    } 
//     //    //else {
//     //   //   setResponseMessage(data.message || 'Something went wrong.');
//     //   // }
//     // } catch (error) {
//     //   console.error(error);
//     //   setResponseMessage('Failed to send message. Try again later.');
//     // } finally {
//     //   setSubmitted(false);
//     // }

//     try {
//       const response = await axios.post(import.meta.env.VITE_CONTACT_API, formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
    
//       console.log('Response:', response.data);
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Axios error:', error);
//       setResponseMessage('Failed to send message. Try again later.');
//     } finally {
//       setSubmitted(false);
//     }
//   };
  

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach out!
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="flex flex-col gap-8">
//             <div className="flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
//                 <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
//                 <a 
//                   href="mailto:nabiyaa.sheikh19@gmail.com" 
//                   className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   nabiyaa.sheikh19@gmail.com
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
//                 <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   Liverpool, UK
//                 </p>
//               </div>
//             </div>
            
//             {/* <div className="flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
//                 <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
//                 <a 
//                   href="tel:+14155551234" 
//                   className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   +1 (415) 555-1234
//                 </a>
//               </div>
//             </div> */}
//           </div>
          
//           {/* Contact Form */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center h-full">
//                 <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
//                   <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                   Message Sent!
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300 text-center">
//                   Thank you for reaching out. I'll get back to you soon!
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label 
//                     htmlFor="name" 
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Name
//                   </label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     name="name" 
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label 
//                     htmlFor="email" 
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email" 
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                     placeholder="Your email"
//                   />
//                 </div>
                
//                 <div>
//                   <label 
//                     htmlFor="message" 
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Message
//                   </label>
//                   <textarea 
//                     id="message" 
//                     name="message" 
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
//                     placeholder="Your message"
//                   ></textarea>
//                 </div>
                
//                 <button 
//                   type="submit" 
//                   className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
//                 >
//                   <Send className="w-4 h-4" />
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import { useState } from 'react';
// import { Send, Mail, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [submitted, setSubmitted] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!formData.name || !formData.email || !formData.message) {
//       setResponseMessage('Please fill in all fields.');
//       return;
//     }
  
//     setIsSubmitting(true);
//     setResponseMessage('');
  
//     try {
//       // Replace this URL with your API Gateway endpoint
//       const API_URL = import.meta.env.VITE_CONTACT_API;
      
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
      
//       const data = await response.json();
      
//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setResponseMessage(data.message || 'Failed to send message.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setResponseMessage('Network error. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach out!
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="flex flex-col gap-8">
//             <div className="flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
//                 <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
//                 <a 
//                   href="mailto:nabiyaa.sheikh19@gmail.com" 
//                   className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   nabiyaa.sheikh19@gmail.com
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex gap-4 items-start">
//               <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
//                 <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   Liverpool, UK
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center h-full">
//                 <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
//                   <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                   Message Sent!
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300 text-center">
//                   Thank you for reaching out. I'll get back to you soon!
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {responseMessage && (
//                   <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//                     {responseMessage}
//                   </div>
//                 )}
                
//                 <div>
//                   <label 
//                     htmlFor="name" 
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Name
//                   </label>
//                   <input 
//                     type="text" 
//                     id="name" 
//                     name="name" 
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label 
//                     htmlFor="email" 
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email" 
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//                     placeholder="Your email"
//                   />
//                 </div>
                
//                 <div>
//                   <label 
//                     htmlFor="message" 
//                     className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//                   >
//                     Message
//                   </label>
//                   <textarea 
//                     id="message" 
//                     name="message" 
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
//                     placeholder="Your message"
//                   ></textarea>
//                 </div>
                
//                 <button 
//                   type="submit" 
//                   disabled={isSubmitting}
//                   className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       <span>Sending...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage('Please fill in all fields.');
      return;
    }
  
    setIsSubmitting(true);
    setResponseMessage('');
  
    try {
      // Direct URL to your HTTP API
      const API_URL = 'https://v1uom0ei1h.execute-api.ap-south-1.amazonaws.com/default/mailService';
      
      console.log('Sending data:', formData);
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // No need for additional headers for HTTP API
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', response.status);
      
      // Try to parse the response as JSON
      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log('Response data:', data);
      } else {
        const text = await response.text();
        console.log('Response text:', text);
        // Try to parse text as JSON as a fallback
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.log('Response is not JSON');
        }
      }
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage((data && data.message) || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a 
                  href="mailto:nabiyaa.sheikh19@gmail.com" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  nabiyaa.sheikh19@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Liverpool, UK
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {responseMessage && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {responseMessage}
                  </div>
                )}
                
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;