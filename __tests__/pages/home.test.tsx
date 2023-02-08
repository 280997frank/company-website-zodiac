import React from "react";
import { test } from "uvu";
import { matchMedia } from "mock-match-media";
// import * as assert from "uvu/assert";
import {
  render,
  cleanup,
  cleanupSuite,
  registerSuite,
  screen,
} from "@/__tests__/renderer";

import Homepage from "@/pages/home";

test.before((ctx) => {
  registerSuite(ctx);
  window.matchMedia = matchMedia;
});

test.after((ctx) => {
  cleanup();
  cleanupSuite(ctx);
});

test("Render homepage", () => {
  render(<Homepage />);
  screen.getByRole("button", { name: /interactive & multimedia/i });
  screen.getByRole("button", { name: /research & development/i });
  screen.getByRole("button", { name: /join us/i });
  screen.getByRole("button", { name: /digital & event/i });
  screen.getByRole("button", { name: /our clients/i });
  screen.getByRole("button", { name: /contact us/i });
  screen.getByRole("button", { name: /design & animation/i });
  screen.getByRole("button", { name: /our story/i });
});

test.run();
