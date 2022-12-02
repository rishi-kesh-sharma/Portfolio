const blogWrapperDiv = document.querySelector(".blog-wrapper");

class Blog {
  constructor(topic, title, content, link) {
    this.topic = topic;
    this.title = title;
    this.link = link;
    this.content = content.split(" ").slice(0, 10).join(" ") + " ...";
    const blogDiv = document.createElement("div");
    const topicP = document.createElement("p");
    const titleP = document.createElement("p");
    const contentP = document.createElement("p");
    const titleA = document.createElement("a");

    topicP.textContent = this.topic;
    titleA.textContent = this.title;
    contentP.textContent = this.content;
    blogDiv.classList.add("blog");
    topicP.classList.add("blog-topic");
    titleP.classList.add("blog-title");
    contentP.classList.add("blog-content");

    titleA.href = this.link;

    blogDiv.append(topicP);
    titleP.append(titleA);
    blogDiv.append(titleP);
    blogDiv.append(contentP);
    blogWrapperDiv.append(blogDiv);
    return blogDiv;
  }
}
export default Blog;
