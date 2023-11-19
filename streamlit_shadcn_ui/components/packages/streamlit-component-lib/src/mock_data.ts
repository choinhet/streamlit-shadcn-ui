/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Raw data (in Apache Arrow format) for a dataframe
// that uses `Int64Index` for both `index` and `columns` attributes.
//
// raw_data = {
//   "First Name": ["Jason", "Molly", "Tina", "Jake", "Amy"],
//   "Last Name": ["Miller", "Jacobson", "Ali", "Milner", "Smith"],
//   "Age": [42, 52, 36, 24, 73],
// }
//
// df = pd.DataFrame(raw_data, columns=["First Name", "Last Name", "Age"])

export const EXAMPLE_DF = {
  data: new Uint8Array([
    255, 255, 255, 255, 96, 3, 0, 0, 16, 0, 0, 0, 0, 0, 10, 0, 14, 0, 6, 0, 5,
    0, 8, 0, 10, 0, 0, 0, 0, 1, 4, 0, 16, 0, 0, 0, 0, 0, 10, 0, 12, 0, 0, 0, 4,
    0, 8, 0, 10, 0, 0, 0, 148, 2, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 8,
    0, 12, 0, 4, 0, 8, 0, 8, 0, 0, 0, 108, 2, 0, 0, 4, 0, 0, 0, 95, 2, 0, 0,
    123, 34, 105, 110, 100, 101, 120, 95, 99, 111, 108, 117, 109, 110, 115, 34,
    58, 32, 91, 123, 34, 107, 105, 110, 100, 34, 58, 32, 34, 114, 97, 110, 103,
    101, 34, 44, 32, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117, 108, 108, 44,
    32, 34, 115, 116, 97, 114, 116, 34, 58, 32, 48, 44, 32, 34, 115, 116, 111,
    112, 34, 58, 32, 53, 44, 32, 34, 115, 116, 101, 112, 34, 58, 32, 49, 125,
    93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 95, 105, 110, 100, 101, 120,
    101, 115, 34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117,
    108, 108, 44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34,
    58, 32, 110, 117, 108, 108, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116,
    121, 112, 101, 34, 58, 32, 34, 105, 110, 116, 54, 52, 34, 44, 32, 34, 110,
    117, 109, 112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 105, 110, 116,
    54, 52, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32,
    110, 117, 108, 108, 125, 93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 115,
    34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 48, 34, 44, 32,
    34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32, 34, 48, 34,
    44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101, 34, 58, 32,
    34, 117, 110, 105, 99, 111, 100, 101, 34, 44, 32, 34, 110, 117, 109, 112,
    121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 111, 98, 106, 101, 99, 116, 34,
    44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110, 117, 108,
    108, 125, 44, 32, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 49, 34, 44,
    32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32, 34, 49,
    34, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101, 34, 58,
    32, 34, 117, 110, 105, 99, 111, 100, 101, 34, 44, 32, 34, 110, 117, 109,
    112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 111, 98, 106, 101, 99,
    116, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110,
    117, 108, 108, 125, 44, 32, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 50,
    34, 44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32,
    34, 50, 34, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101,
    34, 58, 32, 34, 105, 110, 116, 54, 52, 34, 44, 32, 34, 110, 117, 109, 112,
    121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 111, 98, 106, 101, 99, 116, 34,
    44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110, 117, 108,
    108, 125, 93, 44, 32, 34, 99, 114, 101, 97, 116, 111, 114, 34, 58, 32, 123,
    34, 108, 105, 98, 114, 97, 114, 121, 34, 58, 32, 34, 112, 121, 97, 114, 114,
    111, 119, 34, 44, 32, 34, 118, 101, 114, 115, 105, 111, 110, 34, 58, 32, 34,
    49, 49, 46, 48, 46, 48, 34, 125, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95,
    118, 101, 114, 115, 105, 111, 110, 34, 58, 32, 34, 49, 46, 51, 46, 53, 34,
    125, 0, 6, 0, 0, 0, 112, 97, 110, 100, 97, 115, 0, 0, 3, 0, 0, 0, 116, 0, 0,
    0, 60, 0, 0, 0, 4, 0, 0, 0, 168, 255, 255, 255, 0, 0, 1, 2, 16, 0, 0, 0, 28,
    0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 50, 0, 0, 0, 8, 0, 12, 0, 8, 0,
    7, 0, 8, 0, 0, 0, 0, 0, 0, 1, 64, 0, 0, 0, 220, 255, 255, 255, 0, 0, 1, 5,
    16, 0, 0, 0, 20, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 49, 0, 0, 0,
    204, 255, 255, 255, 16, 0, 20, 0, 8, 0, 6, 0, 7, 0, 12, 0, 0, 0, 16, 0, 16,
    0, 0, 0, 0, 0, 1, 5, 16, 0, 0, 0, 24, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 48, 0, 0, 0, 4, 0, 4, 0, 4, 0, 0, 0, 255, 255, 255, 255, 8, 1, 0, 0,
    20, 0, 0, 0, 0, 0, 0, 0, 12, 0, 22, 0, 6, 0, 5, 0, 8, 0, 12, 0, 12, 0, 0, 0,
    0, 3, 4, 0, 24, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 24, 0, 12,
    0, 4, 0, 8, 0, 10, 0, 0, 0, 156, 0, 0, 0, 16, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0,
    21, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    48, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0,
    28, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    104, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0,
    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 5, 0, 0, 0, 10, 0, 0, 0, 14, 0, 0, 0, 18, 0, 0, 0, 21, 0, 0, 0, 74,
    97, 115, 111, 110, 77, 111, 108, 108, 121, 84, 105, 110, 97, 74, 97, 107,
    101, 65, 109, 121, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 14, 0, 0, 0, 17, 0, 0,
    0, 23, 0, 0, 0, 28, 0, 0, 0, 77, 105, 108, 108, 101, 114, 74, 97, 99, 111,
    98, 115, 111, 110, 65, 108, 105, 77, 105, 108, 110, 101, 114, 83, 109, 105,
    116, 104, 0, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 36,
    0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 255,
    255, 255, 255, 0, 0, 0, 0,
  ]),
  index: new Uint8Array([
    255, 255, 255, 255, 64, 2, 0, 0, 16, 0, 0, 0, 0, 0, 10, 0, 14, 0, 6, 0, 5,
    0, 8, 0, 10, 0, 0, 0, 0, 1, 4, 0, 16, 0, 0, 0, 0, 0, 10, 0, 12, 0, 0, 0, 4,
    0, 8, 0, 10, 0, 0, 0, 200, 1, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 8,
    0, 12, 0, 4, 0, 8, 0, 8, 0, 0, 0, 160, 1, 0, 0, 4, 0, 0, 0, 146, 1, 0, 0,
    123, 34, 105, 110, 100, 101, 120, 95, 99, 111, 108, 117, 109, 110, 115, 34,
    58, 32, 91, 123, 34, 107, 105, 110, 100, 34, 58, 32, 34, 114, 97, 110, 103,
    101, 34, 44, 32, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117, 108, 108, 44,
    32, 34, 115, 116, 97, 114, 116, 34, 58, 32, 48, 44, 32, 34, 115, 116, 111,
    112, 34, 58, 32, 53, 44, 32, 34, 115, 116, 101, 112, 34, 58, 32, 49, 125,
    93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 95, 105, 110, 100, 101, 120,
    101, 115, 34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117,
    108, 108, 44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34,
    58, 32, 110, 117, 108, 108, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116,
    121, 112, 101, 34, 58, 32, 34, 105, 110, 116, 54, 52, 34, 44, 32, 34, 110,
    117, 109, 112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 105, 110, 116,
    54, 52, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32,
    110, 117, 108, 108, 125, 93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 115,
    34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 48, 34, 44, 32,
    34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32, 34, 48, 34,
    44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101, 34, 58, 32,
    34, 105, 110, 116, 54, 52, 34, 44, 32, 34, 110, 117, 109, 112, 121, 95, 116,
    121, 112, 101, 34, 58, 32, 34, 105, 110, 116, 54, 52, 34, 44, 32, 34, 109,
    101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110, 117, 108, 108, 125, 93, 44,
    32, 34, 99, 114, 101, 97, 116, 111, 114, 34, 58, 32, 123, 34, 108, 105, 98,
    114, 97, 114, 121, 34, 58, 32, 34, 112, 121, 97, 114, 114, 111, 119, 34, 44,
    32, 34, 118, 101, 114, 115, 105, 111, 110, 34, 58, 32, 34, 49, 49, 46, 48,
    46, 48, 34, 125, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 118, 101, 114,
    115, 105, 111, 110, 34, 58, 32, 34, 49, 46, 51, 46, 53, 34, 125, 0, 0, 6, 0,
    0, 0, 112, 97, 110, 100, 97, 115, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 16, 0, 20,
    0, 8, 0, 6, 0, 7, 0, 12, 0, 0, 0, 16, 0, 16, 0, 0, 0, 0, 0, 1, 2, 16, 0, 0,
    0, 28, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 48, 0, 0, 0, 8, 0, 12,
    0, 8, 0, 7, 0, 8, 0, 0, 0, 0, 0, 0, 1, 64, 0, 0, 0, 255, 255, 255, 255, 136,
    0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 12, 0, 22, 0, 6, 0, 5, 0, 8, 0, 12, 0, 12,
    0, 0, 0, 0, 3, 4, 0, 24, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 24,
    0, 12, 0, 4, 0, 8, 0, 10, 0, 0, 0, 60, 0, 0, 0, 16, 0, 0, 0, 5, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4,
    0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0,
  ]),
  columns: new Uint8Array([
    255, 255, 255, 255, 56, 2, 0, 0, 16, 0, 0, 0, 0, 0, 10, 0, 14, 0, 6, 0, 5,
    0, 8, 0, 10, 0, 0, 0, 0, 1, 4, 0, 16, 0, 0, 0, 0, 0, 10, 0, 12, 0, 0, 0, 4,
    0, 8, 0, 10, 0, 0, 0, 204, 1, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 8,
    0, 12, 0, 4, 0, 8, 0, 8, 0, 0, 0, 164, 1, 0, 0, 4, 0, 0, 0, 149, 1, 0, 0,
    123, 34, 105, 110, 100, 101, 120, 95, 99, 111, 108, 117, 109, 110, 115, 34,
    58, 32, 91, 123, 34, 107, 105, 110, 100, 34, 58, 32, 34, 114, 97, 110, 103,
    101, 34, 44, 32, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117, 108, 108, 44,
    32, 34, 115, 116, 97, 114, 116, 34, 58, 32, 48, 44, 32, 34, 115, 116, 111,
    112, 34, 58, 32, 51, 44, 32, 34, 115, 116, 101, 112, 34, 58, 32, 49, 125,
    93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 95, 105, 110, 100, 101, 120,
    101, 115, 34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117,
    108, 108, 44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34,
    58, 32, 110, 117, 108, 108, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116,
    121, 112, 101, 34, 58, 32, 34, 105, 110, 116, 54, 52, 34, 44, 32, 34, 110,
    117, 109, 112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 105, 110, 116,
    54, 52, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32,
    110, 117, 108, 108, 125, 93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 115,
    34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 48, 34, 44, 32,
    34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32, 34, 48, 34,
    44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101, 34, 58, 32,
    34, 117, 110, 105, 99, 111, 100, 101, 34, 44, 32, 34, 110, 117, 109, 112,
    121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 111, 98, 106, 101, 99, 116, 34,
    44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110, 117, 108,
    108, 125, 93, 44, 32, 34, 99, 114, 101, 97, 116, 111, 114, 34, 58, 32, 123,
    34, 108, 105, 98, 114, 97, 114, 121, 34, 58, 32, 34, 112, 121, 97, 114, 114,
    111, 119, 34, 44, 32, 34, 118, 101, 114, 115, 105, 111, 110, 34, 58, 32, 34,
    49, 49, 46, 48, 46, 48, 34, 125, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95,
    118, 101, 114, 115, 105, 111, 110, 34, 58, 32, 34, 49, 46, 51, 46, 53, 34,
    125, 0, 0, 0, 6, 0, 0, 0, 112, 97, 110, 100, 97, 115, 0, 0, 1, 0, 0, 0, 20,
    0, 0, 0, 16, 0, 20, 0, 8, 0, 6, 0, 7, 0, 12, 0, 0, 0, 16, 0, 16, 0, 0, 0, 0,
    0, 1, 5, 16, 0, 0, 0, 24, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 48,
    0, 0, 0, 4, 0, 4, 0, 4, 0, 0, 0, 255, 255, 255, 255, 152, 0, 0, 0, 20, 0, 0,
    0, 0, 0, 0, 0, 12, 0, 22, 0, 6, 0, 5, 0, 8, 0, 12, 0, 12, 0, 0, 0, 0, 3, 4,
    0, 24, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 24, 0, 12, 0, 4, 0, 8,
    0, 10, 0, 0, 0, 76, 0, 0, 0, 16, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 19, 0, 0, 0, 22, 0, 0, 0, 70, 105, 114,
    115, 116, 32, 78, 97, 109, 101, 76, 97, 115, 116, 32, 78, 97, 109, 101, 65,
    103, 101, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0,
  ]),
};
