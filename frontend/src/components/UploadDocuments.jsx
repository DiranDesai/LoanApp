import React, {useEffect, useState} from 'react'
import {useFormContext} from "../context/FormContext"

function UploadDialog({handleFileChange}) {
    return (
        <div className="border border-dashed border-red-400 rounded-lg p-5 flex flex-col items-center justify-center h-48">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 2a1 1 0 00-.707.293l-7 7a1 1 0 000 1.414l7 7A1 1 0 0010 18h8a2 2 0 002-2v-8a1 1 0 00-.293-.707l-7-7A1 1 0 0010 2zM9.414 3H16v6.586L9.414 3zM4.586 10L10 4.586V11a1 1 0 01-1.293.707l-5-5A1 1 0 014.586 10zM3.293 12.293l5.293-5.293L11.414 10H4v6h6.586l-.707-.707L3.293 12.293z" />
                </svg>
            </div>
            <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="mb-4"
                accept="application/pdf"
            />
            <p className="text-gray-600 text-center">Drag and drop your files here or click to upload</p>

        </div>
    )
}

function UploadedFile({ key, file }) {
    const [blobUrl, setBlobUrl] = useState(null);

    useEffect(() => {
        if (file && file.type === "application/pdf") {
            const url = URL.createObjectURL(file);
            setBlobUrl(url);
        }    
    }, [])


    function removeFile(key){
        console.log(key)
    }

    // const blobUrl = URL.createObjectURL(file);



    console.log(file)
    return (
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 2a1 1 0 00-.707.293l-7 7a1 1 0 000 1.414l7 7A1 1 0 0010 18h8a2 2 0 002-2v-8a1 1 0 00-.293-.707l-7-7A1 1 0 0010 2zM9.414 3H16v6.586L9.414 3zM4.586 10L10 4.586V11a1 1 0 01-1.293.707l-5-5A1 1 0 014.586 10zM3.293 12.293l5.293-5.293L11.414 10H4v6h6.586l-.707-.707L3.293 12.293z" />
                </svg> */}
                <img src={blobUrl} alt="" className="w-20 h-10" />
                {/* {blobUrl && (
                // <iframe
                // src={blobUrl}
                // width="100%"
                // height="600px"
                // title="PDF Preview"
                // className="mt-4"
                // ></iframe>
            )} */}

                <p className="text-gray-600">{file.name}</p>
            </div>
            <button className="text-red-500 hover:text-red-700" onClick={() => removeFile(key)}>Remove</button>
        </div>
    )
}

function UploadDocuments() {
    const { formData, updateFormData } = useFormContext();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        setSelectedFiles(files);

        updateFormData("documents", files)
    };

    return (
        <div>
            <UploadDialog handleFileChange={handleFileChange} />
            {selectedFiles.map((file, index) => (
                <UploadedFile key={index} file={file} />
            ))}
        </div>
    )
}

export default UploadDocuments