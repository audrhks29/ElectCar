import React, { memo } from 'react';
import newsData from '../assets/newsData.json'
import { useState } from 'react';
import { Container, Paginate, Table } from '../styled/noticeListStyle';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import NoticeTopPined from '../components/NoticeTopPined';
const NoticeList = memo(() => {
    const [data, setData] = useState(newsData);
    const sortedData = [...data].sort((a, b) => b.id - a.id);
    const pagePerData = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(sortedData.length / pagePerData));
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const sortedDataPage = sortedData.slice((currentPage - 1) * pagePerData, currentPage * pagePerData);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    const gotoFirstPage = () => {
        setCurrentPage(1);
    }
    const gotoLastPage = () => {
        setCurrentPage(totalPages);
    }
    const gotoNextPage = () => {
        if (currentPage < totalPages) { setCurrentPage(currentPage + 1); }
    }
    const gotoPreviousPage = () => {
        if (currentPage > 1) { setCurrentPage(currentPage - 1); }
    }
    const lastPageItemCount = data.length % pagePerData;
    console.log(lastPageItemCount);
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
                                sortedDataPage.map((item, index) => {
                                    const { id, title, date, hits } = item
                                    return (
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td><Link to={`/noticeList/${id}`}><strong>{title}</strong></Link></td>
                                            <td onClick={() => onGO(id)}>{date}</td>
                                            <td>{hits}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <Paginate>
                    <p><i><HiOutlineChevronDoubleLeft onClick={gotoFirstPage} /></i></p>
                    <p><i><HiOutlineChevronLeft onClick={gotoPreviousPage} /></i></p>
                    {
                        pageNumbers.map((number, index) => {
                            return (
                                <p key={index} onClick={() => handlePageClick(number)} className={currentPage === number ? 'on' : ''}>
                                    {number}
                                </p>
                            )
                        })
                    }
                    <p><i><HiOutlineChevronRight onClick={gotoNextPage} /></i></p>
                    <p><i><HiOutlineChevronDoubleRight onClick={gotoLastPage} /></i></p>
                </Paginate>
            </div>
        </Container >
    );
});

export default NoticeList;