import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Smile, XCircle } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

function CommentInput({ postId, commentText, onCommentChange, onSubmit, loading }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });
    const emojiRef = useRef(null);
    const textareaRef = useRef(null);

    const handleEmojiClick = (emojiData) => {
        onCommentChange(postId, commentText + emojiData.emoji);
    };

    const handleSubmit = () => {
        onSubmit(postId);
        setShowEmojiPicker(false); // close picker after submit
    };

    const handleCancel = () => {
        setShowEmojiPicker(false); // close picker when cancel button is clicked
    };

    // Close picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiRef.current && !emojiRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        };
        if (showEmojiPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmojiPicker]);

    return (
        <div className="flex items-start space-x-4 mb-4 relative">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                <MessageSquare size={16} />
            </div>
            <div className="flex-grow">
                <textarea
                    ref={textareaRef}
                    value={commentText}
                    onChange={(e) => onCommentChange(postId, e.target.value)}
                    placeholder="Add a comment... 😄"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                ></textarea>

                <div className="flex justify-between items-center mt-2">
                    <button
                        type="button"
                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                        className="text-gray-500 hover:text-yellow-500 transition"
                        title="Insert emoji"
                    >
                        <Smile size={20} />
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 disabled:opacity-50"
                    >
                        {loading ? 'Posting...' : (
                            <>
                                <Send size={16} />
                                <span>Post Comment</span>
                            </>
                        )}
                    </button>
                </div>

                {showEmojiPicker && (
                    <div
                        ref={emojiRef}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                        style={{
                            maxWidth: '300px',
                            width: 'auto',
                        }}
                    >
                        <div className="relative">
                            <EmojiPicker
                                onEmojiClick={handleEmojiClick}
                                theme="light"
                            />

                            {/* Cancel Button */}
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="absolute bg-white rounded-full top-0 right-0 p-2 text-gray-600 hover:text-red-600"
                                title="Cancel"
                            >
                                <XCircle size={30} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentInput;
