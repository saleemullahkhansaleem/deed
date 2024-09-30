import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function CoverSection({
  title,
  buttons = null,
  description = "",
}) {
  return (
    <section className="cover-bg">
      <div className="w-full h-full bg-black/80">
        <Container
          className={`flex flex-col items-center justify-center gap-8 ${
            buttons ? "min-h-96" : "min-h-52"
          } p-4 text-background`}
        >
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl font-bold mb-2"> {title}</h1>
            <p className="text-backgroundMuted text-lg">{description}</p>
          </div>
          {buttons && (
            <div className="flex flex-wrap items-center gap-4">
              {buttons.map((button, index) => (
                <Button href={button?.url} key={index}>
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
