
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const recipientEmail = "info@learning-legacy.org";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !subject || !message) {
            toast({
                title: "Incomplete Form",
                description: "Please fill out all fields.",
                variant: "destructive",
            });
            return;
        }

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
        
        try {
            window.location.href = mailtoLink;
             toast({
                title: "Email client opened",
                description: "Please complete sending the email from your email client.",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Could not open email client.",
                variant: "destructive",
            });
            console.error("Failed to open mailto link:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Type your message here."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <Button type="submit">Send Message</Button>
        </form>
    );
};

export default ContactForm;
