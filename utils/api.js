export async function getFeaturedCourses(host, protocol) {
  const res = await fetch(`${protocol}://${host}/api/featured-courses`);
  return res;
}
