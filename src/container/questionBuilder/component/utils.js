import { createQuestionLoader, editQuestionLoader } from '../../../store/question';

export const stem = (initialStems)=> {
    if(typeof initialStems === 'number'){
     const arr = [];
     for(let i=0; i<initialStems; i++){
         arr.push({
          qStem: '',
          aStem: '',
          fbStem: ''
         })
     }
     return arr;
    } 
    return initialStems;
 };


export function submitHandler(stemNum, dispatch, edit) {
    return (values, { setSubmitting }) => {
        let error = '';

        if (values.stems && values.stems.length > 0 && values['qStem0']) {
            values.stems.forEach((stem, index) => {
                if (index > 0 && !values['qStem' + (index - 1)] && values['qStem' + index]) {
                    error += ` Stem's No.${index - 1} qStem can not be empty`;
                } else if (values.qType === "matrix" && (values['aStem' + index] || values['fbStem' + index]) && !values['qStem' + index]) {
                    error += ` Stem's No.${index} qStem can not be empty`;
                } else if (values.qType === "matrix" && values['qStem' + index] && !values['aStem' + index]) {
                    error += ` Stem's No.${index} qStem or aStem can not be empty`;
                } else if (values.qType === "sba" && values['fbStem' + index] && !values['qStem' + index]) {
                    error += ` Stem's No.${index} qStem can not be empty`;
                } else if (values.qType === "sba" && !values['qStem' + values['aStemSba']]) {
                    error += ` Stem's No.${values['aStemSba']} qStem or aStem can not be empty`;
                }
                if (error === '') {
                    stem['qStem'] = values['qStem' + index];
                    stem['aStem'] = values.qType === 'matrix' ? values['aStem' + index] : (parseInt(values['aStemSba']) + 1).toString();
                    stem['fbStem'] = values['fbStem' + index];
                    console.log((stem))
                    // delete values['qStem' + index];
                    // delete values['aStem' + index];
                    // delete values['fbStem' + index];
                    // delete values['aStemSba'];
                }
            });

        } else {
            error += 'Stems can not be emty';
            values.stems = [...stem(stemNum)];
        }

        if (error === '') {
            values.stems = values.stems.filter(stem => stem.qStem);

            if(edit){
                dispatch(editQuestionLoader(values.id,{
                    title: values.title,
                    category: values.category,
                    qType: values.qType,
                    qText: values.qText,
                    stem: values.stems,
                    generalFeedback: values.generalFeedback,
                    tags: [values.tags]
                }))
            } else{
                dispatch(
                    createQuestionLoader({
                        title: values.title,
                        category: values.category,
                        qType: values.qType,
                        qText: values.qText,
                        stem: values.stems,
                        generalFeedback: values.generalFeedback,
                        tags: [values.tags]
                    })
                )
            }
            setSubmitting(true);

        } else {
            alert(JSON.stringify(error, null, 2));
            setSubmitting(false);

        }
    };
}

export function validator() {
    return values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        }
        else if (!values.category) {
            errors.category = 'Required';
        }
        else if (!values.qText) {
            errors.qText = 'Required';
        }

        return errors;
    };
}