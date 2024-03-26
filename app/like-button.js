export default function LikeButton() {
    function handleClick() {
        setLIkes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>;
}