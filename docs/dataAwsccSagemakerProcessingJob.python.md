# `dataAwsccSagemakerProcessingJob` Submodule <a name="`dataAwsccSagemakerProcessingJob` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerProcessingJob <a name="DataAwsccSagemakerProcessingJob" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_processing_job awscc_sagemaker_processing_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_processing_job#id DataAwsccSagemakerProcessingJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerProcessingJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerProcessingJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerProcessingJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerProcessingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerProcessingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.appSpecification">app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference">DataAwsccSagemakerProcessingJobAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.autoMlJobArn">auto_ml_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.exitMessage">exit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.experimentConfig">experiment_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference">DataAwsccSagemakerProcessingJobExperimentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.monitoringScheduleArn">monitoring_schedule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingEndTime">processing_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingInputs">processing_inputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList">DataAwsccSagemakerProcessingJobProcessingInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobArn">processing_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobName">processing_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobStatus">processing_job_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingOutputConfig">processing_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingResources">processing_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingStartTime">processing_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference">DataAwsccSagemakerProcessingJobStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList">DataAwsccSagemakerProcessingJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.trainingJobArn">training_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `app_specification`<sup>Required</sup> <a name="app_specification" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.appSpecification"></a>

```python
app_specification: DataAwsccSagemakerProcessingJobAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference">DataAwsccSagemakerProcessingJobAppSpecificationOutputReference</a>

---

##### `auto_ml_job_arn`<sup>Required</sup> <a name="auto_ml_job_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.autoMlJobArn"></a>

```python
auto_ml_job_arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.environment"></a>

```python
environment: StringMap
```

- *Type:* cdktn.StringMap

---

##### `exit_message`<sup>Required</sup> <a name="exit_message" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.exitMessage"></a>

```python
exit_message: str
```

- *Type:* str

---

##### `experiment_config`<sup>Required</sup> <a name="experiment_config" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.experimentConfig"></a>

```python
experiment_config: DataAwsccSagemakerProcessingJobExperimentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference">DataAwsccSagemakerProcessingJobExperimentConfigOutputReference</a>

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `monitoring_schedule_arn`<sup>Required</sup> <a name="monitoring_schedule_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.monitoringScheduleArn"></a>

```python
monitoring_schedule_arn: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.networkConfig"></a>

```python
network_config: DataAwsccSagemakerProcessingJobNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigOutputReference</a>

---

##### `processing_end_time`<sup>Required</sup> <a name="processing_end_time" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingEndTime"></a>

```python
processing_end_time: str
```

- *Type:* str

---

##### `processing_inputs`<sup>Required</sup> <a name="processing_inputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingInputs"></a>

```python
processing_inputs: DataAwsccSagemakerProcessingJobProcessingInputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList">DataAwsccSagemakerProcessingJobProcessingInputsList</a>

---

##### `processing_job_arn`<sup>Required</sup> <a name="processing_job_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobArn"></a>

```python
processing_job_arn: str
```

- *Type:* str

---

##### `processing_job_name`<sup>Required</sup> <a name="processing_job_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobName"></a>

```python
processing_job_name: str
```

- *Type:* str

---

##### `processing_job_status`<sup>Required</sup> <a name="processing_job_status" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingJobStatus"></a>

```python
processing_job_status: str
```

- *Type:* str

---

##### `processing_output_config`<sup>Required</sup> <a name="processing_output_config" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingOutputConfig"></a>

```python
processing_output_config: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference</a>

---

##### `processing_resources`<sup>Required</sup> <a name="processing_resources" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingResources"></a>

```python
processing_resources: DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference</a>

---

##### `processing_start_time`<sup>Required</sup> <a name="processing_start_time" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.processingStartTime"></a>

```python
processing_start_time: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stopping_condition`<sup>Required</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.stoppingCondition"></a>

```python
stopping_condition: DataAwsccSagemakerProcessingJobStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference">DataAwsccSagemakerProcessingJobStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tags"></a>

```python
tags: DataAwsccSagemakerProcessingJobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList">DataAwsccSagemakerProcessingJobTagsList</a>

---

##### `training_job_arn`<sup>Required</sup> <a name="training_job_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.trainingJobArn"></a>

```python
training_job_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerProcessingJobAppSpecification <a name="DataAwsccSagemakerProcessingJobAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification()
```


### DataAwsccSagemakerProcessingJobConfig <a name="DataAwsccSagemakerProcessingJobConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_processing_job#id DataAwsccSagemakerProcessingJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerProcessingJobExperimentConfig <a name="DataAwsccSagemakerProcessingJobExperimentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig()
```


### DataAwsccSagemakerProcessingJobNetworkConfig <a name="DataAwsccSagemakerProcessingJobNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig()
```


### DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig <a name="DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig()
```


### DataAwsccSagemakerProcessingJobProcessingInputs <a name="DataAwsccSagemakerProcessingJobProcessingInputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs()
```


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition()
```


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition()
```


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition()
```


### DataAwsccSagemakerProcessingJobProcessingInputsS3Input <a name="DataAwsccSagemakerProcessingJobProcessingInputsS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input()
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfig <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig()
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs()
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput()
```


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output()
```


### DataAwsccSagemakerProcessingJobProcessingResources <a name="DataAwsccSagemakerProcessingJobProcessingResources" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources()
```


### DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig <a name="DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig()
```


### DataAwsccSagemakerProcessingJobStoppingCondition <a name="DataAwsccSagemakerProcessingJobStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition()
```


