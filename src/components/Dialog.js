function Dialog(props) {
  return (
    <dialog open onClick={props.isClosed}>
      <img src='https://raw.githubusercontent.com/ShiyuLi05/cdn/main/img/zhazha/zhazha02.jpeg'/>
      <p className='infor'>Click me to close</p>
    </dialog>
  )
}

export default Dialog;



