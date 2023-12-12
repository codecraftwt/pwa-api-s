export default function serviceWorker() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(swUrl).then(
        (registration) => {
          console.log(
            "Service worker registration succeeded:",
            registration.scope
          );
        },
        (error) => {
          console.error(`Service worker registration failed:`);
        }
      );
    });
  } else {
    console.error("Service workers are not supported.");
  }
}
  