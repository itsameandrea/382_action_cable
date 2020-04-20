import consumer from "./consumer";

const messagesContainer = document.getElementById("messages");

if (messagesContainer) {
  const id = messagesContainer.dataset.chatroomId;

  consumer.subscriptions.create(
    { channel: "ChatroomChannel", id: id },
    {
      received(data) {
        if (data.action && data.action === 'DELETE') {
          const msg = document.querySelector(`#message-${data.message}`)
          msg.remove()
        } else {
          messagesContainer.insertAdjacentHTML("beforeend", data);
        }
      },
    }
  );
}
