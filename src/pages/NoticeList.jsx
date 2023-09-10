import React, { memo, useEffect } from 'react';
import { Container, Paginate, Table } from '../styled/noticeListStyle';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import NoticeTopPined from '../components/NoticeTopPined';
import { getNoticeData, goToPage, setInitialPagination, setSelectedData, setSlicedData } from '../store/modules/noticeSlice';
import { useDispatch, useSelector } from 'react-redux';
const NoticeList = () => {
    const { noticeData, currentPage, arrayPageNumbers, slicedNoticeData } = useSelector(state => state.noticeR);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNoticeData())
    }, [])
    useEffect(() => {
        dispatch(setInitialPagination())
        dispatch(setSlicedData())
    }, [noticeData, currentPage])
    return (
        <Container>
            <div className="inner">
                <NoticeTopPined />
                <div className="notice_list">
                    <Table>
                        <colgroup>
                            <col style={{ width: "13%" }} />
                            <col />
                            <col style={{ width: "13%" }} />
                            <col style={{ width: "13%" }} />
                        </colgroup>
                        <thead style={{ borderBottom: '2px solid #000' }}>
                            <tr>
                                <th>NO</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                slicedNoticeData && slicedNoticeData.map((item, index) => {
                                    const { id, title, date, hits } = item
                                    return (
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td><Link to={`/noticeList/${id}`}><strong>{title}</strong></Link></td>
                                            <td>{date}</td>
                                            <td>{hits}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <Paginate>
                    <p><i><HiOutlineChevronDoubleLeft onClick={() => dispatch(goToPage(1))} /></i></p>
                    <p><i><HiOutlineChevronLeft onClick={() => dispatch(goToPage(currentPage - 1))} /></i></p>
                    {
                        arrayPageNumbers.map((number, index) => {
                            return (
                                <p
                                    key={index}
                                    onClick={() => dispatch(goToPage(number))}
                                    className={currentPage === number ? 'on' : ''}
                                >
                                    {number}
                                </p>
                            )
                        })
                    }
                    <p><i><HiOutlineChevronRight onClick={() => dispatch(goToPage(currentPage + 1))} /></i></p>
                    <p><i><HiOutlineChevronDoubleRight onClick={() => dispatch(goToPage(arrayPageNumbers.length))} /></i></p>
                </Paginate>
            </div>
        </Container >
    );
};

export default NoticeList;