import React from 'react';

const DIAMOND_SHAPES = [
  'Round', 'Oval', 'Pear', 'Marquise', 'Princess',
  'Emerald', 'Radiant', 'Asscher', 'Cushion', 'Heart'
] as const;

export type DiamondShape = typeof DIAMOND_SHAPES[number];

/* â”€â”€ Inline SVG icons â€” paths sourced from design assets, zero network dependency â”€â”€ */
const ShapeIcon: React.FC<{ shape: string; size?: number; className?: string }> = ({ shape, size = 30 }) => {
  const vb = '0 0 38 38';

  switch (shape) {
    case 'Round':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path d="M15.0845 9.35161L9.34795 23.0101L23.0065 28.7467L28.7431 15.0882L15.0845 9.35161ZM15.0845 9.35161L19 4.34183L23.0975 9.35161M15.0845 9.35161L8.68241 8.79468L9.34795 14.9061M15.0845 9.35161L13.1723 5.34511M23.0975 9.35161L9.34795 14.9971L14.9935 28.7467L28.7431 23.1012L23.0975 9.35161ZM23.0975 9.35161L29.4262 8.68607L28.652 15.0882L33.6618 19.2768L28.652 23.1012L29.3176 29.3212L22.9154 28.6557M23.0975 9.35161L24.6455 5.25405M9.34795 14.9061L4.33817 19.4381L9.34795 22.9191M9.34795 14.9061L5.15933 13.5402M9.34795 22.9191L8.68241 29.3212L14.9024 28.6557M9.34795 22.9191L5.25039 24.6492M14.9024 28.6557L19.3258 33.6655L22.9154 28.6557M14.9024 28.6557L13.2634 32.7532M22.9154 28.6557L24.4634 32.7532M28.652 23.1923L32.8406 24.7402M28.7431 14.9061L32.8406 13.6313M19 4.07031C27.2862 4.07031 33.9333 10.7175 33.9333 19.0036C33.9333 27.2898 27.2862 33.937 19 33.937C10.7138 33.937 4.06665 27.2898 4.06665 19.0036C4.06665 10.7175 10.7138 4.07031 19 4.07031Z" stroke="currentColor" strokeWidth="0.706" strokeMiterlimit="10" />
        </svg>
      );

    case 'Oval':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path d="M19.125 33.55C24.7169 33.55 29.25 26.935 29.25 18.775C29.25 10.615 24.7169 4 19.125 4C13.5331 4 9 10.615 9 18.775C9 26.935 13.5331 33.55 19.125 33.55Z" stroke="currentColor" strokeWidth="0.6739" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.9998 4.5L16.275 9.4751L13.575 18.8501L16.35 28.5251L18.9998 33L21.975 28.3001L24.825 18.7751L21.75 9.2501L18.9998 4.5Z" stroke="currentColor" strokeWidth="0.7197" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.1249 11.0469L12.5249 14.9469L9.1499 18.9219L12.2999 22.8969L19.1249 26.8719L26.0999 22.5219L29.0999 18.9219L25.8749 14.9469L19.1249 11.0469Z" stroke="currentColor" strokeWidth="0.7197" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.1251 11.05L16.2751 9.475L11.8501 8.875L12.5251 14.95L13.5751 18.85L12.2251 22.75L12.1501 29.05L16.3501 28.525L19.1251 26.875L21.8251 28.525L26.2501 28.9L26.1001 22.525L24.8251 18.775L26.0251 15.175L26.6251 9.175L21.7501 9.25L19.1251 11.05Z" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M15.2251 5.27344L16.2751 9.47344" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M9.6001 13.75L12.5251 14.95" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M23.175 5.27344L21.75 9.24844" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M28.575 13.4531L25.875 14.9531" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M9.8999 24.7734L12.2999 22.8984" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M15 32.2734L16.35 28.5234" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M21.825 28.5234L23.25 32.2734" stroke="currentColor" strokeWidth="0.7197" />
          <path d="M26.1001 22.5234L28.5001 24.4734" stroke="currentColor" strokeWidth="0.7197" />
        </svg>
      );

    case 'Pear':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M18.5375 4C18.5375 4 8 10.2013 8 25.2326C8 28.5355 11.7634 33.3212 18.6059 33.1864C25.3116 33.0516 29.0065 28.2658 29.075 24.2889C29.2802 15.2566 24.2852 7.57247 18.5375 4Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.5 4.5L15.4704 10.5266L12.9065 23.2204L11 27.1416L14.2213 27.6732L18.5 29L22.3733 28.1385L25.5946 27.4739L23.8853 23.6856L21.2557 10.8589L18.5 4.5Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.5 33L21.5 30.5L24.0872 23.9602L25.5946 19.2193L22.4427 15.8728L18.5 12.5L14.0834 16.2911L11 19.4284L12.6445 23.4722L14.0148 28.1434L15.5 30.5L18.5 33Z" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M13.6758 8.86719L18.5 12.5024L24.2163 8.86719" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M15.5 10.5L11 13L11.0613 19.0677L8.5 23L10.5743 27.2167L11.5 31L15.3053 30.6697L18.4362 29.2194L21.9149 30.3244L25 31L26.2285 27.4929L29 23.1422L25.8807 18.8605V12.5L21.5 10.5" stroke="currentColor" strokeWidth="0.7058" />
        </svg>
      );

    case 'Marquise':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M19.1426 4C19.1426 4 10.9998 8.64286 10.9998 19.1429C10.9998 28.1429 19.214 33.7143 19.214 33.7143C19.214 33.7143 27.4283 28.6429 27.4283 19C27.4283 9.35714 19.1426 4 19.1426 4Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.9997 11.1406C18.9997 11.1406 16.1426 13.5692 16.1426 18.9978C16.1426 23.6406 18.9997 26.5692 18.9997 26.5692C18.9997 26.5692 21.8569 23.9263 21.8569 18.9263C21.9283 13.9263 18.9997 11.1406 18.9997 11.1406Z" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M15.2141 7.5L27.2141 18.7857L15.4284 30.0714" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M22.9283 7.5L11.2854 18.9286L22.9283 30.4286" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.1426 4.5L16.5712 8.85714L13.5712 9.92857C13.5712 9.92857 13.0712 16.2857 15.9998 19.0714C15.9998 19.0714 13.3569 22 13.5712 27.5L17.1426 28.4286L18.9998 33L20.9284 28.5714L24.9284 27.5C24.9284 27.5 26.0712 22 22.1426 19C22.1426 19 25.2855 16.7857 24.4998 9.78571L21.5712 8.78571L19.1426 4.5Z" stroke="currentColor" strokeWidth="0.7058" />
        </svg>
      );

    case 'Princess':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path d="M33.4167 4.33594H4.5V33.7526H33.4167V4.33594Z" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M26.75 7.41406H10.75V30.5807H26.75V7.41406Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.7513 11.0026L5.16797 4.83594L10.7513 19.0026L4.91797 33.2526L18.7513 27.0859L33.0846 33.0859L26.7513 18.9193L32.918 4.83594L18.7513 11.0026Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.16797 12.9167L18.7513 11L29.668 12.5833V25.3333L18.7513 27.0833L8.16797 25V12.9167Z" stroke="currentColor" strokeWidth="0.7058" />
        </svg>
      );

    case 'Emerald':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.225 4H27.775L31 7.375V30.475L28.525 33.85H10.225L7 31V7L10.225 4Z" stroke="currentColor" strokeWidth="0.6886" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.0499 5.64844H26.7249L29.3499 8.87344V28.8234L27.2499 31.7484H11.4999L8.6499 29.2734V8.64844L11.0499 5.64844Z" stroke="currentColor" strokeWidth="0.6886" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.025 7.45312H25.675L27.9249 10.0781V27.4781L26.125 30.0281H12.475L10.075 27.8531V9.92812L12.025 7.45312Z" stroke="currentColor" strokeWidth="0.6886" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.075 9.10156H24.625L26.575 11.3516V26.2016L25 28.3016H13.525L11.425 26.5016V11.1266L13.075 9.10156Z" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M11.425 26.5L7 31" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M13.5251 28.2969L10.2251 33.8469" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M25 28.2969L28.525 33.8469" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M26.575 26.2031L31 30.4781" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M26.575 11.35L31 7.375" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M24.625 9.1L27.775 4" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M11.425 11.125L7 7" stroke="currentColor" strokeWidth="0.6886" />
          <path d="M13.0751 9.1L10.2251 4" stroke="currentColor" strokeWidth="0.6886" />
        </svg>
      );

    case 'Radiant':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M7 6.9703L10.1147 4H28.2096L31.3243 6.9703V31.2525L27.7647 34H10.1147L7 31.0297V6.9703Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9.43237 8.85501L11.9385 6.42969H26.3857L28.8918 8.85501V29.2865L26.0171 31.5648H11.9385L9.43237 29.1395V8.85501Z" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M10.2432 4L11.9977 6.51351L19 8L26.3265 6.51351L28.081 4" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M9.99976 34L11.9998 31.5L18.9998 29.5L25.9998 31.5L27.2702 34.0001" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M7 7.24219L9.3731 8.86381L19.1622 8.32327L28.9512 8.70165L31.3243 7.24219" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M7 30.5743L9.3731 29.1328L19.1622 29.4331L28.9512 29.2529L31.3243 30.7544" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M9.5 29L11.8648 18.775L9.5 9" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M28.8919 8.86719L26.4595 19.0392L28.8919 29.1375" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M11.946 6.42969L12.5947 18.9973L11.946 31.5648" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M26.2567 6.42969V19.2177L25.8513 31.5648" stroke="currentColor" strokeWidth="0.7058" />
        </svg>
      );

    case 'Asscher':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M8.79412 5H28.0294L32.5 8.38768V28.3152L28.3824 32.5H9.58824L5 28.2298V8.67236L8.79412 5Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10.6471 7.5625H26.4412L30 10.5V26.6833L27 30L11.2647 30.0025L7.55884 26.5175V10.5375L10.6471 7.5625Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.3235 9.9375H24.9412L28 12.4351V25.3377L25.1176 27.9975L13 28L9.94116 25.1595V12.3455L12.3235 9.9375Z" stroke="currentColor" strokeWidth="0.7058" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.8235 11.8828H23.8823L26.3529 13.8877V24.1736L23.8823 26.3528H14.1764L11.8823 24.0864V13.8005L13.8235 11.8828Z" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M13.8236 11.8824L8.79419 5" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M11.8824 13.8263L5 8.79688" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M24 12L28.0295 5" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M26 14L32.5 8.5" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M26.353 24.3203L32.5001 28.5" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M24 26.5L28.5 32.5" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M11.8824 24.2344L5 28.5" stroke="currentColor" strokeWidth="0.7058" />
          <path d="M14 26.5L9.5 32.5" stroke="currentColor" strokeWidth="0.7058" />
        </svg>
      );

    case 'Cushion':
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M21.4973 33.609H17.5042C12.0298 33.609 7.58594 28.1616 7.58594 21.4511V16.5563C7.58594 9.84581 12.0298 4.39844 17.5042 4.39844H21.4973C26.9717 4.39844 31.4156 9.84581 31.4156 16.5563V21.4511C31.4156 28.0826 26.9073 33.609 21.4973 33.609Z" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.5006 11.3438L23.8801 13.6332L25.7479 19.0016L23.8801 24.3701L19.5006 26.6595L15.1211 24.3701L13.2534 19.0016L15.1211 13.6332L19.5006 11.3438Z" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.1212 13.6287L11.0637 13.7076L10.6772 8.02344L15.1212 8.81291V13.6287Z" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.4999 11.345L15.1204 8.81867L19.7575 4.47656L24.0082 8.73972L19.4999 11.345Z" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M15.1198 8.81332L13.0588 5.73438" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24.0087 13.5703L27.9259 13.6484L28.3049 8.02344L23.9456 8.80469L24.0087 13.5703Z" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M23.9456 8.81332L26.0709 5.73438" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.1212 24.447L11.0637 24.2891L10.6772 29.9733L15.1212 29.2627V24.447Z" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.4999 26.6562L15.1204 29.2615L19.7575 33.5247L24.0082 29.2615L19.4999 26.6562Z" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M15.1198 29.2656L13.0588 32.2656" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M24.007 24.4418L27.9653 24.2891L28.3484 29.7891L23.9431 29.1016L24.007 24.4418Z" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M23.9456 29.2656L26.0709 32.2656" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M25.7468 18.9206L28.0654 13.7891L31.35 19.2364L28.0654 24.2891L25.7468 18.9206Z" stroke="currentColor" strokeWidth="0.661687" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.3178 18.9215L11.0636 13.7109L7.7146 19.2373L11.0636 24.2899L13.3178 18.9215Z" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M11.0636 24.2891L8.61621 26.8943" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M11.0634 13.7093L8.74487 10.8672" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M28.0652 13.7882L30.1905 10.8672" stroke="currentColor" strokeWidth="0.661687" />
          <path d="M28.0652 24.2891L30.3193 26.7364" stroke="currentColor" strokeWidth="0.661687" />
        </svg>
      );

    case 'Heart':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden>
          <path d="M4.78702 17.3713C5.10061 18.6881 5.55357 19.9357 6.11106 21.1139C7.33057 23.8515 9.17726 26.2426 11.6163 28.3564C13.672 30.1238 16.1459 31.6832 19.0031 33C19.0711 33 19.1593 33.0179 19.2121 32.9653C28.0971 28.9455 33.0797 22.7079 34.0205 14.5297C34.0902 13.9059 34.125 13.3861 34.125 12.9356C34.125 12.6238 34.0902 12.2772 34.0553 11.9653C33.7417 9.50494 32.3131 7.39109 30.2574 6.14357C30.2574 6.14357 30.2574 6.14357 30.2226 6.14357C29.003 5.41584 27.6093 5 26.0762 5C23.2539 5 19.7348 7.14852 19.1076 7.56436C18.4804 7.14852 14.9612 5 12.1389 5C10.6058 5 9.21212 5.41584 7.99261 6.14357C7.99261 6.14357 7.95776 6.14358 7.95776 6.17823C5.65811 7.56437 4.125 10.0941 4.125 12.9703C4.125 13.4208 4.15985 13.9406 4.22953 14.5644C4.36891 15.5 4.54312 16.4703 4.78702 17.3713ZM5.1703 17.4752L8.37589 16.6782L6.28527 20.6634C5.79747 19.6238 5.44904 18.5842 5.1703 17.4752ZM11.1285 13.7327L8.68946 16.1584L4.71734 12.0693L11.1285 9.71287V13.7327ZM11.1982 14.1485L11.9299 18.5841L8.9682 16.3663L11.1982 14.1485ZM8.75914 16.6782L11.9996 19.0693L11.1982 22.2574L6.52919 20.9406L8.75914 16.6782ZM12.2435 19.3812L15.2051 23.0545L11.5118 22.3267L12.2435 19.3812ZM6.56404 21.3218L10.9543 22.5347L8.68946 24.7525C7.88806 23.6782 7.15638 22.5346 6.56404 21.3218ZM8.93338 25.0644L11.1633 22.8465L11.5466 27.802C10.571 26.9356 9.69993 26.0347 8.93338 25.0644ZM11.4769 22.6733L15.4839 23.4703L16.2853 27.4901L11.8951 28.0099L11.4769 22.6733ZM15.902 23.7475L18.8288 25.9307L16.6337 27.3861L15.902 23.7475ZM12.1389 28.3564L16.2853 27.8713L15.5536 30.7822C14.3341 30.0198 13.1842 29.2228 12.1389 28.3564ZM15.8672 30.9555L16.564 28.1485L18.7243 32.4802C17.7487 31.995 16.7731 31.5099 15.8672 30.9555ZM19.1424 32.4802L16.7731 27.7327L19.1773 26.1386L21.5815 27.7327L19.1424 32.4802ZM19.456 25.9307L22.3828 23.7475L21.6511 27.3861L19.456 25.9307ZM19.4909 32.5148L21.686 28.1485L22.4525 30.9208C21.5466 31.4753 20.5362 31.995 19.4909 32.5148ZM22.7661 30.7475L21.9647 27.8713L26.0762 28.3911C25.1006 29.2228 23.9856 29.9852 22.7661 30.7475ZM21.9647 27.5248L22.7661 23.5049L26.7731 22.7079L26.3201 28.0792L21.9647 27.5248ZM23.0449 23.0545L26.0065 19.3812L26.7382 22.3267L23.0449 23.0545ZM26.7034 27.8366L27.1215 22.8465L29.3515 25.0644C28.5849 26.0347 27.7139 26.9703 26.7034 27.8366ZM29.5605 24.7871L27.2957 22.5693L31.7208 21.3218C31.1285 22.5346 30.4316 23.6782 29.5605 24.7871ZM27.1215 22.2574L26.3201 19.0693L29.5605 16.6782L31.7905 20.9752L27.1215 22.2574ZM27.0867 14.1485L29.3166 16.3663L26.3549 18.5841L27.0867 14.1485ZM26.8079 13.5594L22.5222 12.1386L26.8079 9.74753V13.5594ZM27.1564 13.7327V9.71287L33.5675 12.0693L29.5954 16.1584L27.1564 13.7327ZM31.9996 20.698L29.909 16.6782L33.1145 17.4752C32.8358 18.5842 32.4874 19.6584 31.9996 20.698ZM33.7765 12.9356C33.7765 13.3515 33.7417 13.8713 33.672 14.4951C33.5675 15.3961 33.4281 16.2624 33.2191 17.1287L29.9438 16.297L33.7765 12.3812C33.7765 12.5545 33.7765 12.7624 33.7765 12.9356ZM33.672 11.7228L27.2957 9.40098L30.2226 6.49009C32.0344 7.63366 33.3236 9.53961 33.672 11.7228ZM26.1111 5.31189C27.5048 5.31189 28.794 5.69307 29.909 6.31683L26.9821 9.22771L23.7766 5.72771C24.578 5.48514 25.3794 5.31189 26.1111 5.31189ZM26.7034 9.43564L22.0693 12L19.4212 11.1337L23.463 5.90098L26.7034 9.43564ZM19.3166 7.84159C19.6651 7.63366 21.1982 6.66336 22.9752 6.00494L19.3166 10.6832V7.84159ZM19.3166 11.4455L21.6511 12.2079L19.3166 13.4901V11.4455ZM19.0727 13.9406C19.1076 13.9406 19.1076 13.9752 19.1424 13.9752C19.1773 13.9752 19.2121 13.9752 19.2121 13.9406L22.0693 12.3465L26.7382 13.9059L25.902 18.9307L22.4525 23.1931L19.1424 25.7228L15.7975 23.2277L12.348 18.9653L11.5118 13.9406L16.1807 12.3812L19.0727 13.9406ZM11.4769 13.5594V9.74753L15.7626 12.104L11.4769 13.5594ZM16.6337 12.2079L18.9682 11.4455V13.5248L16.6337 12.2079ZM18.9682 7.84159V10.6832L15.24 5.9703C17.0518 6.62872 18.6198 7.59901 18.9682 7.84159ZM18.8637 11.1337L16.2156 12L11.5815 9.43564L14.7522 5.90098L18.8637 11.1337ZM12.1738 5.31189C12.9055 5.31189 13.672 5.4505 14.4734 5.69308L11.3027 9.19308L8.37589 6.28217C9.49087 5.69306 10.7801 5.31189 12.1738 5.31189ZM8.06229 6.49009L10.9891 9.40098L4.61281 11.7228C4.96124 9.53961 6.25045 7.66831 8.06229 6.49009ZM4.54313 12.3812L8.37589 16.297L5.10062 17.1287C4.89156 16.2624 4.75219 15.3961 4.64766 14.4951C4.54313 13.8713 4.50828 13.3515 4.50828 12.9356C4.50828 12.7624 4.50829 12.5545 4.54313 12.3812Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox={vb} fill="none" aria-hidden>
          <path d="M15.0845 9.35161L9.34795 23.0101L23.0065 28.7467L28.7431 15.0882L15.0845 9.35161ZM15.0845 9.35161L19 4.34183L23.0975 9.35161M15.0845 9.35161L8.68241 8.79468L9.34795 14.9061M15.0845 9.35161L13.1723 5.34511M23.0975 9.35161L9.34795 14.9971L14.9935 28.7467L28.7431 23.1012L23.0975 9.35161ZM23.0975 9.35161L29.4262 8.68607L28.652 15.0882L33.6618 19.2768L28.652 23.1012L29.3176 29.3212L22.9154 28.6557M23.0975 9.35161L24.6455 5.25405M9.34795 14.9061L4.33817 19.4381L9.34795 22.9191M9.34795 14.9061L5.15933 13.5402M9.34795 22.9191L8.68241 29.3212L14.9024 28.6557M9.34795 22.9191L5.25039 24.6492M14.9024 28.6557L19.3258 33.6655L22.9154 28.6557M14.9024 28.6557L13.2634 32.7532M22.9154 28.6557L24.4634 32.7532M28.652 23.1923L32.8406 24.7402M28.7431 14.9061L32.8406 13.6313M19 4.07031C27.2862 4.07031 33.9333 10.7175 33.9333 19.0036C33.9333 27.2898 27.2862 33.937 19 33.937C10.7138 33.937 4.06665 27.2898 4.06665 19.0036C4.06665 10.7175 10.7138 4.07031 19 4.07031Z" stroke="currentColor" strokeWidth="0.706" strokeMiterlimit="10" />
        </svg>
      );
  }
};

