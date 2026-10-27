import React, { useState } from 'react';
import { Send, MessageSquareHeart, CheckCircle2 } from 'lucide-react';

export const ContactFeedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and feedback message.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    // Save locally to display honest feedback confirmation
    try {
      const existing = JSON.parse(localStorage.getItem('lilac_lips_feedback') || '[]');
      existing.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('lilac_lips_feedback', JSON.stringify(existing));
    } catch {
      // Ignore storage error
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFF9F5] border-t border-[#F8DDE5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#593A57]/70 font-medium mb-2">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#593A57]" />
            <span>Student Feedback Box</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#593A57]">
            What do you think of our first creation?
          </h2>
          <p className="mt-2 text-sm text-[#593A57]/80">
            We’d love to hear your thoughts, suggestions for future laboratory batches, or kind words for our student team.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F8DDE5] shadow-xs">
          
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#DCD0F0]/50 text-[#593A57] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-[#593A57]">
                Thank you, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm text-[#593A57]/80 max-w-md mx-auto leading-relaxed">
                Your feedback has been logged into our local student project registry. As college students building our first creation, every honest reaction means the world to us!
              </p>
              
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-[#F8DDE5] hover:bg-[#ebd0d8] text-[#593A57] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#593A57] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0F0] text-sm text-[#593A57] placeholder:text-[#593A57]/40 focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-[#FFF9F5]/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#593A57] mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0F0] text-sm text-[#593A57] placeholder:text-[#593A57]/40 focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-[#FFF9F5]/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#593A57] mb-1.5">
                  Your Message or Feedback
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you think of our lip balm, the color, or our lab journey..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCD0F0] text-sm text-[#593A57] placeholder:text-[#593A57]/40 focus:outline-none focus:ring-2 focus:ring-[#DCD0F0] bg-[#FFF9F5]/40 resize-none"
                />
              </div>

              {/* Demonstration Notice (Requirement 12) */}
              <div className="p-3 bg-[#FAF2EC] rounded-xl text-[11px] text-[#593A57]/75 leading-relaxed border border-[#F8DDE5]">
                <strong>Project Notice:</strong> This feedback form is a demonstration channel for our college showcase. All submissions are stored locally in browser memory for demonstration review.
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#593A57] hover:bg-[#41283F] text-[#FFF9F5] text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Student Feedback</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
