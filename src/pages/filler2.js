// App.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Header styles and component
const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4vw;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
  &:hover {
    color: #000;
  }
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -4px;
  }
  &:hover:after {
    width: 100%;
  }
`;

// Hero section styles and component
const Section = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 4vw 4rem 4vw;
  background: #fafafa;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  color: #222;
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  text-align: center;
  margin-bottom: 2.5rem;
  color: #444;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 32px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  transition: background 0.2s;
  &:hover {
    background: #222;
  }
`;

function Header() {
  return (
    <HeaderBar>
      <Logo src="/logo.png" alt="Logo" />
      <Nav>
        <NavLink href="#work" whileHover={{ scale: 1.08 }}>Work</NavLink>
        <NavLink href="#about" whileHover={{ scale: 1.08 }}>About</NavLink>
        <NavLink href="#contact" whileHover={{ scale: 1.08 }}>Contact</NavLink>
      </Nav>
    </HeaderBar>
  );
}

function HeroSection() {
  return (
    <Section>
      <Headline
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        We build brands that stand out.
      </Headline>
      <Subheadline
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        Strategy, design, and development for ambitious companies.
      </Subheadline>
      <CTAButton
        href="#work"
        whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        See Our Work
      </CTAButton>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
