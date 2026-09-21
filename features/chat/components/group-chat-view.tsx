"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessagesSquare,
  Send,
  User,
  Crown,
  Check,
  CheckCheck,
  X,
  Copy,
  LogIn,
  LogOut,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { FooterSection } from "@/shared/components/layout";
import { GoogleIcon, GithubIcon } from "@/shared/components/icons";
import { cn } from "@/shared/lib/utils";
import { GroupChatMessage } from "../types/chat-types";
import { INITIAL_GROUP_MESSAGES } from "../data/initial-chat-messages";

const STORAGE_KEY = "heytraa_community_chat_v5";
const AUTH_USER_KEY = "heytraa_community_auth_user_v1";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  provider?: string;
}

const POPULAR_ROLES = [
  "Visitor",
  "Backend Developer",
  "Frontend Developer",
  "Fullstack Engineer",
  "UI/UX Designer",
  "DevOps Engineer",
  "Software Engineer",
  "Client / Founder",
];

export function GroupChatView() {
  const { lang } = useLanguage();

  const [messages, setMessages] = useState<GroupChatMessage[]>(INITIAL_GROUP_MESSAGES);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [inputContent, setInputContent] = useState("");

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authNameInput, setAuthNameInput] = useState("");
  const [authEmailInput, setAuthEmailInput] = useState("");
  const [authRoleInput, setAuthRoleInput] = useState("Visitor");
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load auth user and messages on mount
  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem(AUTH_USER_KEY);
      if (savedAuth) {
        const parsedAuth = JSON.parse(savedAuth);
        if (parsedAuth?.name) {
          setAuthUser(parsedAuth);
        }
      }

      const savedMessages = localStorage.getItem(STORAGE_KEY);
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setMessages(parsedMessages);
        }
      }
    } catch {
      // Fallback
    }
  }, []);

  const saveMessages = (newMessages: GroupChatMessage[]) => {
    setMessages(newMessages);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
    } catch {
      // Fallback
    }
  };

  const handleLogin = (user: AuthUser) => {
    setAuthUser(user);
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    } catch {
      // Fallback
    }
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setAuthUser(null);
    try {
      localStorage.removeItem(AUTH_USER_KEY);
    } catch {
      // Fallback
    }
  };

  // Quick Social Login handler
  const handleSocialLogin = (provider: "Google" | "GitHub") => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const mockUser: AuthUser = {
      id: `user-${Date.now()}`,
      name: provider === "Google" ? "Alex Morgan" : "dev_traa_guest",
      email: provider === "Google" ? "alex.morgan@gmail.com" : `dev${randomId}@github.com`,
      role: provider === "Google" ? "Software Engineer" : "Backend Developer",
      provider,
    };
    handleLogin(mockUser);
  };

  // Manual Form Login handler
  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authNameInput.trim() || !authEmailInput.trim()) return;

    const newUser: AuthUser = {
      id: `user-${Date.now()}`,
      name: authNameInput.trim(),
      email: authEmailInput.trim(),
      role: authRoleInput.trim() || "Visitor",
      provider: "Email",
    };
    handleLogin(newUser);
  };

  const prevMessagesCountRef = useRef(messages.length);

  // Ensure page always starts at top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // Scroll internal chat container to latest message without affecting window
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, []);

  // Forward wheel scroll to parent window when top or bottom boundary is reached
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const isAtBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 2;
      const isAtTop = el.scrollTop <= 2;

      if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
        window.scrollBy({ top: e.deltaY, behavior: "auto" });
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // Smooth scroll internal container only when a new message is added
  useEffect(() => {
    if (messages.length > prevMessagesCountRef.current) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
    prevMessagesCountRef.current = messages.length;
  }, [messages.length]);

  const handleSendMessage = () => {
    if (!authUser) {
      setIsAuthModalOpen(true);
      return;
    }

    const content = inputContent.trim();
    if (!content) return;

    const initials =
      authUser.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "ME";

    const newMsg: GroupChatMessage = {
      id: `msg-${Date.now()}`,
      senderName: authUser.name,
      senderRole: authUser.role,
      isOwner: false,
      avatarInitials: initials,
      avatarColor: "bg-[#689F99] text-white",
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: true,
    };

    saveMessages([...messages, newMsg]);
    setInputContent("");
  };

  const handleCopyMessage = (msgId: string, text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedMsgId(msgId);
      setTimeout(() => setCopiedMsgId(null), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Header Hero Card */}
      <section className="relative overflow-hidden rounded-3xl border border-[#689F99]/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-[#2D3342]/5 dark:shadow-black/40 transition-colors duration-300">
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#689F99]/10 text-[#689F99] border border-[#689F99]/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <MessagesSquare className="w-3.5 h-3.5" />
            <span>{lang === "id" ? "Ruang Komunitas" : "Community Hub"}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id"
              ? "Grup Diskusi & Komentar Pengunjung"
              : "Group Chat & Community Comments"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {lang === "id"
              ? "Ruang publik terbuka untuk meninggalkan feedback, mendiskusikan arsitektur sistem, bertukar insight teknologi, atau menyapa Putra Rizky dan rekan developer."
              : "An open public discussion space to leave feedback, discuss systems & code, exchange technical insights, or connect with Putra Rizky and fellow developers."}
          </p>
        </div>
      </section>

      {/* 2. Main Group Chat Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md transition-colors duration-300 flex flex-col h-[640px] sm:h-[680px]">
        {/* Top Channel Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {/* heytraa logo */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 shadow-xs shrink-0">
              <Image
                src="/images/logo-icon.png"
                alt="heytraa logo"
                width={32}
                height={32}
                className="w-full h-full object-contain dark:invert select-none"
              />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-[#2D3342] dark:text-[#F5F8F9]">
              heytraa.com Community
            </h3>
          </div>

          {/* User Auth Status / Action */}
          {authUser ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[120px] sm:max-w-[160px]">
                  {authUser.name}
                </span>
                <span className="text-slate-400 hidden sm:inline text-[11px]">
                  ({authUser.role})
                </span>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                title={lang === "id" ? "Keluar dari Akun" : "Log Out"}
                className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#689F99] hover:bg-[#52837d] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{lang === "id" ? "Masuk" : "Log In"}</span>
            </button>
          )}
        </div>

        {/* Scrollable Message Stream Body (Scroll chains naturally to parent window at boundaries) */}
        <div
          ref={scrollContainerRef}
          className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#f8fafc] dark:bg-[#090e17] overscroll-auto [transform:translateZ(0)] [will-change:scroll-position] relative"
        >
          {/* Day Separator Badge */}
          <div className="flex items-center justify-center my-1">
            <span className="px-3 py-1 rounded-full text-xs text-slate-400 dark:text-slate-500 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              {lang === "id" ? "Hari ini · Ruang Diskusi Terbuka" : "Today · Open Discussion Room"}
            </span>
          </div>

          {messages.map((msg) => {
            const isMe = msg.isUser;

            return (
              <div
                key={msg.id}
                className={cn(
                  "group relative flex gap-3 items-start",
                  isMe ? "flex-row-reverse" : "flex-row"
                )}
              >
                {/* Avatar */}
                <div className="shrink-0 mt-0.5">
                  {msg.isOwner ? (
                    <div className="relative w-9 h-9 rounded-2xl overflow-hidden border border-[#689F99]/30 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs">
                      <Image
                        src="/images/logo-icon.png"
                        alt="heytraa logo"
                        width={28}
                        height={28}
                        className="w-full h-full object-contain dark:invert select-none"
                      />
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "w-9 h-9 rounded-2xl flex items-center justify-center text-xs font-bold shadow-xs",
                        msg.avatarColor || "bg-slate-500 text-white"
                      )}
                    >
                      {msg.avatarInitials || "US"}
                    </div>
                  )}
                </div>

                {/* Bubble Container */}
                <div
                  className={cn(
                    "flex flex-col max-w-[85%] sm:max-w-[75%]",
                    isMe ? "items-end" : "items-start"
                  )}
                >
                  {/* Name + Role + Timestamp */}
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {isMe ? (lang === "id" ? "Anda" : "You") : msg.senderName}
                    </span>

                    {msg.isOwner && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-[#689F99]/15 text-[#689F99] dark:text-[#88c5be] border border-[#689F99]/30">
                        <Crown className="w-3 h-3 text-amber-500" />
                        <span>Owner</span>
                      </span>
                    )}

                    {!msg.isOwner && msg.senderRole && (
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        · {msg.senderRole}
                      </span>
                    )}

                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* Speech Bubble */}
                  <div className="relative group/bubble flex items-center gap-1">
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-3 leading-relaxed text-xs sm:text-sm shadow-xs",
                        isMe
                          ? "bg-gradient-to-r from-[#689F99] to-[#52837d] text-white rounded-tr-xs shadow-md shadow-[#689F99]/15"
                          : msg.isOwner
                          ? "bg-gradient-to-br from-[#689F99]/10 via-[#689F99]/5 to-transparent dark:from-[#689F99]/20 dark:to-slate-900/60 border border-[#689F99]/30 text-slate-800 dark:text-slate-100 rounded-tl-xs"
                          : "bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 rounded-tl-xs"
                      )}
                    >
                      <div className="whitespace-pre-wrap break-words">{msg.content}</div>

                      {isMe && (
                        <div className="flex justify-end items-center gap-1 mt-1 text-[11px] text-white/70">
                          <CheckCheck className="w-3.5 h-3.5 text-white/90" />
                        </div>
                      )}
                    </div>

                    {/* Quick Copy Message Button on Hover */}
                    <button
                      type="button"
                      onClick={() => handleCopyMessage(msg.id, msg.content)}
                      className="opacity-0 group-hover:opacity-60 hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-opacity cursor-pointer shrink-0"
                      title={copiedMsgId === msg.id ? "Disalin!" : "Salin teks"}
                    >
                      {copiedMsgId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Composer / Auth Gate */}
        {authUser ? (
          /* Unlocked Input Bar (When Authenticated) */
          <div className="p-3 sm:p-4 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2.5"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
                placeholder={
                  lang === "id"
                    ? `Tulis komentar sebagai ${authUser.name}... (tekan Enter untuk kirim)`
                    : `Write comment as ${authUser.name}... (press Enter to send)`
                }
                className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#689F99]/40 focus:border-[#689F99] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all shadow-xs"
              />

              <button
                type="submit"
                disabled={!inputContent.trim()}
                aria-label={lang === "id" ? "Kirim Pesan" : "Send Message"}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#689F99] to-[#52837d] hover:from-[#588a84] hover:to-[#46726d] disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#689F99]/25 hover:shadow-lg hover:shadow-[#689F99]/40 shrink-0 cursor-pointer font-semibold text-xs sm:text-sm active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {lang === "id" ? "Kirim" : "Send"}
                </span>
              </button>
            </form>
          </div>
        ) : (
          /* Locked Auth Banner (When Not Authenticated) */
          <div className="p-3.5 sm:p-4 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="w-9 h-9 rounded-2xl bg-[#689F99]/15 text-[#689F99] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {lang === "id"
                    ? "Login Diperlukan untuk Mengirim Pesan"
                    : "Login Required to Send Messages"}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {lang === "id"
                    ? "Silakan masuk dengan akun Anda untuk bergabung dalam diskusi."
                    : "Please log in to participate in the community discussion."}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-[#689F99] hover:bg-[#52837d] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#689F99]/25 flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 active:scale-95"
            >
              <LogIn className="w-4 h-4" />
              <span>{lang === "id" ? "Masuk / Login" : "Log In Now"}</span>
            </button>
          </div>
        )}
      </div>

      {/* 3. Authentication Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl animate-in zoom-in-95 duration-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-[#689F99]/15 text-[#689F99] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#2D3342] dark:text-[#F5F8F9]">
                    {lang === "id" ? "Masuk ke Ruang Komunitas" : "Log in to Community"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === "id"
                      ? "Verifikasi identitas sebelum mengirim pesan"
                      : "Verify identity before sending messages"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAuthModalOpen(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick OAuth Login Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all shadow-xs cursor-pointer"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>
                  {lang === "id" ? "Lanjutkan dengan Google" : "Continue with Google"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin("GitHub")}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>
                  {lang === "id" ? "Lanjutkan dengan GitHub" : "Continue with GitHub"}
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800" />
              <span className="absolute px-3 bg-white dark:bg-slate-900 text-[11px] text-slate-400">
                {lang === "id" ? "atau masuk manual" : "or continue manually"}
              </span>
            </div>

            {/* Manual Identity Form */}
            <form onSubmit={handleManualLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === "id" ? "Nama Lengkap" : "Full Name"}
                </label>
                <input
                  type="text"
                  value={authNameInput}
                  onChange={(e) => setAuthNameInput(e.target.value)}
                  placeholder="e.g. Dimas Pratama"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#689F99]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={authEmailInput}
                  onChange={(e) => setAuthEmailInput(e.target.value)}
                  placeholder="e.g. dimas@example.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#689F99]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === "id" ? "Peran / Profesi" : "Role / Profession"}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_ROLES.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setAuthRoleInput(role)}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer border",
                        authRoleInput === role
                          ? "bg-[#689F99] border-[#689F99] text-white"
                          : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      )}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAuthModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {lang === "id" ? "Batal" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#689F99] hover:bg-[#52837d] text-white text-xs font-semibold shadow-md shadow-[#689F99]/25 transition-all cursor-pointer"
                >
                  {lang === "id" ? "Masuk & Verifikasi" : "Sign In & Verify"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Footer Section */}
      <FooterSection />
    </div>
  );
}
