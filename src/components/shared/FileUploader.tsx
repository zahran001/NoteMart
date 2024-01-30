import { useCallback, useState, useEffect } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    fieldChange(acceptedFiles);

    const currentFile = acceptedFiles[0];
    if (currentFile && currentFile.type.startsWith('image/')) {
      setFileUrl(URL.createObjectURL(currentFile));
    } else {
      // For non-image files (PDF), set a placeholder URL
      setFileUrl('/assets/icons/pdf-icon.svg');
    }
  }, [fieldChange]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.svg'],
      'application/pdf': ['.pdf'],
    },
  });

  useEffect(() => {
    // Clean up the object URL if it's an image
    return () => {
      if (fileUrl && !fileUrl.endsWith('pdf-icon.svg')) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  return (
    <div {...getRootProps()} className="flex flex-col bg-dark-3 rounded-xl cursor-pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {
        fileUrl ? (
          files[0]?.type.startsWith('image/') ? (
            <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
              <img src={fileUrl} alt="Preview" className='file_uploader-img'/>
            </div>
          ) : (
            <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
              <img src={fileUrl} alt="PDF icon" className='file_uploader-img'/>
            </div>
          )
        ) : (
          <div className="file_uploader-box">
            <img src="/assets/icons/file-upload.svg" width={96} height={77} alt="file-upload" />
            <h3 className='base-medium text-white mb-2 mt-6'>Drag photo here</h3>
            <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG, PDF</p>
            <Button className="shad-button_dark_4" items-center>
              Select from your computer
            </Button>
          </div>
        )
      }
    </div>
  );
};

export default FileUploader;
