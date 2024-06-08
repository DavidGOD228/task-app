import { act } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { renderHook } from "@testing-library/react";

describe("useAuthStore", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.isLoggedIn).toBe(false);
  });

  test("should login the user", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.login();
    });

    expect(result.current.isLoggedIn).toBe(true);
  });

  test("should logout the user", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.login();
    });

    act(() => {
      result.current.logout();
    });

    expect(result.current.isLoggedIn).toBe(false);
  });
});
