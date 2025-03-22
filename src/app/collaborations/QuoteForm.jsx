function QuoteForm() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <div className="flex justify-center items-center bg-white">
        <div className="w-full max-w-2xl p-8 shadow-lg border rounded-lg">
          <h3 className="text-xl font-bold text-center mb-6">
            Tell us what you need, and we'll help you get quotes
          </h3>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label htmlFor="product" className="text-sm font-medium md:min-w-32">I want quotes for</label>
              <select id="product" className="border rounded-lg p-2 flex-1 w-full">
                <option>Cable Ties</option>
                <option>Electrical Components</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label htmlFor="phone" className="text-sm font-medium md:min-w-32">Mobile Number</label>
              <input
                id="phone"
                type="tel"
                className="border rounded-lg p-2 flex-1 w-full"
                placeholder="+91 Enter your mobile"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label htmlFor="email" className="text-sm font-medium md:min-w-32">Email ID</label>
              <input
                id="email"
                type="email"
                className="border rounded-lg p-2 flex-1 w-full"
                placeholder="Enter your mail id"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="bg-[#880909] text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
