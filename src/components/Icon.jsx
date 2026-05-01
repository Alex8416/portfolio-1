import {
  FolderOpen, Brain, Settings2, Monitor, MessageSquare,
  Wrench, Building2, Users, Link2, Code2, BarChart2, Cloud,
  Target, Shield, Zap, Handshake, Rocket, Mail, Phone,
  MapPin, ChevronRight, ChevronDown, Menu, X, Check,
  AlertCircle, ArrowRight, Bot, FileText, Workflow,
} from 'lucide-react'

const icons = {
  FolderOpen, Brain, Settings2, Monitor, MessageSquare,
  Wrench, Building2, Users, Link2, Code2, BarChart2, Cloud,
  Target, Shield, Zap, Handshake, Rocket, Mail, Phone,
  MapPin, ChevronRight, ChevronDown, Menu, X, Check,
  AlertCircle, ArrowRight, Bot, FileText, Workflow,
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.75 }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component size={size} className={className} strokeWidth={strokeWidth} />
}
