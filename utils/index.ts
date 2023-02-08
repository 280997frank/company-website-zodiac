export const getAccessToken = (): string => {
  if ((process.env.NEXT_PUBLIC_COOKIE_NAME as string) !== "") {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem(
        process.env.NEXT_PUBLIC_COOKIE_NAME as string
      );
      return token !== null ? token : "";
    }
  }

  return "";
};

export const isValidUrl = (urlString: string | undefined) => {
  try {
    return urlString ? Boolean(new URL(urlString)) : false;
  } catch (e) {
    return false;
  }
};

export const colorCategory = (item: string) => {
  const greenCategoty = ["ui/ux Design", "animation"];
  const blueCategoty = ["web"];
  const purpleCategoty = [
    "gamification",
    "interactive",
    "multimedia",
    "projection mapping",
    "iot",
  ];

  if (greenCategoty.includes(item.toLowerCase())) {
    return "#00FFDA";
  }

  if (purpleCategoty.includes(item.toLowerCase())) {
    return "#C992FF";
  }

  if (blueCategoty.includes(item.toLowerCase())) {
    return "#22CBFF";
  }

  return "#00FFDA";
};
