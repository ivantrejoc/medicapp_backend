import { signIn } from "../controllers/authControllers.js";

export const signInHandler = async (req, res) => {
  try {
    const credentials = req.body;
    const login = await signIn(credentials);
    return res.status(200).header("auth-token", login.token).json(login);
  } catch (error) {
    console.error;
    if (
      error.message === "User not found" ||
      error.message === "Incorrect password"
    ) {
      return res.status(401).json({message: error.message});
    }
    return res.status(500).json({ message: error.message });
  }
};

export const signOutHandler = async (req, res) => {
  res.clearCookie("auth-token");
  return res.status(200).json({ message: "Logged out successfully" });
};
