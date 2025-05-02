type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
  };
  
  const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
      <div className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View project →
          </a>
        )}
      </div>
    );
  };
  
  export default ProjectCard;
  