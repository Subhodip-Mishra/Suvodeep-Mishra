"use client";

import React from "react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
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

export const GithubIcon = createHugeIcon(Github01Icon);
export const LinkedinIcon = createHugeIcon(Linkedin01Icon);
export const TwitterIcon = createHugeIcon(NewTwitterIcon);
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

export function NextjsIcon({ size = 16, className = "", ...props }: IconProps) {
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
