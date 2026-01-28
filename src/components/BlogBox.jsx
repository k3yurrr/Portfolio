import { Link } from "react-router-dom";

const BlogBox = ({ blog, withBorder }) => {
  return (
    <>
      <Link to={blog.url} aria-label="click on blog to read">
        <div
          className={`xs:flex-col xs:items-left lg:flex lg:items-center md:p-6 xs:p-3 ${
            withBorder
              ? "border-b border-[var(--light-border)] dark:border-[var(--dark-border)]"
              : ""
          }`}
        >
          <div className="flex flex-col w-2/3 xs:w-full">
            <h1 className="text-xl font-semibold mb-2 line-clamp-1 xs:text-md">
              {blog.title}
            </h1>
            <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] line-clamp-2 xs:text-sm">
              {blog.description}
            </p>
          </div>
          <div className="w-1/3 text-right text-sm font-medium xs:w-full xs:mt-2 lg:mt-0">
            {blog.date}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogBox;
