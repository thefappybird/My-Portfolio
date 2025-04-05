export const getBadgeClass = (
  mode: "dark" | "light",
  light: string,
  dark: string
) => (mode === "dark" ? dark : light);

export const southMateImages: string[] = [
  "/southMate/mobile/login.png",
  "/southMate/mobile/register-choice.png",
  "/southMate/mobile/register-form.png",
  "/southMate/mobile/profile.png",
  "/southMate/website/login.png",
  "/southmate/website/register-form.png",
  "/southMate/website/profile.png",
  "/southmate/website/register-bank.png",
  "/southMate/website/transaction.png",
];

export const nomadImages: string[] = [
  "/nomad/emp-login.png",
  "/nomad/landing-page.png",
  "/nomad/landing-page-2.png",
  "/nomad/calendar.png",
  "/nomad/add reservation.png",
  "/nomad/reports.png",
  "/nomad/settings.png",
];
