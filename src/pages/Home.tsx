import React, { Component } from 'react';

export function Home() {
    return (
        <div className="chat-app clearfix">
            <div className="chat-app_left">
                <div className="heading">
                    <h3 className="messenger-title">Room</h3>
                </div>
                <div className="thread-list">
                    <li className="thread-item">
                        <a href="#" className="_1ht5 _5l-3">
                            <div className="clearfix">
                                <div className="thread-item_left">
                                    <img className="img img-circle" src="https://avatars.githubusercontent.com/u/42539369?v=4" width="50" height="50" alt=""/>
                                </div>
                                <div className="thread-item_right">
                                    <div className="thread-from">
                                        Random Group
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </div>
            </div>
            <div className="chat-app_right">
                <div className="heading">
                    <div className="current-target">Random</div>
                </div>
                <div className="message-list">
                    <div className="message-item message-from-other">
                        <span>已建立連線</span>
                    </div>
                    <div className="message-item message-from-me">
                        <span>開始說你好...</span>
                    </div>
                </div>
                <div className="footer">
                    <input className="new-message" type="text" />
                </div>
            </div>
        </div>
    );
}