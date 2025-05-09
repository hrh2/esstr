import { useState, useEffect } from 'react';
import {
    MessageSquare, ThumbsUp, ThumbsDown, Send, ChevronDown, ChevronUp, UserCircle
} from 'lucide-react';
import { fetchData, generateFancyName, sendData } from "../utils/helper.js";
import CommentInput from "./CommentInput.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import MarkdownViewer from "./MarkdownViewer.jsx";


export default function BlogPostWithComments({ token }) {
    const [posts, setPosts] = useState([]);
    const [commentsByPost, setCommentsByPost] = useState({});
    const [newComments, setNewComments] = useState({});
    const [showComments, setShowComments] = useState({});
    const [loadingPostIds, setLoadingPostIds] = useState(new Set());
    const [visibleComments, setVisibleComments] = useState({}); // New state

    useEffect(() => {
        const getPosts = async () => {
            const { data, error } = await fetchData('https://school-management-457507.wn.r.appspot.com/posts', token);
            if (!error && Array.isArray(data)) {
                setPosts(data);
                const commentsMap = {};
                const visibleMap = {};
                data.forEach(post => {
                    commentsMap[post._id] = post.comments || [];
                    visibleMap[post._id] = 3; // show 3 comments initially
                });
                setCommentsByPost(commentsMap);
                setVisibleComments(visibleMap);
            }
        };
        getPosts();
    }, [token]);

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString(undefined, {
            year: 'numeric', month: 'long', day: 'numeric'
        });

    const handleCommentChange = (postId, content) => {
        setNewComments(prev => ({ ...prev, [postId]: content }));
    };

    const handleCommentSubmit = async (postId) => {
        const commentText = newComments[postId]?.trim();
        if (!commentText) return;

        setLoadingPostIds(prev => new Set(prev).add(postId));
        const { data, error } = await sendData(
            'https://school-management-457507.wn.r.appspot.com/comments',
            { post: postId, content: commentText },
            token
        );

        if (!error) {
            setCommentsByPost(prev => ({
                ...prev,
                [postId]: [data, ...(prev[postId] || [])]
            }));
            setNewComments(prev => ({ ...prev, [postId]: '' }));

            setVisibleComments(prev => ({
                ...prev,
                [postId]: (prev[postId] || 3) + 1 // show the newly added comment
            }));
        }
        setLoadingPostIds(prev => {
            const updated = new Set(prev);
            updated.delete(postId);
            return updated;
        });
    };

    const toggleComments = (postId) => {
        setShowComments(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    const loadMoreComments = (postId) => {
        setVisibleComments(prev => ({
            ...prev,
            [postId]: (prev[postId] || 3) + 3
        }));
    };

    const [currentSlide, setCurrentSlide] = useState({}); // store current slide index per post

    if (posts.length === 0) return <p className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 font-bold text-white px-6 py-3 rounded-full text-center py-10 h-screen flex items-center justify-center">Loading posts...</p>;

    return (
        <div className="w-full h-full flex flex-col gap-6 p-6 mt-9 bg-gradient-to-br from-indigo-50 to-blue-50">

            <h2 className="text-3xl font-bold my-8 text-center text-purple-700">Feel Free No one Knows You</h2>
            <div className="container flex justify-end mx-auto">
                <a
                    href="https://academy.byose.info/post"
                    target="_blank"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
                >
                    + Add New Post
                </a>
            </div>
            <div className="container grid gap-6 md:grid-cols-2 grid-cols-1 w-full mx-auto">
                {posts.map(post => (
                    <div key={post._id} className="bg-white border-2  border-black rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full">
                        <div className="p-5 h-full">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">Posted on {formatDate(post.createdAt)}</p>

                            {(post.images_url?.length > 0 || post.youtube_video?.length > 0) && (
                                <Swiper
                                    modules={[Navigation]}
                                    navigation
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    className="w-full rounded-lg mb-4"
                                    onSlideChange={(swiper) =>
                                        setCurrentSlide(prev => ({ ...prev, [post._id]: swiper.activeIndex }))
                                    }
                                >
                                    {post.images_url?.map((img, i) => (
                                        <SwiperSlide key={`img-${i}`}>
                                            <Zoom>
                                                <img
                                                    src={img}
                                                    alt={`Post Image ${i + 1}`}
                                                    className="w-auto h-80 mx-auto object-cover rounded-lg cursor-zoom-in"
                                                />
                                            </Zoom>
                                        </SwiperSlide>
                                    ))}

                                    {post.youtube_video?.map((video, i) => (
                                        <SwiperSlide key={`vid-${i}`} className="!h-auto">
                                            <div className="w-full #h-72">
                                                <iframe
                                                    src={video.replace('watch?v=', 'embed/')}
                                                    title={`Video ${i}`}
                                                    className="w-full h-80 rounded-lg"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </SwiperSlide>

                                    ))}
                                </Swiper>
                            )}
                            {(post.images_url?.length > 0 || post.youtube_video?.length > 0) && (
                                <div className="text-sm text-gray-600 text-center my-2">
                                    Slide {((currentSlide[post._id] || 0) + 1)} of {post.images_url.length + post.youtube_video.length}
                                </div>
                            )}

                            {/*<p className="text-gray-800 md:text-xl text-md mb-3 line-clamp-4">{post.description}</p>*/}
                            <MarkdownViewer content={post.description} />
                            <div className="flex items-center justify-between text-gray-600 border-t border-b border-gray-200 py-3 mt-4">
                                <button className="flex items-center gap-1 hover:text-blue-600">
                                    <ThumbsUp size={18} /> <span>Like</span>
                                </button>
                                <button className="flex items-center gap-1 hover:text-red-500">
                                    <ThumbsDown size={18} /> <span>Dislike</span>
                                </button>
                                <button
                                    onClick={() => toggleComments(post._id)}
                                    className="flex items-center gap-1 hover:text-purple-600"
                                >
                                    <MessageSquare size={18} />
                                    <span>{commentsByPost[post._id]?.length || 0}</span>
                                    {showComments[post._id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                            </div>

                            {showComments[post._id] && (
                                <div className="mt-4">
                                    <CommentInput
                                        postId={post._id}
                                        commentText={newComments[post._id] || ''}
                                        onCommentChange={handleCommentChange}
                                        onSubmit={handleCommentSubmit}
                                        loading={loadingPostIds.has(post._id)}
                                    />

                                    <div className="space-y-3 mt-4">
                                        {(commentsByPost[post._id] || [])
                                            .slice(0, visibleComments[post._id] || 3)
                                            .map(comment => (
                                                <div key={comment._id} className="flex items-start gap-3">
                                                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 flex-shrink-0">
                                                        <UserCircle size={18} />
                                                    </div>
                                                    <div className="bg-gray-100 rounded-lg p-3 flex-grow">
                                                        <h4 className="text-xs text-gray-500 mb-1">
                                                            {generateFancyName(comment._id)} • {formatDate(comment.createdAt)}
                                                        </h4>
                                                        {/*<p className="text-sm text-gray-800">{comment.content}</p>*/}
                                                        <MarkdownViewer content={comment.content} />
                                                    </div>
                                                </div>
                                            ))}

                                        {(commentsByPost[post._id]?.length || 0) > (visibleComments[post._id] || 3) && (
                                            <button
                                                onClick={() => loadMoreComments(post._id)}
                                                className="text-blue-600 hover:underline text-sm mt-2"
                                            >
                                                Load more comments
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
