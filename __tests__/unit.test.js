// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// -- PHONE NUMBER TESTS -- //

test('working phone number', () => {
  expect(isPhoneNumber("123-456-7770")).toBe(true);
});

test('empty phone number', () => {
  expect(isPhoneNumber("000-000-0000")).toBe(true);
});

test('extended phone number', () => {
  expect(isPhoneNumber("123-456-777-890")).toBe(false);
});

test('string phone number', () => {
  expect(isPhoneNumber("---")).toBe(false);
});

// -- EMAIL TESTS -- //

test('working email', () => {
  expect(isEmail("avighnakukreja@gmail.com")).toBe(true);
});

test('minimum email', () => {
  expect(isEmail("a@b.com")).toBe(true);
});

test('extended email', () => {
  expect(isEmail("a.b.c.d.e.f@g@B")).toBe(false);
});

test('empty email', () => {
  expect(isEmail("@.")).toBe(false);
});

// -- PASSWORD TESTS -- //

test('password 1', () => {
  expect(isStrongPassword("gma1Lcom")).toBe(true);
});

test('password 2', () => {
  expect(isStrongPassword("ab0rG5T")).toBe(true);
});

test('missing number', () => {
  expect(isStrongPassword("a.b.c.d.e.f@g@B")).toBe(false);
});

test('too short', () => {
  expect(isStrongPassword("@.")).toBe(false);
});

// -- DATE TESTS -- //

test('dawn of time', () => {
  expect(isDate("00/00/0000")).toBe(true);
});

test('0 digits', () => {
  expect(isDate("1/1/2024")).toBe(true);
});

test('too early', () => {
  expect(isDate("1/1/0")).toBe(false);
});

test('too many slashes', () => {
  expect(isDate("////")).toBe(false);
});

// -- HEX TESTS -- //

test('letters and numbers without hashtag', () => {
  expect(isHexColor("AB1D95")).toBe(true);
});

test('all numbers', () => {
  expect(isHexColor("#112024")).toBe(true);
});

test('long string', () => {
  expect(isHexColor("#0123456789ABCDEF")).toBe(false);
});

test('after F', () => {
  expect(isHexColor("#BCDEFG")).toBe(false);
});