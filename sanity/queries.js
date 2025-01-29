export const POSTS_QUERY = `*[_type == "post"] {
  id,
  blogTitle,
  image: image.asset->url,
  date,
  content  
  }
}`;
