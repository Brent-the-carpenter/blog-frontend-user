import { describe, expect, test } from "vitest";
import fetchPost from "../api/fetch/GETPosts";

describe("test api calls ", () => {
  test("Testing fetchPost function", async () => {
    const postData = await fetchPost();
    expect(postData).toBeDefined();
  });
});
