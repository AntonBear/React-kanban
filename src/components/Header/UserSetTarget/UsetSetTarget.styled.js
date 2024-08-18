import styled from 'styled-components'

export const pop_user = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.pop_user.color};
  &:hover {
    color: #33399b;
    &::after {
      content: '';
      display: inline-block;
      width: 8px; // Ширина SVG
      height: 6px; // Высота SVG
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.08955 1.13726C0.840306 0.891094 0.437472 0.891094 0.188227 1.13726C-0.0627424 1.38514 -0.0627423 1.78832 0.188227 2.03619L2.87162 4.68647C3.35849 5.16734 4.14151 5.16734 4.62838 4.68647L7.31177 2.03619C7.56274 1.78832 7.56274 1.38514 7.31177 1.13726C7.06253 0.891095 6.65969 0.891094 6.41045 1.13726L3.75 3.76489L1.08955 1.13726Z' fill='%23565EEF'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      margin-left: 5px;

      /* border-left-color: #33399b;
      border-bottom-color: #33399b; */
     
    }
  }
`
