import React from "react";

const ResumeMatch: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Resume Match</h1>
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center">
            <div className="mt-2">
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00824b] hover:bg-[#005B24]"
              >
                <span>Upload Resume</span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              PDF, DOC, DOCX up to 10MB
            </p>
          </div>

          <div className="mt-6">
            <label
              htmlFor="job-description"
              className="block text-sm font-medium text-gray-700"
            >
              Job Description
            </label>
            <textarea
              id="job-description"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-400 shadow bg-gray-200 focus:border-[#00824b] focus:ring-[#00824b]"
              placeholder="Paste the job description here..."
            />
          </div>

          <button
            type="button"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00824b] hover:bg-[#005B24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#125756]"
          >
            Analyze Match
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeMatch;