### DataAwsccSagemakerProcessingJobTags <a name="DataAwsccSagemakerProcessingJobTags" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerProcessingJobAppSpecificationOutputReference <a name="DataAwsccSagemakerProcessingJobAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification">DataAwsccSagemakerProcessingJobAppSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_arguments`<sup>Required</sup> <a name="container_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint`<sup>Required</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobAppSpecification">DataAwsccSagemakerProcessingJobAppSpecification</a>

---


### DataAwsccSagemakerProcessingJobExperimentConfigOutputReference <a name="DataAwsccSagemakerProcessingJobExperimentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.experimentName">experiment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.runName">run_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName">trial_component_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialName">trial_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig">DataAwsccSagemakerProcessingJobExperimentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_name`<sup>Required</sup> <a name="experiment_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.experimentName"></a>

```python
experiment_name: str
```

- *Type:* str

---

##### `run_name`<sup>Required</sup> <a name="run_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.runName"></a>

```python
run_name: str
```

- *Type:* str

---

##### `trial_component_display_name`<sup>Required</sup> <a name="trial_component_display_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName"></a>

```python
trial_component_display_name: str
```

- *Type:* str

---

##### `trial_name`<sup>Required</sup> <a name="trial_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.trialName"></a>

```python
trial_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobExperimentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobExperimentConfig">DataAwsccSagemakerProcessingJobExperimentConfig</a>

---


### DataAwsccSagemakerProcessingJobNetworkConfigOutputReference <a name="DataAwsccSagemakerProcessingJobNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig">DataAwsccSagemakerProcessingJobNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_inter_container_traffic_encryption`<sup>Required</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfig">DataAwsccSagemakerProcessingJobNetworkConfig</a>

---


### DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig">DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression">output_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri">output_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup">work_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `output_compression`<sup>Required</sup> <a name="output_compression" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression"></a>

```python
output_compression: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `output_s3_uri`<sup>Required</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```python
output_s3_uri: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `work_group`<sup>Required</sup> <a name="work_group" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition">athena_dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType">data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode">input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition">redshift_dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `athena_dataset_definition`<sup>Required</sup> <a name="athena_dataset_definition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition"></a>

```python
athena_dataset_definition: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a>

---

##### `data_distribution_type`<sup>Required</sup> <a name="data_distribution_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType"></a>

```python
data_distribution_type: str
```

- *Type:* str

---

##### `input_mode`<sup>Required</sup> <a name="input_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode"></a>

```python
input_mode: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `redshift_dataset_definition`<sup>Required</sup> <a name="redshift_dataset_definition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition"></a>

```python
redshift_dataset_definition: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn">cluster_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression">output_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri">output_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_role_arn`<sup>Required</sup> <a name="cluster_role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn"></a>

```python
cluster_role_arn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `output_compression`<sup>Required</sup> <a name="output_compression" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression"></a>

```python
output_compression: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `output_s3_uri`<sup>Required</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```python
output_s3_uri: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsList <a name="DataAwsccSagemakerProcessingJobProcessingInputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProcessingJobProcessingInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProcessingJobProcessingInputsOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.appManaged">app_managed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition">dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.inputName">input_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs">DataAwsccSagemakerProcessingJobProcessingInputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_managed`<sup>Required</sup> <a name="app_managed" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.appManaged"></a>

```python
app_managed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `dataset_definition`<sup>Required</sup> <a name="dataset_definition" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition"></a>

```python
dataset_definition: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a>

---

##### `input_name`<sup>Required</sup> <a name="input_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

---

##### `s3_input`<sup>Required</sup> <a name="s3_input" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.s3Input"></a>

```python
s3_input: DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference">DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingInputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputs">DataAwsccSagemakerProcessingJobProcessingInputs</a>

---


### DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType">s3_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType">s3_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input">DataAwsccSagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_compression_type`<sup>Required</sup> <a name="s3_compression_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType"></a>

```python
s3_compression_type: str
```

- *Type:* str

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_data_type`<sup>Required</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingInputsS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingInputsS3Input">DataAwsccSagemakerProcessingJobProcessingInputsS3Input</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig">DataAwsccSagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs"></a>

```python
outputs: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfig">DataAwsccSagemakerProcessingJobProcessingOutputConfig</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName">feature_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_group_name`<sup>Required</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName"></a>

```python
feature_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged">app_managed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput">feature_store_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName">output_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_managed`<sup>Required</sup> <a name="app_managed" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged"></a>

```python
app_managed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `feature_store_output`<sup>Required</sup> <a name="feature_store_output" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput"></a>

```python
feature_store_output: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a>

---

##### `output_name`<sup>Required</sup> <a name="output_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName"></a>

```python
output_name: str
```

- *Type:* str

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output"></a>

```python
s3_output: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs</a>

---


### DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_upload_mode`<sup>Required</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output">DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---


### DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


### DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference <a name="DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources">DataAwsccSagemakerProcessingJobProcessingResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig"></a>

```python
cluster_config: DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobProcessingResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobProcessingResources">DataAwsccSagemakerProcessingJobProcessingResources</a>

---


### DataAwsccSagemakerProcessingJobStoppingConditionOutputReference <a name="DataAwsccSagemakerProcessingJobStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition">DataAwsccSagemakerProcessingJobStoppingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_runtime_in_seconds`<sup>Required</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobStoppingCondition">DataAwsccSagemakerProcessingJobStoppingCondition</a>

---


### DataAwsccSagemakerProcessingJobTagsList <a name="DataAwsccSagemakerProcessingJobTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProcessingJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProcessingJobTagsOutputReference <a name="DataAwsccSagemakerProcessingJobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_processing_job

dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags">DataAwsccSagemakerProcessingJobTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProcessingJobTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProcessingJob.DataAwsccSagemakerProcessingJobTags">DataAwsccSagemakerProcessingJobTags</a>

---



