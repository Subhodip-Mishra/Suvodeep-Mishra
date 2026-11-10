"use client";

import React from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  ComputerTerminal01Icon,
  Mail01Icon,
  SentIcon,
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  ArrowRight01Icon,
  Copy01Icon,
  Tick01Icon,
  CheckmarkCircle01Icon,
  CpuIcon as HugeCpuIcon,
  FlashIcon,
  Shield01Icon,
  Database01Icon,
  Layout01Icon,
  Menu01Icon,
  Cancel01Icon,
  LinkSquare01Icon,
  FolderGit2Icon,
  DashboardSpeed01Icon,
  BinaryCodeIcon,
  AiSparklesIcon,
  Mic01Icon,
  Invoice01Icon,
} from "@hugeicons/core-free-icons";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

function createHugeIcon(iconData: IconSvgElement) {
  const Component = ({ size = 18, className = "", strokeWidth = 1.5, ...props }: IconProps) => (
    <HugeiconsIcon
      icon={iconData}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
  Component.displayName = "HugeIcon";
  return Component;
}

/* =========================================================================
   Official Clean SVG Brand Icons (GitHub, X / Twitter, LinkedIn, Next.js)
   ========================================================================= */

export function GithubIcon({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function TwitterIcon({ size = 17, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const XIcon = TwitterIcon;

export function LinkedinIcon({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function NextjsIcon({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="64" cy="64" r="64" fill="currentColor" />
      <path
        d="M106.317 112.014L49.1677 38.4H38.4V89.5787H47.0125V49.3395L99.5546 117.223C101.928 115.637 104.186 113.896 106.317 112.014Z"
        fill="white"
      />
      <path d="M82.2852 38.4H90.8977V89.5787H82.2852V38.4Z" fill="white" />
    </svg>
  );
}

/* =========================================================================
   UI & Utility Icons
   ========================================================================= */

export const TerminalIcon = createHugeIcon(ComputerTerminal01Icon);
export const MailIcon = createHugeIcon(Mail01Icon);
export const SendIcon = createHugeIcon(SentIcon);
export const ArrowDownIcon = createHugeIcon(ArrowDown01Icon);
export const ArrowUpRightIcon = createHugeIcon(ArrowUpRight01Icon);
export const ArrowRightIcon = createHugeIcon(ArrowRight01Icon);
export const CopyIcon = createHugeIcon(Copy01Icon);
export const CheckIcon = createHugeIcon(Tick01Icon);
export const CheckCircleIcon = createHugeIcon(CheckmarkCircle01Icon);
export const CpuIcon = createHugeIcon(HugeCpuIcon);
export const ZapIcon = createHugeIcon(FlashIcon);
export const ShieldIcon = createHugeIcon(Shield01Icon);
export const DatabaseIcon = createHugeIcon(Database01Icon);
export const LayoutIcon = createHugeIcon(Layout01Icon);
export const MenuIcon = createHugeIcon(Menu01Icon);
export const CancelIcon = createHugeIcon(Cancel01Icon);
export const ExternalLinkIcon = createHugeIcon(LinkSquare01Icon);
export const FolderGitIcon = createHugeIcon(FolderGit2Icon);
export const GaugeIcon = createHugeIcon(DashboardSpeed01Icon);
export const BinaryIcon = createHugeIcon(BinaryCodeIcon);
export const SparklesIcon = createHugeIcon(AiSparklesIcon);
export const MicIcon = createHugeIcon(Mic01Icon);
export const InvoiceIcon = createHugeIcon(Invoice01Icon);
