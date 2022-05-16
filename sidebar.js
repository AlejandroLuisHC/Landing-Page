var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "25%";
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "30px";
    this.mini = true;
  }
}
