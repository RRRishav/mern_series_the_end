const Home = (req, res) => {
  res.send("Hello World");
};




const register = (req, res) => {
    console.log(req.body);
  res.send({message: "User registered successfully"});
};

module.exports = { Home,register };
