export function arrayToPhrase(arr) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0].name;
  if (arr.length === 2) return arr[0].name + " y " + arr[1].name;
  if (arr.length === 3)
    return arr[0].name + ", " + arr[1].name + " y " + arr[2].name;

  return arr.slice(0, -1).join(", ") + " y " + arr[arr.length - 1];
}
