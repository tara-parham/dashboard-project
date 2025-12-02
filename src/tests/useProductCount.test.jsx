import { describe, expect, it } from "vitest";
import ProductProvider from "../context/ProductContext";
import { renderHook } from "@testing-library/react";
import useProductCount from "../hooks/useProductCount";
import { act } from "react";

describe("useProductCount hook", () => {
  it("should increment and decrement count", () => {
    const wrapper = ({ children }) => (
      <ProductProvider>{children}</ProductProvider>
    );
    const { result } = renderHook(() => useProductCount(1), { wrapper });

    //initial count
    expect(result.current.count).toBe(0);

    //increment
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);

    //decrement
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});
