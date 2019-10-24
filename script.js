var coll = document.getElementsByClassName("visible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var t = document.getElementsByClassName("education--control");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let yalowInfo = document.querySelector(".circleYalow");
let repairInfo = document.querySelector(".circleRepair");

yalowInfo.addEventListener("click", function() {
    let yal = document.querySelector(".theyalowInfo");
    if (yal.style.display === "block") {
        yal.style.display = "none";
    } else {
        yal.style.display = "block";
    }
})

repairInfo.addEventListener("click", function() {
    let yal = document.querySelector(".repairInfo");
    if (yal.style.display === "block") {
        yal.style.display = "none";
    } else {
        yal.style.display = "block";
    }
})


let items = document.querySelectorAll('.projects .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.projects--control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.projects--control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('projects--arrow') || e.target.classList.contains('projects--control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.projects');
swipedetect(el);

// let items = document.querySelectorAll('.projects--item');
// let currentItem = 0; //индекс того самого item
// let isEnabled = true; //как только анимация начинается, переводим в false, когда заканчивается

// function changeCurrentItem(n) {
//     currentItem = (n + items.length) % items.length // если доходит до активного индекса 3, то при делении на 3 мы возвращаемся в 0
// }

// function hideItem(direction) {
//     isEnabled = false;
//     items[currentItem].classList.add(direction);
//     items[currentItem].addEventListener('animationend', function() {
//         this.classList.remove('active', direction)
//     })
// }

// function previousItem(n) {
//     hideItem('to-right');
//     changeCurrentItem(n - 1);
// }

// function nextItem(n) {
//     hideItem('to-left');
//     changeCurrentItem(n + 1);
// }

// document.querySelector('.projects--control.left').addEventListener('click', function() {
//     // changeCurrentItem(currentItem - 1);
//     if (isEnabled) { //проверяем, доступна ли функция переключения
//         previousItem(currentItem);
//     }
// });

// document.querySelector('.projects--control.right').addEventListener('click', function() {
//     // changeCurrentItem(currentItem - 1);
//     if (isEnabled) {
//         nextItem(currentItem);
//     }
// });