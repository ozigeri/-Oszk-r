import Button from './Button/Button';
import Loader from './Loader';
import TextInput from './Input/TextInput';
import Dropdown from './Dropdown/Dropdown';
import Checkbox from './Checkbox/Checkbox';
import DatePicker from './DatePicker/DatePicker';
import DateTimePicker from './DateTimePicker/DateTimePicker';
import MonthPicker from './MonthPicker/MonthPicker';
import TimePicker from './TimePicker/TimePicker';
import Notification from './Notification/Notification';
import NotificationService from '@/services/API/NotificationService/NotificationService';
import Badge from './Badge/Badge';
import List from './List/List';
import Dialog from './Dialog/Dialog';
import { useState } from 'react';
import Tooltip from './Tooltip/Tooltip';
import Toggle from './Toggle/Toggle';
import Pagination from './Pagination/Pagination';
import TextArea from '../TextArea/TextArea';
import MultiDropdown from './MultiDropdown/MultiDropdown';
import OptionBar from './OptionBar/OptionBar';
import Slider from './Slider/Slider';
import Autocomplete from './Autocomplete/Autocomplete';

const UIWrapperShowcase = () => {
    const buttonVariants = ['primary', 'secondary', 'tertiary', 'close'];
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState('1');
    const [sliderValue, setSliderValue] = useState(33);
    const [autocompleteValue, setAutocompleteValue] = useState('');

    // const []
    return (
        <div className="e-container" style={{ marginBottom: '50px' }}>
            <Loader visible={true} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextInput label="text input label" placeholder="text-input" />
                <TextArea label="Textarea label" />
                <Dropdown
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    options={[
                        {
                            label: 'Clean',
                            value: 'clean',
                        },
                        {
                            label: 'Code',
                            value: 'code',
                        },
                    ]}
                />
                <MultiDropdown
                    onChange={(val) => {
                        console.log(val);
                    }}
                    selectAll
                    options={Array.from({ length: 100 }, (_, i) => ({
                        label: `Option ${i + 1}`,
                        value: `option_${i + 1}`,
                    }))}
                    defaultSelected={['option_3', 'option_4']}
                />

                <MultiDropdown
                    onChange={(val) => {
                        console.log(val);
                    }}
                    singleSelect
                    options={Array.from({ length: 10 }, (_, i) => ({
                        label: `Option ${i + 1}`,
                        value: `option_${i + 1}`,
                    }))}
                />

                
                <Autocomplete
                    dictionary={["the", "array", "of", "autocomplete", "words"]}
                    value={autocompleteValue}
                    setValue={setAutocompleteValue}
                    showAutocompleteListInitially={false}
                />

                <MonthPicker label="Month input" onChange={(e) => console.log(e.target.value)} />
                <DatePicker label="Date input" onChange={(e) => console.log(e.target.value)} />
                <DateTimePicker label="Datetime input" onChange={(e) => console.log(e.target.value)} />
                <TimePicker label="Time input" onChange={(e) => console.log(e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: '100px' }}>
                {buttonVariants.map((variant, idx: number) => {
                    return (
                        <Button
                            key={idx}
                            onClick={() => console.log(variant)}
                            variant={variant as any}
                        >
                            {variant}
                        </Button>
                    );
                })}
            </div>

            <Checkbox defaultChecked onChange={(e) => console.log(e.target.checked)} label="Hello world!" />
            <Toggle
                leftLabel="Off"
                rightLabel="On"
                // checked={true}
                // onChange={setIsOn}
            />
            <OptionBar
                variant="label"
                name="demo-options-1"
                options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' },
                ]}
                selected={selectedOption}
                onChange={setSelectedOption}
            />
            <OptionBar
                variant="with-icon"
                name="demo-options-2"
                options={[
                    { value: '1', label: 'Option 1', icon: 'emoji-happy' },
                    { value: '2', label: 'Option 2', icon: 'emoji-happy' },
                    { value: '3', label: 'Option 3', icon: 'emoji-happy' },
                ]}
                selected={selectedOption}
                onChange={setSelectedOption}
            />
            <Slider min={0} max={100} value={sliderValue} onChange={setSliderValue} labelLeft="0" labelRight="100" />

            {['neutral', 'success', 'warning', 'error'].map((item, idx: number) => {
                return (
                    <Notification key={idx} variant={item as any}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi maxime in, sint corrupti accusantium
                        praesentium excepturi temporibus deserunt iure quasi maiores! Cum veniam dolore blanditiis ab maiores
                        omnis aperiam sapiente?
                    </Notification>
                );
            })}

            <div>
                {['neutral', 'success', 'warning', 'error'].map((item, idx: number) => {
                    return (
                        <Button
                            key={idx}
                            onClick={() => {
                                NotificationService.show(item as any, 'Notification service works fine.', 6500);
                            }}
                        >
                            Show {item} notificaton
                        </Button>
                    );
                })}
            </div>

            <div style={{ marginTop: '15px', display: 'flex', gap: '12px' }}>
                <Badge text="Error badge" variant="error">
                    <Button variant="secondary">Badge on a button</Button>
                </Badge>

                <Badge text="Purple highlight" variant="purple">
                    <Button variant="primary">Badge on a button</Button>
                </Badge>

                <Badge text="Success badge" variant="success">
                    <Button variant="secondary">Badge on a button</Button>
                </Badge>

                <Badge text="2+ items" variant="blue">
                    <div style={{ width: '200px' }}>
                        <Dropdown
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            options={[
                                {
                                    label: 'Clean',
                                    value: 'clean',
                                },
                                {
                                    label: 'Code',
                                    value: 'code',
                                },
                            ]}
                        />
                    </div>
                </Badge>

                <Badge text="Warning badge" variant="warning">
                    <Button variant="primary">Badge on a button</Button>
                </Badge>
            </div>
            <div style={{ display: 'flex', marginTop: '12px' }}>
                <List
                    variant="dotted"
                    elements={[1, 2, 3, 4, 5].map((n) => ({
                        value: `x${n}`,
                        text: `Dotted item ${n}`,
                    }))}
                />
                <List
                    onListItemClick={(clickedElement) => console.log(clickedElement)}
                    variant="ordered"
                    elements={[1, 2, 3, 4, 5].map((n) => ({
                        value: `x${n}`,
                        text: `Ordered list item (with onClick events)`,
                    }))}
                />
                <List
                    variant="checked"
                    elements={[1, 2, 3, 4, 5].map((n) => ({
                        value: `x${n}`,
                        text: `Checked list item ${n}`,
                    }))}
                />
            </div>
            <div>
                <button onClick={() => setIsDialogOpen(true)} className="a-button a-button--primary -without-icon">
                    <span className="a-button__label">Open Dialog</span>
                </button>

                <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                    <Dialog.Header>Dialog Title</Dialog.Header>
                    <Dialog.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta provident reprehenderit
                        explicabo incidunt ipsam, ullam distinctio sequi alias, voluptatum dolor accusamus voluptatem illum
                        delectus ab maiores consequatur iure cumque.
                    </Dialog.Body>
                    <Dialog.Footer>
                        <Button
                            onClick={() => {
                                console.log('Confirmed');
                                setIsDialogOpen(false);
                            }}
                        >
                            Confirm
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => {
                                console.log('Canceled');
                                setIsDialogOpen(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </Dialog.Footer>
                </Dialog>

                <Tooltip content="This is the content of the tooltip.">
                    <div>If you hover this text it will show a tooltip.</div>
                </Tooltip>

                <Tooltip content="This is the content of the tooltip with variant" variant="error">
                    <div>If you hover this text it will show a tooltip. But with another variant.</div>
                </Tooltip>

                <Pagination
                    currentPage={currentPage}
                    totalPages={20}
                    maxVisible={5}
                    onPageChange={(page) => setCurrentPage(page)}
                />

            </div>
        </div>
    );
};

export default UIWrapperShowcase;
