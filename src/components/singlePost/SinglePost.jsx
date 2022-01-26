import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Preethi</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quia deleniti natus dignissimos, eligendi provident? Reprehenderit
          beatae perspiciatis assumenda, impedit ipsa nulla. Animi omnis
          repudiandae aspernatur ducimus sed cum quibusdam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Doloribus quia deleniti natus
          dignissimos, eligendi provident? Reprehenderit beatae perspiciatis
          assumenda, impedit ipsa nulla. Animi omnis repudiandae aspernatur
          ducimus sed cum quibusdam.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloribus quia deleniti natus dignissimos, eligendi
          provident? Reprehenderit beatae perspiciatis assumenda, impedit ipsa
          nulla. Animi omnis repudiandae aspernatur ducimus sed cum quibusdam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ipsam sed eius voluptatum ut. Commodi ducimus ut suscipit quo nostrum
          neque velit quasi eum, consequatur, vitae incidunt soluta? Voluptatum,
          tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus quia deleniti natus dignissimos, eligendi provident?
          Reprehenderit beatae perspiciatis assumenda, impedit ipsa nulla. Animi
          omnis repudiandae aspernatur ducimus sed cum quibusdam.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloribus quia deleniti
          natus dignissimos, eligendi provident? Reprehenderit beatae
          perspiciatis assumenda, impedit ipsa nulla. Animi omnis repudiandae
          aspernatur ducimus sed cum quibusdam.
        </p>
      </div>
    </div>
  );
}
