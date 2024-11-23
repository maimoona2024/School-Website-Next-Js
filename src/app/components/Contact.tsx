import React from 'react';

const Contact = () => (
  <div>
    <div id="contact" className="mt-3 bg-transparent text-purple-950 h-10 w-screen flex justify-center">
      <h1 className="text-center font-sans font-bold text-4xl hover:text-gray-400">Contact Us</h1>
    </div>
    <div className="grid grid-cols-2 mx-6 my-10">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl text-purple-950">Contact Us:</h1>
        <p className="font-sans">
          We value your questions, feedback, and ideas. Whether you&apos;re a parent seeking guidance, a student exploring opportunities, or a community member looking to connect, we&apos;re here to listen. At Sunshine School, we believe that communication builds stronger relationships and helps us grow together. Reach out to us and let&apos;s make a difference in education, one conversation at a time.
        </p>
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-4 mt-2">
        <input className="border-2 border-purple-950 rounded-sm" type="text" placeholder="Name" />
        <input className="border-2 border-purple-950 rounded-sm" type="text" placeholder="E-mail" />
        <textarea
          className="border-2 border-purple-950 rounded-sm"
          rows={8}
          id="message"
          placeholder="Write your message here..."
        ></textarea>
        <button
          type="button"
          className="w-32 text-lg focus:outline-none text-white bg-purple-950 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

export default Contact;
