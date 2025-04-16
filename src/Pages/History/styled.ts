import styled from "styled-components";
import { defaultTheme } from "../../Themes/default";

export const HistoryContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 3.5rem;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${defaultTheme["gray-100"]};
  }
`;
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${defaultTheme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${defaultTheme["gray-100"]};
      font-size: 0%.875rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left:1.5rem ;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td{
        background-color: ${defaultTheme["gray-700"]};
        border-top: 4px solid ${defaultTheme["gray-800"]};
        padding: 1rem;
        font-size: 0%.875rem;
        line-height: 1.6;

        &:first-child {
        width: 50%;
        padding-left:1.5rem ;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
