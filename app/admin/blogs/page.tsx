"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  coverImageUrl: string | null;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const ADMIN_USERNAME = "wiseadmin";
const ADMIN_PASSWORD = "supersecure";

export default function AdminBlogsPage() {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [isUploadingInlineImage, setIsUploadingInlineImage] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined"
      ? window.localStorage.getItem("blogAdminAuthed")
      : null;
    if (stored === "true") {
      setIsAuthed(true);
      void fetchBlogs();
    }
  }, []);

  useEffect(() => {
    if (isAuthed) {
      void fetchBlogs();
      if (typeof window !== "undefined") {
        window.localStorage.setItem("blogAdminAuthed", "true");
      }
    }
  }, [isAuthed]);

  async function fetchBlogs() {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to load blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthed(true);
    } else {
      alert("Invalid credentials");
    }
  }

  function handleLogout() {
    setIsAuthed(false);
    setUsername("");
    setPassword("");
    setBlogs([]);
    resetForm();
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("blogAdminAuthed");
    }
  }

  function resetForm() {
    setSelectedId(null);
    setIsEditing(false);
    setTitle("");
    setSlug("");
    setCoverImageUrl("");
    setContent("");
    setPublished(true);
  }

  function handleEdit(blog: Blog) {
    setSelectedId(blog.id);
    setIsEditing(true);
    setTitle(blog.title);
    setSlug(blog.slug);
    setCoverImageUrl(blog.coverImageUrl ?? "");
    setContent(blog.content);
    setPublished(blog.published);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        title,
        slug,
        content,
        coverImageUrl: coverImageUrl || null,
        published,
      };

      const res = await fetch(
        selectedId ? `/api/blogs/${selectedId}` : "/api/blogs",
        {
          method: selectedId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to save blog");
      }

      await fetchBlogs();
      resetForm();
    } catch (error) {
      console.error(error);
      alert("Failed to save blog");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this blog?")) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchBlogs();
      if (selectedId === id) resetForm();
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog");
    }
  }

  async function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/blogs/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setCoverImageUrl(data.url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image");
    }
  }

  function insertTextAtCursor(text: string) {
    const textarea = contentRef.current;
    if (!textarea) {
      setContent((prev) => prev + text);
      return;
    }

    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? textarea.value.length;
    const value = textarea.value;

    const newValue = value.slice(0, start) + text + value.slice(end);
    setContent(newValue);

    const cursor = start + text.length;
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(cursor, cursor);
    });
  }

  async function uploadInlineImage(file: File) {
    setIsUploadingInlineImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/blogs/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();

      const markdown = `\n\n![image description](${data.url})\n\n`;
      insertTextAtCursor(markdown);
    } catch (error) {
      console.error(error);
      alert("Failed to upload inline image");
    } finally {
      setIsUploadingInlineImage(false);
    }
  }

  async function handleContentDrop(e: React.DragEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    await uploadInlineImage(file);
  }

  async function handleContentPaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const items = e.clipboardData.files;
    const file = items?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    e.preventDefault();
    await uploadInlineImage(file);
  }

  if (!isAuthed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050A1B]">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-xl p-6 text-white space-y-4">
          <h1 className="text-xl font-semibold text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-800 border-slate-700"
              />
            </div>
            <Button type="submit" className="w-full">
              Enter
            </Button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050A1B] text-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
              Secret area
            </p>
            <h1 className="text-2xl font-bold">Blog Admin</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-slate-600 bg-slate-900/60 text-white hover:bg-slate-800 hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Editor + Live preview (only when creating or editing) */}
        {isEditing && (
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <section className="space-y-4 bg-slate-950/60 border border-slate-800 rounded-xl p-5">
              <h2 className="text-lg font-semibold">
                {selectedId ? "Edit Blog" : "New Blog"}
              </h2>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-slate-900 border-slate-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (used in URL)</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="bg-slate-900 border-slate-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Cover image</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadImage}
                    className="bg-slate-900 border-slate-700"
                  />
                  <Input
                    placeholder="Or paste image URL"
                    value={coverImageUrl}
                    onChange={(e) => setCoverImageUrl(e.target.value)}
                    className="bg-slate-900 border-slate-700 mt-2"
                  />
                  {coverImageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={coverImageUrl}
                      alt="Cover preview"
                      className="mt-2 w-full h-auto rounded-md border border-slate-700"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Markdown Content</Label>
                  <div className="rounded-md border border-slate-700 bg-slate-950/60">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-300">
                      <span>
                        Write in Markdown. Drop or paste images to auto-insert
                        markdown.
                      </span>
                      {isUploadingInlineImage && (
                        <span className="text-blue-400">Uploading image…</span>
                      )}
                    </div>
                    <Textarea
                      id="content"
                      ref={contentRef}
                      rows={20}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      onDrop={handleContentDrop}
                      onDragOver={(e) => e.preventDefault()}
                      onPaste={handleContentPaste}
                      className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[400px] resize-y"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={published}
                      onChange={(e) => setPublished(e.target.checked)}
                    />
                    <span>Published</span>
                  </label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-slate-600"
                      onClick={resetForm}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={saving}>
                      {saving ? "Saving..." : "Save"}
                    </Button>
                  </div>
                </div>
              </form>
            </section>
            <section className="space-y-4 bg-slate-950/60 border border-slate-800 rounded-xl p-5">
              <h2 className="text-lg font-semibold">Live Preview</h2>
              <div className="border border-slate-800 rounded-lg p-4 bg-slate-950/80 max-h-[560px] overflow-y-auto">
                {coverImageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={coverImageUrl}
                    alt="Cover preview"
                    className="w-full h-auto rounded-md border border-slate-700 mb-6"
                  />
                )}
                {content ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="mt-4 mb-2 text-lg font-semibold"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="mt-3 mb-1 text-base font-semibold"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p
                          className="mt-2 text-xs leading-relaxed text-slate-100"
                          {...props}
                        />
                      ),
                      li: ({ node, ordered, ...props }) => (
                        <li
                          className="ml-4 text-xs leading-relaxed text-slate-100 list-disc"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                ) : (
                  <p className="text-sm text-slate-500">
                    Start typing markdown on the left to see a live preview.
                  </p>
                )}
              </div>
            </section>
          </div>
        )}

        {/* Blog table */}
        <section className="space-y-4 bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">All Blogs</h2>
              {loading && (
                <span className="text-sm text-slate-400">Loading…</span>
              )}
            </div>
            <Button
              variant="outline"
              className="border-slate-600 bg-slate-900/60 text-white hover:bg-slate-800 hover:text-white"
              onClick={() => {
                resetForm();
                setIsEditing(true);
              }}
            >
              New Blog
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2 pr-4 text-left font-normal">Title</th>
                  <th className="py-2 pr-4 text-left font-normal">Slug</th>
                  <th className="py-2 pr-4 text-left font-normal">Status</th>
                  <th className="py-2 pr-4 text-left font-normal whitespace-nowrap">
                    Updated
                  </th>
                  <th className="py-2 text-right font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b border-slate-900 last:border-b-0 hover:bg-slate-900/40"
                  >
                    <td className="py-2 pr-4">
                      <button
                        type="button"
                        className="font-medium text-left hover:text-blue-400"
                        onClick={() => handleEdit(blog)}
                      >
                        {blog.title}
                      </button>
                    </td>
                    <td className="py-2 pr-4 text-slate-300">
                      <span className="font-mono text-xs">/{blog.slug}</span>
                    </td>
                    <td className="py-2 pr-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${
                          blog.published
                            ? "border-emerald-500 text-emerald-400"
                            : "border-slate-600 text-slate-300"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="py-2 pr-4 text-slate-400 whitespace-nowrap">
                      {blog.updatedAt
                        ? new Date(blog.updatedAt).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="py-2 text-right">
                      <div className="inline-flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white"
                          onClick={() => handleEdit(blog)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                          onClick={() => void handleDelete(blog.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {blogs.length === 0 && !loading && (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-4 text-center text-slate-400"
                    >
                      No blogs yet. Click &quot;New Blog&quot; to create your
                      first post.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

