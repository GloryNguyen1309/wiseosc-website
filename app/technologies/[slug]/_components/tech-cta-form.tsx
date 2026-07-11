"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

type TechCtaFormProps = {
  techName: string;
  ctaFormTitle: string;
};

export function TechCtaForm({ techName, ctaFormTitle }: TechCtaFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: `Technology interest: ${techName}\n\n${message.trim()}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/5 rounded-xl p-6 shadow-lg border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">{ctaFormTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Textarea
          placeholder="Tell us about your needs."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full text-white hover:text-white flex items-center justify-center gap-2"
          style={{
            backgroundImage:
              "linear-gradient(37deg, rgb(17, 156, 255) 50%, rgb(151, 248, 244) 100%)",
          }}
        >
          {isSubmitting ? "Sending..." : "Jump-start Your Project"}{" "}
          {!isSubmitting && <ChevronRight size={16} />}
        </Button>
      </form>
    </div>
  );
}
