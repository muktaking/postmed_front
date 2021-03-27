import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner, Toast } from "react-bootstrap";
import MultiStep from 'react-multistep';
import { useDispatch, useSelector } from 'react-redux';
import { resetResponseLoader } from '../../store/question';
import MiniQues from "./component/miniques";
import StepOne from './component/stepOne';
import StepThree from './component/stepThree';
import StepTwo from './component/stepTwo';
import { stem, submitHandler, validator } from "./component/utils";



const btnStyle = {
    backgroundColor: '#44c767',
	borderRadius: "28px",
	border: "1px solid #18ab29",
	display: "inline-block",
	cursor: "pointer",
	color: "#ffffff",
	fontFamily:" Arial",
	fontSize: "17px",
	padding: "8px 31px",
    marginRight: "20px",
	textDecoration: "none",
	textShadow: "0px 1px 0px #2f6627"
}


export default function Index({viewHandler, id}) {

    const [stemNum, setStemNum] = useState(5);
    const [stems, setStems] = useState(stem(5));
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.question.loading);
    const res = useSelector(state=> state.question.response);

    const [data,setData] = useState({
        id: null, 
        title: '',
        category: '',
        qType: 'matrix',
        qText: '',
        stems: [...stems],
        generalFeedback: '',
        tags: '',
        });

    useEffect( ()=>{

        axios.get(process.env.REACT_APP_SITE_URL+'/questions/' + id)
        .then(response=>{
            let question = {
                id: response.data.id,
                title: response.data.title,
                category: response.data.categoryId,
                qType: response.data.qType,
                qText: response.data.qText,
                generalFeedback: response.data.generalFeedback,
                tags: response.data.tags
            };
            response.data.stems.forEach((stem,index)=>{
                question= {
                    ...question,
                    ["qStem" + index]: stem.qStem,
                    ["aStem" + index]: stem.aStem.toString(),
                    ["fbStem" + index]: stem.fbStem,
                    ["aStemSba"]: stem.aStem.toString()
                }

            })
            setData(question);
        })
        .catch(e=>console.log(e))
        
        
    },[]);

    const setRes = () => {
        dispatch(resetResponseLoader())
    };

    const stemsInc = ()=>{
        setStems(stem(stemNum + 1));
        setStemNum(stemNum + 1);
    }
    const stemDec = (values)=>{
        delete values['qStem'+ (stemNum-1)];
        delete values['aStem'+ (stemNum-1)]  
        delete values['fbStem'+ (stemNum-1)]
        setStems(stem(stemNum - 1));
        setStemNum(stemNum - 1);

    }

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
                    <strong className="mr-auto">Question Edited Successfully</strong>
                </Toast.Header>
                <Toast.Body>{res && 'id' in res ? <MiniQues question={res} viewHandler={viewHandler} /> : 'Error occured'}</Toast.Body>
            </Toast>}

            <h3>Edit Question</h3>

            <Formik
            enableReinitialize
            initialValues={data}
            validate={validator()}
            onSubmit={submitHandler(stemNum, dispatch, true)}
            >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                /* and other goodies */
            }) => (
                <Form onSubmit={handleSubmit}>
                    <MultiStep showNavigation={false} steps={[
                        {
                        name: 'StepOne',
                        component: <StepOne values={values} errors={errors} handleChange={handleChange} />
                        },
                        {
                            name: 'StepTwo',
                            component: <StepTwo  stems={stems} values={values} errors={errors} handleChange={handleChange} stemInc={stemsInc} stemDec={stemDec}/>
                        },
                        {
                            name: 'StepThree',
                            component: <StepThree values={values} errors={errors} handleChange={handleChange} />
                        }
                    ]}
                    prevStyle={btnStyle} nextStyle={btnStyle}

                    />
                  <Button type="submit" className="mt-3 btn-submit" >Submit</Button>  
                </Form>
            )}
            </Formik>            
        </div>
    )
}

