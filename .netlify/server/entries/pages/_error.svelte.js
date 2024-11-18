import { h as head } from "../../chunks/index.js";
function _error($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>404 Page Not Found</title>`;
  });
  $$payload.out += `<section class="section-404"><div class="container"><div class="row"><div class="text-center"><img src="/imgs/template/404.png" alt="bg"> <h1 class="mt-8">OOPS! Something went wrong!</h1> <p class="fs-5 mb-4">Locks like this page doesn’t exits. Go back to <a href="/" class="text-primary">Home</a> and continue exploring.</p> <a href="/" class="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">Back to Home <i class="ri-arrow-right-up-line"></i></a></div></div></div></section>`;
}
export {
  _error as default
};
