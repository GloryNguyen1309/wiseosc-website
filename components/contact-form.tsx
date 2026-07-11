"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    hearAbout: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm">
            Hello, my name is:
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-[#1a2030] border-none h-14"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Here is my email:
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-[#1a2030] border-none h-14"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="projectType" className="block text-sm">
            Tell us about your project
          </label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => handleSelectChange("projectType", value)}
          >
            <SelectTrigger className="bg-[#1a2030] border-none h-14">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a2030]">
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="mobile-development">Mobile App Development</SelectItem>
              <SelectItem value="staff-augmentation">Staff Augmentation</SelectItem>
              <SelectItem value="api-integration">API Integration</SelectItem>
              <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="hearAbout" className="block text-sm">
            How did you hear about us?
          </label>
          <Select
            value={formData.hearAbout}
            onValueChange={(value) => handleSelectChange("hearAbout", value)}
          >
            <SelectTrigger className="bg-[#1a2030] border-none h-14">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a2030]">
              <SelectItem value="google">Google</SelectItem>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm">
          About project:
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Your project description"
          className="bg-[#1a2030] border-none min-h-[150px] resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#3b9bff] hover:bg-[#2a8aee] text-white h-14 rounded-md"
      >
        Send
      </Button>
    </form>
  );
}
