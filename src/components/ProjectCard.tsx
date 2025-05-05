type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
  };
  
  const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
      <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-white/80 mt-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-300 hover:text-blue-200 hover:underline transition-colors"
          >
            View project →
          </a>
        )}
      </div>
    );
  };
  
  export default ProjectCard;