export function HeartIcon({ liked, color = '#A26DAA' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill={liked ? color : 'none'}
      stroke={color}
      strokeWidth={liked ? '3' : '2'}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sliders-horizontal"
    >
      <line x1="21" x2="14" y1="4" y2="4" />
      <line x1="10" x2="3" y1="4" y2="4" />
      <line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" />
      <line x1="21" x2="16" y1="20" y2="20" />
      <line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="16" x2="16" y1="18" y2="22" />
    </svg>
  );
}

export function HomeIcon({
  fill = '#FFF',
  stroke = '#0000',
  w = '100%',
  h = '100%',
}) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="0.00024000000000000003"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
}

export function UserIcon({
  fill = '#0000',
  stroke = '#000',
  w = '100%',
  h = '100%',
}) {
  return (
    <svg width={w} height={h} viewBox="0 0 24 24" fill={fill}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="9" r="3" stroke={stroke} strokeWidth="2"></circle>
        <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="2"></circle>
        <path
          d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
}

export function SearchIcon({
  fill = '#0000',
  stroke = '#FFF',
  w = '100%',
  h = '100%',
}) {
  return (
    <svg width={w} height={h} viewBox="0 0 24 24" fill={fill} stroke="#0000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Interface / Search_Magnifying_Glass">
          <path
            id="Vector"
            d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function VideoIcon({
  fill = '#0000',
  stroke = '#FFF',
  w = '100%',
  h = '100%',
}) {
  return (
    <svg fill={stroke} width={w} height={h} viewBox="0 0 24 24">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z"></path>
      </g>
    </svg>
  );
}

export function ArrowBackIcon({
  fill = '#0000',
  stroke = '#FFF',
  w = '100%',
  h = '100%',
}) {
  return (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 20 20"
      version="1.1"
      fill={stroke}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="layer1">
          <path
            d="M 12.001953 5.2910156 L 11.648438 5.6464844 L 7.2929688 10 L 11.648438 14.353516 L 12.001953 14.708984 L 12.708984 14 L 12.355469 13.646484 L 8.7089844 10 L 12.355469 6.3535156 L 12.708984 6 L 12.001953 5.2910156 z "
            style="fill:#FFF; fill-opacity:1; stroke:none; stroke-width:0px;"
          ></path>
        </g>
      </g>
    </svg>
  );
}
