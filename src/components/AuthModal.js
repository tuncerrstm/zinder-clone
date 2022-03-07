const AuthModal = ({ setShowModel}) => {

    const handleClick = () => {
        setShowModel(false)
    }
    return (
        <div className="auth-modal">
            <div onClick={handleClick}>ⓧ</div>
            AUTH MODEL
        </div>
    )
}
export default AuthModal