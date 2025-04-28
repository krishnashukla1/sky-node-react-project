const FileUploader = ({ onChange, required }) => {
    return (
      <input
        type="file"
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          console.log('File selected:', selectedFile);
          onChange(e);
        }}
        required={required}
        className="file-uploader"
      />
    );
  };

export default FileUploader;