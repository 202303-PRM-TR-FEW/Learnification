export async function getFeaturedCourses(host, protocol, email) {
  const res = await fetch(`${protocol}://${host}/api/featured-courses`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
  return res;
}
export async function getFeaturedCoursesWOEmail(host, protocol) {
  const res = await fetch(`${protocol}://${host}/api/featured-courses`);
  return res;
}