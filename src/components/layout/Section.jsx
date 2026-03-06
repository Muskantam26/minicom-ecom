import React from "react";
import Container from "./Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

/**
 * Section Component
 * A reusable section wrapper with optional heading
 * 
 * @param {Object} props
 * @param {string} props.subtitle - Section subtitle (small text above title)
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {'sm' | 'md' | 'lg' | 'xl'} props.spacing - Vertical padding size
 * @param {'light' | 'dark' | 'surface'} props.background - Background color variant
 * @param {'default' | 'narrow' | 'wide' | 'fluid'} props.containerSize - Container width
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 */
const Section = ({
  subtitle,
  title,
  description,
  spacing = "lg",
  background = "light",
  containerSize = "default",
  className = "",
  children,
  ...props
}) => {
  const spacingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16 md:py-20",
    xl: "py-20 md:py-28",
  };

  const backgroundClasses = {
    light: "bg-[var(--color-background)]",
    dark: "bg-[var(--color-header-bg)] text-white",
    surface: "bg-[var(--color-surface)]",
  };

  const hasHeader = subtitle || title || description;

  return (
    <section
      className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}
      {...props}
    >
      <Container size={containerSize}>
        {hasHeader && (
          <div className="flex flex-col items-center text-center mb-10 md:mb-12 max-w-4xl mx-auto">
            {subtitle && (
              <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-3">
                {subtitle}
              </span>
            )}
            {title && (
              <Heading
                as="h2"
                size="md"
                className={`uppercase ${background === "dark" ? "text-white" : ""}`}
              >
                {title}
              </Heading>
            )}
            {description && (
              <Paragraph
                variant="default"
                className={`mt-4 max-w-2xl ${
                  background === "dark" ? "text-gray-300" : ""
                }`}
              >
                {description}
              </Paragraph>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
