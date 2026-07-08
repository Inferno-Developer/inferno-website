import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetchPosts, formatDate } from "../blog/api";
import { BlogPost } from "../blog/types";

const BlogIndex: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchPosts().then((p) => {
      if (active) {
        setPosts(p);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="section relative overflow-hidden pt-32 md:pt-40">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="section-title">
              <h1 className="gradient-text inline-block">The Inferno Blog</h1>
              <p className="section-subtitle">
                Creator growth strategies, industry insight, and the systems we
                use to help our creators win.
              </p>
            </div>

            {loading ? (
              <div className="text-center text-text-muted py-20">
                Loading articles…
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center text-text-muted py-20">
                No articles yet. Check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="card group flex flex-col overflow-hidden !p-0"
                  >
                    {post.coverImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                        <span>{formatDate(post.date)}</span>
                        {post.tags && post.tags.length > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-accent-purple">
                              {post.tags[0]}
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-purple transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-text-secondary text-sm flex-1">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center text-accent-purple text-sm font-medium">
                        Read article
                        <ArrowRight
                          size={16}
                          className="ml-1 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
