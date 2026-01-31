import React from "react";

const AIInterview: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">AI Interview</h1>
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Interview Type
            </label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-blue-950 rounded-lg text-blue-950 bg-white hover:bg-[#00824b]/10">
                Technical Interview
              </button>
              <button className="p-4 border-2 border-blue-950 rounded-lg text-blue-950 bg-white hover:bg-[#00824b]/10">
                HR Interview
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Candidate Information
            </label>
            <div className="mt-2 space-y-4">
              <input
                type="text"
                placeholder="Role/Position"
                className="block w-full rounded-md border-gray-400 shadow bg-gray-200 focus:border-[#00824b] focus:ring-[#00824b]"
              />
              <input
                type="text"
                placeholder="Experience Level"
                className="block w-full rounded-md border-gray-400 shadow bg-gray-200 focus:border-[#00824b] focus:ring-[#00824b]"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00824b] hover:bg-[#005B24]"
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInterview;
