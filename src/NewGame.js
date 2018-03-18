import React from 'react';
import {Form, Input, Button} from 'antd';

const FormItem = Form.Item;


class NewGame extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: ''
        };

    }

    createNewGame({opponent}) {
        this.props.eth.contract.createGame(opponent)
            .then((response) => {
                this.setState({message: 'Game created!'});
            })
            .catch((err) => {
                this.setState({message: err.message});
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.createNewGame(values)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 30,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>New game</h1>
                <FormItem
                    {...formItemLayout}
                    label="Opponent ID"
                >
                    {getFieldDecorator('opponent', {
                        rules: [{
                            required: true, message: 'Please enter opponent\'s account ID'
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Create</Button>
                </FormItem>

                <div>{this.state.message}</div>
            </Form>
        );
    }
}

const WrappedNewGame = Form.create()(NewGame);

export default WrappedNewGame;