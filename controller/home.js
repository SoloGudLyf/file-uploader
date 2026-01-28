const homePage = async (req, res) => {
  if (req.isAuthenticated()) {
    res.render("home");
  }
};

export { homePage };
