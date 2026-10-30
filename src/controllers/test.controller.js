export const hello = (req, res) => {
    res.status(200).json({"message":"La API esta bien"});
}