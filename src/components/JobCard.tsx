// components/JobCard.tsx

interface JobData {
  icon: string;
  tag: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  posted: string;
}

interface JobCardProps {
  bg: string;
  text: string;
  job: JobData;
}
export default function JobCard({ bg, text, job }: JobCardProps) {
  return (
    <div
      className={`rounded-3xl shadow-xs p-6 flex flex-col`}
      style={{ backgroundColor: bg, color: text }}
    >
      <span className="inline-flex items-center self-start text-(--color-primary) bg-white text-sm font-medium px-1.5 py-0.5 rounded-sm gap-2">
        <img src={job.icon} alt="" />
        {job.tag}
      </span>

      <h3 className="mt-3 mb-6 text-2xl font-semibold tracking-tight">{job.title}</h3>

      <div className="gap-2 flex flex-col">
        <span className="inline-flex items-center gap-2" style={{ color: text }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5Z" fill="currentColor"/> </svg>
          {job.location}
        </span>
        <span className="inline-flex items-center gap-2" style={{ color: text }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 6H21V18H3V6ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM7 8C7 8.53043 6.78929 9.03914 6.41421 9.41421C6.03914 9.78929 5.53043 10 5 10V14C5.53043 14 6.03914 14.2107 6.41421 14.5858C6.78929 14.9609 7 15.4696 7 16H17C17 15.4696 17.2107 14.9609 17.5858 14.5858C17.9609 14.2107 18.4696 14 19 14V10C18.4696 10 17.9609 9.78929 17.5858 9.41421C17.2107 9.03914 17 8.53043 17 8H7Z" fill="currentColor"/> </svg> 
          {job.salary}
        </span>
      </div>

      <p className="mt-6 mb-6 line-clamp-3">{job.description}</p>

      <a
        href="#"
        className="active:scale-95 active:shadow-inner select-none ease-in-out w-full text-center rounded-full text-(--color-primary) bg-white hover:bg-gray-100 px-4 py-3"
      >
        View this job
      </a>

      <p className="mt-6">Posted on {job.posted}</p>
    </div>
  );
}
