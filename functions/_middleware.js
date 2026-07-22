// www.kokubunrei.com → kokubunrei.com へ 301 リダイレクト（パス・クエリ保持）
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.kokubunrei.com") {
    url.hostname = "kokubunrei.com";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
