import { NavigateFunction } from "react-router-dom";

export const scrollToComponent = (id: string, navigate?: NavigateFunction) => {
  // If we're not on the home page and have navigation, go there first
  if (navigate && window.location.pathname !== "/") {
    navigate("/");
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  } else {
    // If we're already on the home page, just scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
