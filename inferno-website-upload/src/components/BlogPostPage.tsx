import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetchPost, formatDate } from "../blog/api";
import { BlogPost } from "../blog/types";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchPost(slug ?? "").then((p) => {
      if (active) {
        setPost(p);
        setLoading(false);
      }
    });
    window.scrollTo(0, 0);
    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Inferno Agency`;
    }
  }, [post]);

  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />

      <main className="flex-1">
        <article className="section relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10 max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center text-text-secondary hover:text-accent-purple transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to all articles
            </Link>

            {loading ? (
              <div className="text-center text-text-muted py-20">Loading…</div>
            ) : !post ? (
              <div className="text-center text-text-muted py-20">
                <h1 className="text-2xl font-bold mb-4">Article not found</h1>
                <p className="mb-6">
                  This article may have been moved or removed.
                </p>
                <Link to="/blog" className="btn-primary">
                  Back to the blog
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                  <span>{formatDate(post.date)}</span>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>

                <h1 className="mb-6">{post.title}</h1>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-background-light text-accent-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {post.coverImage && (
                  <div className="rounded-xl overflow-hidden mb-10 shadow-2xl">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="blog-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800">
                  <Link to="/#apply" className="btn-primary">
                    Work with Inferno Agency
                  </Link>
                </div>
              </>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
