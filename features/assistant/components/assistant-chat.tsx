"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  Sparkles,
  X,
  Send,
  RotateCcw,
  User,
  MessageSquareCode,
  Loader2,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { ChatMessage } from "../types";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Halo! 👋 Saya **Assistant heytraa**, AI Knowledge Partner untuk portofolio dan layanan Putra Rizky. \n\nKamu bisa tanyakan apa saja seputar pengalaman, layanan web development, tech stack, atau estimasi project!",
    timestamp: "Baru saja",
  },
];

const SUGGESTIONS = [
  "Layanan apa saja yang ditawarkan?",
  "Berapa estimasi waktu pembuatan web?",
  "Apa tech stack yang dikuasai?",
];

export function AssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Global event listener so the sidebar "Smart Talk" button can open this chat
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-assistant-chat", handleOpenChat);
    return () => window.removeEventListener("open-assistant-chat", handleOpenChat);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Placeholder simulated response until RAG backend is plugged in
    setTimeout(() => {
      let botReply =
        "Terima kasih atas pertanyaannya! Sesi RAG (Retrieval-Augmented Generation) backend sedang disiapkan. Nantinya bot ini akan langsung menjawab berdasarkan knowledge base portofolio & service Putra Rizky.";

      if (query.toLowerCase().includes("layanan") || query.toLowerCase().includes("service")) {
        botReply =
          "Putra Rizky menyediakan layanan Full-Stack Web Development, pembuatan Landing Page berkecepatan tinggi, Custom Dashboard admin, serta integrasi API modern dengan jaminan Clean Code & SEO-friendly.";
      } else if (query.toLowerCase().includes("estimasi") || query.toLowerCase().includes("waktu")) {
        botReply =
          "Estimasi pengerjaan biasanya berkisar antara 1 - 4 minggu tergantung kompleksitas fitur, skala sistem, dan kebutuhan integrasi. Kami selalu berkomitmen pada On-Time Delivery.";
      } else if (query.toLowerCase().includes("stack") || query.toLowerCase().includes("teknologi")) {
        botReply =
          "Tech stack utama yang dikuasai meliputi Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js, REST/GraphQL API, serta database PostgreSQL/MySQL.";
      }

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <aside aria-label="Assistant Heytraa Trigger" className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Buka Assistant heytraa"
          className={cn(
            "group flex items-center gap-3 pl-2.5 pr-5 py-2.5 rounded-full",
            "bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white",
            "shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/45",
            "hover:scale-105 active:scale-95 transition-all duration-300",
            isOpen && "scale-95 ring-2 ring-white/60"
          )}
        >
          {/* Avatar / Bot icon circle */}
          <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0284c7] shadow-xs group-hover:rotate-6 transition-transform duration-300">
            <Bot className="w-5 h-5 text-[#0284c7]" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
          </div>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] uppercase font-bold tracking-wider text-sky-100 flex items-center gap-1">
              <span>AI ASSISTANT</span>
              <Sparkles className="w-2.5 h-2.5 text-sky-200" />
            </span>
            <span className="text-xs font-extrabold tracking-tight">
              Assistant heytraa
            </span>
          </div>
        </button>
      </aside>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-22 right-4 sm:right-6 z-50",
            "w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[calc(100vh-7rem)]",
            "bg-white/95 backdrop-blur-xl border border-sky-100 rounded-3xl",
            "shadow-2xl shadow-sky-950/15 flex flex-col overflow-hidden",
            "animate-in fade-in slide-in-from-bottom-5 duration-300"
          )}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] p-4 text-white flex items-center justify-between shrink-0 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0284c7] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm tracking-tight">Assistant heytraa</h3>
                  <span className="px-1.5 py-0.2 rounded-md bg-white/20 text-[10px] font-mono tracking-wider font-semibold">
                    RAG
                  </span>
                </div>
                <p className="text-[11px] text-sky-100 font-medium">
                  Tanya seputar layanan & portofolio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reset Obrolan"
                className="p-1.5 rounded-xl text-sky-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Tutup Chat"
                className="p-1.5 rounded-xl text-sky-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-2.5 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-xl bg-[#e4f5fc] text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={cn(
                    "rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-xs text-xs sm:text-sm whitespace-pre-wrap",
                    msg.role === "user"
                      ? "bg-[#0284c7] text-white rounded-tr-xs"
                      : "bg-[#f8fafc] text-slate-800 border border-sky-100/90 rounded-tl-xs"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0284c7]" />
                <span>Assistant heytraa sedang mengetik...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Pills */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-slate-100 bg-[#f8fafc]/60 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSendMessage(item)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-[#e4f5fc] text-slate-600 hover:text-[#0284c7] border border-sky-100/80 shadow-2xs transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 border-t border-sky-100 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tanya ke Assistant heytraa..."
                className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-slate-50 border border-sky-100 focus:outline-hidden focus:ring-2 focus:ring-[#0284c7]/30 focus:border-[#0284c7] text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Kirim Pesan"
                className="w-9 h-9 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] disabled:opacity-50 disabled:hover:bg-[#0284c7] text-white flex items-center justify-center transition-colors shadow-xs shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
