import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => {
          return (
            <h1 className="mb-4 text-heading-md md:text-heading-xl">
              {children}
            </h1>
          );
        },
        h2: ({ children }) => {
          return (
            <h2 className="mb-4 mt-8 text-heading-sm md:text-heading-lg">
              {children}
            </h2>
          );
        },
        a: ({ href, children }) => {
          return (
            <a href={href} className="text-blue-200 hover:underline">
              {children}
            </a>
          );
        },
        p: ({ children }) => {
          return (
            <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
          );
        },
        strong: ({ children }) => {
          return (
            <strong className="font-extrabold text-gray-100">{children}</strong>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
