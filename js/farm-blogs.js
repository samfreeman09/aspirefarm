// NAVABAR
const toggleBtn = document.querySelector('#navBtn');

const toggleHandler = () => {
  const toggleOpen = document.querySelector('.navId');
  // toggleOpen.style.display = 'block';
  toggleOpen.classList.toggle('visible');
};
toggleBtn.addEventListener('click', toggleHandler);

const navListHandler = () => {
  const list = document.querySelector('.list-content');
  list.classList.toggle('display');
};
const toggleList = document.querySelector('.toggle-list');
toggleList.addEventListener('click', navListHandler);

const readMore = document.querySelector('.read-more-text');
const readMoreHandler = () => {
  const displayText = document.getElementById('text-display');
  displayText.classList.toggle('text-visible');
  readMore.classList.toggle('hide');
};
readMore.addEventListener('click', readMoreHandler);

// MODAL
const modalContainer = document.getElementById('modal-container');
const addModalHandler = () => {
  modalContainer.classList.add('visible');
};
class Comments {
  commentTitle;
  commentText;
  constructor(title, text) {
    this.commentTitle = title;
    this.commentText = text;
  }
}
class CommentItems {
  commentHint = [
    new Comments(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo omnis error ab, suscipit',
      'totam ut hic porro assumenda quis dicta mollitia, soluta ratione fugit! Dolorum doloremque aut officia repellat.'
    ),
  ];
  renderHint() {
    const commentRow = document.querySelector('.comment-tip--row');
    for (const tips of this.commentHint) {
      const tipsCard = document.createElement('div');
      tipsCard.className = 'card border-bottom-success  tipsCard';
      tipsCard.innerHTML = `
			<div class="card-body tipsBody ">
			<button class=" btn btn-outline-success yes">Comment Tip
		<i class="fa fa-hand-o-down tipBtn"></i>
		</button>

		<hr />
		<p class=""> <i class="fa fa-hand-o-right text-success"></i> ${tips.commentTitle}</p>
		<p class=""> <i class="fa fa-hand-o-right text-success"></i> ${tips.commentText}
		</p>
				</div>
			`;
      commentRow.append(tipsCard);
    }
  }
}
const output = new CommentItems();
output.renderHint();

const userInput = document.querySelectorAll('.input-form');
const clearInputHandler = () => {
  for (const eachInput of userInput) {
    eachInput.value = '';
  }
};
const blogPost = [];
const postHandler = () => {
  class Post {
    postName;
    postTopic;
    postComment;
    constructor(userName, userTopic, userComment, userTime) {
      this.postName = userName;
      this.postTopic = userTopic;
      this.postComment = userComment;
      this.postTime = userTime;
    }
  }

  const name = userInput[0].value;
  const topic = userInput[1].value;
  const comments = userInput[2].value;
  const time = new Date().toUTCString();
  const nameAlert = document.querySelector('.name-alert');
  const topicAlert = document.querySelector('.topic-alert');
  const commentAlert = document.querySelector('.comment-alert');
  if (name.trim() === '') {
    nameAlert.classList.add('name-error');
    topicAlert.classList.add('topic-error'),
      commentAlert.classList.add('comment-error');
  } else {
    nameAlert.classList.add('remove');
    nameAlert.style.display = 'none';
    topicAlert.style.display = 'none';
    commentAlert.style.display = 'none';
    addModalHandler();
  }

  blogPost.push(new Post(name, topic, comments));
  addModalHandler;
  console.log(blogPost);
  const postBody = document.createElement('div');
  postBody.className = 'post-body shadow rounded post-update';
  postBody.innerHTML = `
  		  <a  class="blog-text">
				<h2 class="mr-2 ml-2 pt-3">
				${topic}
				</h2>
				<p class="user-comments mr-2 ml-2">
				${comments}

				</p>
        </a>
				<hr />
            <i class="text-success text-right">
           <p class="mr-2 text-success">
                <i class="fa fa-clock-o"></i>
                ${time}<br /><br />
                <i class="fa fa-user"></i>
               ${name}
              </p>
              </i>
							`;
  const postCol = document.querySelector('.blog-col');
  postCol.append(postBody);
  // addModalHandler;

  clearInputHandler();

  const closeModal = document.getElementById('cancle-modal');
  const modalHandler = () => {
    modalContainer.style.display = 'none';
  };
  closeModal.addEventListener('click', modalHandler);
};
if (!blogPost) {
  // nameAlert.classList.add('name-error');
} else {
  const postBtn = document.getElementById('post-btn');
  postBtn.addEventListener('click', postHandler);
}
