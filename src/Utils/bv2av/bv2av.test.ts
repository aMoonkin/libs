import { bv2av } from "./bv2av";

test("handle links with full url correctly", () => {
    expect(bv2av("https://www.bilibili.com/video/BV1eJ411H7L2")).toEqual(
        "https://www.bilibili.com/video/av82863988"
    );
});

test("handle links with url without protocol correctly", () => {
    expect(bv2av("www.bilibili.com/video/BV1eJ411H7L2")).toEqual(
        "www.bilibili.com/video/av82863988"
    );
});

test("handle links with url without '/video/' correctly", () => {
    expect(bv2av("www.bilibili.com/BV1eJ411H7L2/")).toEqual(
        "www.bilibili.com/av82863988"
    );
});

test("handle links with url with '/' in the end correctly", () => {
    expect(bv2av("www.bilibili.com/BV1eJ411H7L2/")).toEqual(
        "www.bilibili.com/av82863988"
    );
});

test("handle bv string correctly", () => {
    expect(bv2av("BV1eJ411H7L2")).toEqual("av82863988");
});

test("handle UpperCase&LowerCase correctly", () => {
    expect(bv2av("bv1eJ411H7L2")).toEqual("av82863988");
});

test("handle bv number correctly", () => {
    expect(bv2av("1eJ411H7L2")).toEqual("82863988");
});
