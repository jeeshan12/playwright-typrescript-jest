test("Open a Web page", async () => {
  await page.goto("https://www.flipkart.com/");
//   const text = await page.$eval(
//     'div._1D1L_j  [type="submit"]',
//     ($el) => $el.textContent
//   );
//   expect(text).toBe('Login');
// with expect-playwright
await expect(page).toMatchText(`div._1D1L_j  [type="submit"]`, "Login");

});
