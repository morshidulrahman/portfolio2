import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "wtdfzmx3",
  dataset: 'production',
  apiVersion: '2022-10-22',
  useCdn: true,
  token: "sk2Rm44IBVaPTbu7Bgt2Vl0FaWmfnMenctETGVLikj2a7WBPTK4pQOcotvHUu0NyU20sM2BoZB24teiGHJoGmwGu0zPDmu6N1oT7PQeW54fyDvA84JDHD5HvS2hIr0fN23cncx1sYVy65Jta50YazgZYcjctJTh1wZ3jArKFGdTIQFLYZp5x"
});

const builder = imageUrlBuilder(client);

console.log(builder)

export const urlFor = (source) => builder.image(source);