interface DiamondShapeSelectorProps {
  shapes?: string[];
  selectedShape: string;
  onShapeChange: (shape: string) => void;
  hideLabel?: boolean;
}

const DiamondShapeSelector: React.FC<DiamondShapeSelectorProps> = ({
  shapes = DIAMOND_SHAPES as unknown as string[],
  selectedShape,
  onShapeChange,
  hideLabel = false,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {!hideLabel && (
        <div className="flex items-center gap-2">
          <label className="text-micro font-bold uppercase tracking-widest text-orea-dark">
            {'Shape:'}
          </label>
          <span className="text-body-sm font-light text-orea-taupe tracking-wide">
            {selectedShape}
          </span>
        </div>
      )}
      <div className="w-full flex flex-row items-stretch overflow-x-auto no-scrollbar gap-0.5 pb-1">
        {shapes.map((shape) => {
          const isActive = selectedShape === shape;
          return (
            <button
              key={shape}
              onClick={() => onShapeChange(shape)}
              style={{ outline: "none", boxShadow: "none", WebkitTapHighlightColor: "transparent" }}
              className="relative flex flex-1 flex-col items-center justify-center group transition-all duration-300 h-12"
              aria-label={`Select ${shape} shape`}
              aria-pressed={isActive}
            >
              <div
                className={`flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? 'opacity-100 scale-110 text-orea-dark'
                    : 'opacity-30 group-hover:opacity-70 text-orea-dark'
                }`}
                style={{ width: 30, height: 30 }}
              >
                <ShapeIcon shape={shape} />
              </div>
              {isActive && (
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-orea-dark animate-in slide-in-from-bottom-1" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { ShapeIcon, DIAMOND_SHAPES };
export default DiamondShapeSelector;
