import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";



//...

const client = createClient({
  projectId: "z6ulhdx6",
  dataset: "production",
  apiVersion: "2025-01-20",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  console.log(source);
  return builder.image(source);
}

export function sendEmailRequest({ data, success, fail }) {
  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {},
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY, data, ).then(
    (result) => {
      console.log(`${result.text}, request sent successfully, response to be received within 24hours.`,)
      success()
    },
    (error) => {
      console.log( error.text || 'error sending request, please retry.',)
      fail()
    },
  )
}

export default client;
