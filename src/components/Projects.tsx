import Project from "./Project";

export default function Projects() {
  return (
    <div className="w-[80%] max-w-[1200px] mx-auto mb-[3em] max-[550px]:w-[90%]">
      <h1 className="mb-[1em]">Projects</h1>
      <div className="grid grid-cols-3 gap-[1em] max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
        <Project
          title={"Social Media Analystics Dashboard"}
          description={
            "Built with React, React Router DOM, and state management, this project uses Tailwind CSS for styling and D3.js for interactive data visualizations."
          }
          path={
            "https://social-media-analystics-dashboard-nexg2l0c9.vercel.app/"
          }
        />
        <Project
          title={"Advance Todo Application"}
          description={
            "A React-based Todo app with CSS3 styling, task filtering (all, completed, uncompleted), and React-Toastify for error alerts."
          }
          path={"https://todo-application-tau-wine.vercel.app/"}
        />
        <Project
          title={"E-Commerce React Application"}
          description={
            "A React-based E-commerce app with CSS3 styling, featuring a responsive product grid and a “My Cart” section for items users wish to purchase."
          }
          path={"https://e-commerce-application-ashy.vercel.app/"}
        />
      </div>
    </div>
  );
}
