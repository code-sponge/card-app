export default class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'h1krjupl');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/sponge-code/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await res.json();
  }
}
