import { VFC } from 'react';

import cn from 'clsx';
import { Formik, Form, Field, FieldProps } from 'formik';
import { helperConfig, initialValues, SignupSchema } from './MyFrom.helper';
import styles from './styles.module.scss';

export interface MyFormProps {
  className?: string;
}

export const MyForm: VFC<MyFormProps> = ({ className }) => {
  return (
    <div className={cn(styles.myForm, className)}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(true);
        }}
      >
        <Form>
          {helperConfig.map((item) => (
            <Field {...item} key={item.id}>
              {({ meta, field }: FieldProps) => (
                <>
                  <input {...item} {...field} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </>
              )}
            </Field>
          ))}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
