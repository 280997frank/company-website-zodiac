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

import Landing from "@/pages";

test.before((ctx) => {
  registerSuite(ctx);
  window.matchMedia = matchMedia;
});

test.after((ctx) => {
  cleanup();
  cleanupSuite(ctx);
});

test("Render landing page", () => {
  render(<Landing />);
  screen.getByText(
    /you’re about to enter the ever\-expanding world of zodiac\./i
  );
  screen.getByRole("group");
  // screen.getByRole("link", { name: /bring me to the html site/i });
});

test.run();
