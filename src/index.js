import { auth } from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import ImageFileInput from './components/image_file_input/image_file_input';
import './index.module.css';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);
