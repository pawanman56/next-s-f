import posts from '/data/posts.json';

export default function handler(req, res) {
    const { postid } = req.query;
    const post = posts.find((post => post.id === parseInt(postid)));

    res.status(200).json(post);
};