
export default function convertToBase64(imageprod: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageprod);
  
      fileReader.onload = () => {
        const result = fileReader.result as string;
        resolve(result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }