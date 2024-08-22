import Image from "next/image";
import Link from "next/link";

interface IStackProject {
  id: number;
  text: string;
}

const Portfolio = () => {
  const stackProject: IStackProject[] = [
    { id: 1, text: "React" },
    { id: 2, text: "Ts" },
    { id: 3, text: "Scss" },
    { id: 4, text: "Firebase" },
  ];

  return (
    <section className="mt-60">
      <div>
        <h4
          id="portfolio"
          className="section_title mb-3"
        >
          My Portfolio
        </h4>
        <h2 className="section_desc mb-20">
          All projects are made by the author - Senka
        </h2>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <Image
            className="rounded-3xl"
            src="/img/project_1.png"
            alt="project-1"
            width={475}
            height={255}
          />
        </div>
        <div className="max-w-lg flex flex-col items-center justify-center">
          <h2 className="font-extrabold text-3xl mb-5">Notes</h2>
          <p className="text-center max-w-80 text-slate-500 ">
            A note project is similar to Trello. There are boards that you can
            create, as well as tasks, and change tasks between boards. There is
            a profile, change profile, form, home page
          </p>
          <ul className="flex mt-3 items-center">
            {stackProject.map((el) => (
              <li key={el.id}>
                <h4 className="font-extrabold mr-4">{el.text}</h4>
              </li>
            ))}
            <Link href="https://github.com/Senechkaaa/notes">
              <Image
                src="/img/github_logo.png"
                alt="github_project"
                width={35}
                height={35}
              />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
