import React, { useEffect, useState } from 'react';
import { Form, ListGroup, Spinner, Toast } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../store/category';
import { getQuestionByCategoryLoader, resetResponseLoader } from '../../store/question';
import { paginate } from '../../utils/paginate';
import MiniQues from './component/miniques';

export default function SelectQuestions({viewHandler}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(null);
    const dispatch = useDispatch();
    const categories = useSelector(state=> state.category.categories);
    const questions = useSelector(state=> state.question.questions);
    const loading = useSelector(state=> state.question.loading);
    const res = useSelector(state=> state.question.response);
    

    useEffect(()=>{
        dispatch(fetchCategory());
    },[]);
    const onPageHandler = (page)=>{
        setCurrentPage(page);
    }

    const  handleChange = (e) => {
        dispatch(getQuestionByCategoryLoader(e.target.value));
        setCurrentCategory(e.target.value);
      };
    const questionsForPagi = paginate(
    questions,
    currentPage,
    10
    ); 
    
    const setRes = () => {
        dispatch(resetResponseLoader());
        dispatch(getQuestionByCategoryLoader(currentCategory));
    };

    return (
        <div>

            {loading && <Spinner
            animation="grow"
            role="status"
            variant="dark"
            className="content-center"
            >
            </Spinner>
            }
            {<Toast show={res} onClose={setRes} style={{position: 'fixed', right: '20px'}}>
                <Toast.Header>
                    <strong className="mr-auto">Response</strong>
                </Toast.Header>
                <Toast.Body>{res && 'message' in res ? res.message : JSON.stringify(res) }</Toast.Body>
            </Toast>}

            <div className="d-flex">
                <div>
                <Form.Group controlId="categoryType" className="mr-5">
                <Form.Label>Category Type</Form.Label>
                <Form.Control
                    as="select"
                    name="categoryType"
                    onChange={handleChange}

                >
                    <option value="">Select...</option>
                    {categories.map((value) => {
                    let categorySlug = value.slug.replace(/_/g, " / ");
                    return <option value={value.id}>{categorySlug}</option>;
                    })}
                </Form.Control>
                </Form.Group>
                </div>
                <div>
                <ListGroup className="my-2">
                    {questions.length < 1 && <p className="text-danger">No Question in this category.</p>}
                    {questionsForPagi.map((question, index) => (
                        <ListGroup.Item
                        key={question.id}
                        variant={index % 2 === 0 ? "dark" : "light"}
                        className="d-flex"
                        >            
                        <div className="mt-1 mr-3">{(index + 1) * currentPage}.</div>
                        <MiniQues question={question} viewHandler={viewHandler} />
                        </ListGroup.Item>
                    ))}
                    </ListGroup>
                </div>
                
            </div>

            <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={10}
                    totalItemsCount={questions.length}
                    pageRangeDisplayed={4}
                    onChange={onPageHandler}
                    itemClass="page-item"
                    linkClass="page-link"
                    prevPageText="Previous"
                    nextPageText="Next"
                    /> 

        </div>
    )
}
