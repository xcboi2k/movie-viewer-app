import styled from 'styled-components/native';
import { Container } from '../../common/Styles';

export const WatchlistContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;  
`;

export const WatchlistHeader = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #58F5D9;
    align-self: flex-start;
`;

export const WatchlistHeaderContainer = styled.View`
    margin-top: 5px;
    margin-bottom: 3px;
    width: 90%;
`;

export const WatchlistSection = styled.View`
    flex: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    width: 90%;
    height: 610px;
`;
