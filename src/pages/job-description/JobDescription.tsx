import React from "react";

const JobDescription: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Job Description Generator
      </h1>
      <div className="bg-gray-100 rounded-lg shadow-xl p-6">
        <div className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-800"
            >
              Job Role
            </label>
            <input
              type="text"
              id="role"
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm bg-gray-200 focus:border-gray-800 focus:ring-border-gray-800"
              placeholder="e.g. Senior Software Engineer"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-800"
            >
              Key Requirements
            </label>
            <textarea
              id="requirements"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm bg-gray-200 focus:border-gray-800 focus:ring-border-gray-800"
              placeholder="Enter key requirements and skills..."
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00824b] hover:bg-[#005B24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#125756]"
          >
            Generate Job Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
