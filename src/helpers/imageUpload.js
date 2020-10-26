export const imageUpload = async(file) => {

    try {
        const cloudUrl = 'https://api.cloudinary.com/v1_1/delupy4vc/upload';

        const formData = new FormData();

        formData.append('upload_preset', 'instamern');
        formData.append('file', file);

        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Could not upload the picture');
        } 

        const cloudResponse = await response.json();
        console.log(cloudResponse);
        return cloudResponse.secure_url;
    } catch (error) {
        throw error;
    }
    
}