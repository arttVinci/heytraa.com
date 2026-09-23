"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Bot,
  Sparkles,
  X,
  Send,
  Loader2,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import ReactMarkdown from "react-markdown";
import { ChatMessage } from "../types";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Halo! 👋 Saya **Assistant heytraa**, asisten AI resmi untuk portofolio Putra Rizky Nugraha.\n\nKamu bisa tanyakan apa saja seputar profil, proyek riil yang pernah dikerjakan, tech stack, atau layanan yang disediakan!",
    timestamp: "Baru saja",
  },
];

const SUGGESTIONS = [
  "Siapa itu Putra Rizky?",
  "Apa saja proyek yang pernah dibuat?",
  "Tech stack apa yang dikuasai?",
  "Layanan apa saja yang disediakan?",
];

export function AssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `session-${Date.now()}`
  );

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  // Smooth auto-scroll ke bawah saat ada pesan baru tanpa memicu jitter pada window
  useEffect(() => {
    if (!isOpen || !messagesContainerRef.current) return;
    const container = messagesContainerRef.current;

    const rafId = requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: messages.length <= 1 ? "auto" : "smooth",
      });
    });

    return () => cancelAnimationFrame(rafId);
  }, [messages, isOpen, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Global event listener so the sidebar "Smart Talk" button can open this chat
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-assistant-chat", handleOpenChat);
    return () => window.removeEventListener("open-assistant-chat", handleOpenChat);
  }, []);

  const handleSendMessage = useCallback(
    async (textToSend?: string) => {
      const query = (textToSend || inputValue).trim();
      if (!query || isTyping) return;

      const userMsg: ChatMessage = {
        id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `msg-${Date.now()}`,
        role: "user",
        content: query,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      try {
        const res = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: query, sessionId }),
        });

        const data = await res.json();

        const assistantMsg: ChatMessage = {
          id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `msg-${Date.now()}`,
          role: "assistant",
          content: data.reply || "Maaf, terjadi kesalahan. Silakan coba lagi.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      } catch {
        const errorMsg: ChatMessage = {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "Maaf, koneksi ke server gagal. Pastikan backend sedang berjalan dan coba lagi.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
      }
    },
    [inputValue, isTyping, sessionId],
  );

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <aside
        ref={triggerRef}
        aria-label="Assistant Heytraa Trigger"
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Buka Assistant heytraa"
          className={cn(
            "group flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full cursor-pointer",
            "bg-white/95 dark:bg-[#2D3342]/95 backdrop-blur-md",
            "border border-slate-200/90 dark:border-white/10",
            "text-slate-800 dark:text-slate-100",
            "shadow-md shadow-slate-900/8 hover:shadow-xl hover:shadow-[#689F99]/15",
            "hover:border-[#689F99]/50 transition-all duration-200",
            "hover:scale-[1.02] active:scale-95",
            isOpen && "ring-2 ring-[#689F99]/25 border-[#689F99]"
          )}
        >
          {/* Avatar bot icon */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#689F99]/15 text-[#52837d] dark:bg-[#689F99]/25 dark:text-[#689F99] shrink-0">
            <Bot className="w-4.5 h-4.5" />
          </div>

          <span className="text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-[#52837d] dark:group-hover:text-white transition-colors">
            Tanya heytraa AI
          </span>
        </button>
      </aside>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          ref={modalRef}
          className={cn(
            "fixed bottom-22 right-4 sm:right-6 z-50",
            "w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[calc(100vh-7.5rem)]",
            "bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl",
            "shadow-2xl shadow-slate-900/15 flex flex-col overflow-hidden",
            "animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-250 ease-out"
          )}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-white/90 backdrop-blur-md border-b border-slate-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#689F99] to-[#87b7b1] text-white shadow-sm shadow-[#689F99]/25">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full ring-1 ring-emerald-500/20" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Assistant heytraa</h3>
                <p className="text-xs text-slate-500 font-normal">
                  Tanya profil, proyek & layanan
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              title="Tutup Chat"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div
            ref={messagesContainerRef}
            className={cn(
              "flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-white",
              "overscroll-contain touch-pan-y",
              "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent",
              "[&::-webkit-scrollbar-thumb]:bg-slate-200/90 [&::-webkit-scrollbar-thumb]:rounded-full",
              "hover:[&::-webkit-scrollbar-thumb]:bg-slate-300"
            )}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "ml-auto flex-row-reverse max-w-[85%]" : "mr-auto max-w-[92%]"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#689F99]/20 to-[#689F99]/10 text-[#52837d] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-[#689F99]/20">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 leading-relaxed shadow-xs text-xs sm:text-[13px]",
                    msg.role === "user"
                      ? "bg-gradient-to-r from-[#689F99] to-[#52837d] text-white rounded-tr-xs whitespace-pre-wrap font-normal"
                      : "bg-[#F5F8F9]/80 text-slate-800 border border-slate-200/70 rounded-tl-xs"
                  )}
                >
                  {msg.role === "assistant" ? (
                    <div className="space-y-2 prose-sm max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:space-y-1.5 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-900 [&_a]:text-[#52837d] [&_a]:font-medium [&_a]:underline [&_code]:bg-slate-200/60 [&_code]:border [&_code]:border-slate-300/40 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-xs [&_code]:font-mono">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                  <div
                    className={cn(
                      "mt-1.5 text-[10px] text-right select-none",
                      msg.role === "user" ? "text-white/70" : "text-slate-400"
                    )}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-10">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#689F99]" />
                <span className="text-[12px] font-medium text-slate-500">Assistant sedang merespons...</span>
              </div>
            )}
          </div>

          {/* Suggestions Pills (hanya muncul saat awal sebelum percakapan berlangsung) */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-4 py-3 border-t border-slate-100 bg-[#F5F8F9]/80 backdrop-blur-xs">
              <p className="text-[11px] font-medium text-slate-500 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#689F99]" />
                Saran pertanyaan:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSendMessage(item)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white hover:bg-[#689F99]/15 text-slate-700 hover:text-[#52837d] border border-slate-200 hover:border-[#689F99]/40 shadow-2xs hover:shadow-xs transition-all duration-200 text-left cursor-pointer active:scale-95"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 border-t border-slate-100 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-[#F5F8F9] rounded-2xl border border-slate-200/80 px-2 py-1.5 focus-within:border-[#689F99] focus-within:ring-2 focus-within:ring-[#689F99]/20 transition-all duration-200 shadow-2xs"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ketik pertanyaan untuk Assistant heytraa..."
                className="flex-1 text-xs sm:text-sm px-2.5 py-1 bg-transparent border-none focus:outline-hidden text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Kirim Pesan"
                className="w-8 h-8 rounded-xl bg-[#689F99] hover:bg-[#52837d] disabled:opacity-35 disabled:hover:bg-[#689F99] text-white flex items-center justify-center transition-all duration-200 shadow-xs shrink-0 cursor-pointer disabled:cursor-not-allowed active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
