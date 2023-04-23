import { Dropdown } from "components/dropdown";
import { Field, FieldRow } from "components/field";
import { Input, TextArea } from "components/input";
import { Label } from "components/label";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { Button } from "components/button";
import useOnChange from "hooks/useOnChange";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import { apiUrl, imgbbAPI } from "components/config/config";
import ImageUpload from "components/image/ImageUpload";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];
const CampaignAddNew = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();
  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };

  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`${apiUrl}/campaigns`, {
        ...values,
        content,
        endDate,
        startDate,
      });
      handleReset();
      toast.success("create new campaign successfully!");
    } catch (error) {
      toast.error("can not create new campaign");
    }
  };
  const [content, setContent] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  const handleDropdownLabel = (name, defaultValue = "") => {
    const label = watch(name) || defaultValue;
    return label;
  };
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    async function fetchCountriesData() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountriesData();
  }, [filterCountry]);

  return (
    <Fragment>
      <div className=" py-10 px-[66px] bg-white">
        <div className="w-full max-w-[380px] rounded-lg mx-auto py-4 px-14 bg-text4 bg-opacity-10 mb-10">
          <p className="text-text2 font-bold text-2xl">Start a Campaign 🚀</p>
        </div>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FieldRow>
            <Field>
              <Label>Campaign Title *</Label>
              <Input
                placeholder="write a title"
                name="title"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={handleDropdownLabel(
                    "category",
                    "Select category"
                  )}
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.length > 0 &&
                    categoriesData.map((category) => (
                      <Dropdown.Option
                        key={category}
                        onClick={() =>
                          handleSelectDropdownOption("category", category)
                        }
                      >
                        <span className="capitalize">{category}</span>
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </Field>
          </FieldRow>
          <Field>
            <Label>Featured Image</Label>
            <ImageUpload
              onChange={setValue}
              name="featured_image"
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Short Description *</Label>
            <TextArea
              name="short_description"
              control={control}
              className="h-[145px]"
              placeholder="Write a short description"
            ></TextArea>
          </Field>

          <Field>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story..."
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </Field>

          <div className="flex items-center justify-center gap-x-2 w-full bg-secondary bg-opacity-20 p-6 rounded-2xl my-5">
            <span>You will get 90% of total raised</span>
          </div>

          <FieldRow>
            <Field>
              <Label>Goal*</Label>
              <Input
                placeholder="$0.00 USD"
                control={control}
                name="goal"
              ></Input>
            </Field>
            <Field>
              <Label>Raised Amount*</Label>
              <Input
                placeholder="$0.00 USD"
                control={control}
                name="amount"
              ></Input>
            </Field>
          </FieldRow>
          <FieldRow>
            <Field>
              <Label>Amount Prefilled*</Label>
              <Input
                placeholder="Amount Prefilled"
                control={control}
                name="prefill"
              ></Input>
              <p className="text-text3 text-sm">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </Field>
            <Field>
              <Label>Video*</Label>
              <Input
                placeholder="$0.00 USD"
                control={control}
                name="video"
              ></Input>
              <p className="text-text3 text-sm">
                Place Youtube or Vimeo Video URL
              </p>
            </Field>
          </FieldRow>

          <FieldRow>
            <Field>
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Developer</Dropdown.Option>
                  <Dropdown.Option>Developer</Dropdown.Option>
                  <Dropdown.Option>Developer</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </Field>
            <Field>
              <Label>Country</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={handleDropdownLabel("country", "select country")}
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search Country"
                    onChange={setFilterCountry}
                  ></Dropdown.Search>

                  {countries.length > 0 &&
                    countries.map((country) => {
                      return (
                        <Dropdown.Option
                          onClick={() =>
                            handleSelectDropdownOption(
                              "country",
                              country?.name?.common
                            )
                          }
                          key={country?.name?.common}
                        >
                          <span>{country?.name?.common}</span>
                        </Dropdown.Option>
                      );
                    })}
                </Dropdown.List>
              </Dropdown>
            </Field>
          </FieldRow>

          <FieldRow>
            <Field>
              <Label>Start date</Label>
              <DatePicker
                format="dd-MM-yyyy"
                onChange={setStartDate}
                value={startDate}
              />
            </Field>
            <Field>
              <Label>End date</Label>
              <DatePicker
                format="dd-MM-yyyy"
                onChange={setEndDate}
                value={endDate}
              />
            </Field>
          </FieldRow>

          <Button
            className="bg-primary mx-auto my-10 text-white w-full max-w-[255px]"
            isLoading={isSubmitting}
            type="submit"
          >
            Create new campaign
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default CampaignAddNew;
