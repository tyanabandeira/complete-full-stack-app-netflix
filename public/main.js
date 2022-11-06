var heart = document.getElementsByClassName("fa-heart");
var trash = document.getElementsByClassName("fa-trash-o");
var plus = document.getElementsByClassName("fa-circle-plus")



Array.from(plus).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const genre = this.parentNode.parentNode.childNodes[5].innerText
    // console.log(this.closest('li').querySelector('.fa-thumbs-up'))
    fetch('save', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name.trim(),
        'msg': msg.trim(),
        'genre': genre.trim(),
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        // console.log(this.closest('li').querySelector('.fa-thumbs-up'))
        fetch('heart', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name.trim(),
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
