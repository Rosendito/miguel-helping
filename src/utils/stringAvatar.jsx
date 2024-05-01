export const getContrastColor = (backgroundColor = "#00000") => {
  const brightness = (
    parseInt(backgroundColor.substring(1, 3), 16) +
    parseInt(backgroundColor.substring(3, 5), 16) +
    parseInt(backgroundColor.substring(5, 7), 16)
  ) / 3;

  if (brightness > 128) {
    return "black";
  } else {
    return "white";
  }
};

export const stringToColor = (string = "User Default") => {

  string = string ?? "User Default";
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

const StringAvatar = ({ name = "User Default", styles = null }) => {

  const [firstName, lastName] = name.split(" ");

  const bgColor = stringToColor(name);
  const contrastColor = getContrastColor(bgColor);

  const initials = lastName ? `${firstName[0]}${lastName[0]}` : `${firstName[0]}${firstName[1]}`

  return (
    <div
      className="rounded-full p-2 cursor-pointer"  
      style={{
        backgroundColor: bgColor,
        ...styles
      }}
    >
      <span
        className="font-bold"
        style={{
          color: contrastColor
        }}
      >
        {initials}
      </span>
    </div>
  );
};

export default StringAvatar;