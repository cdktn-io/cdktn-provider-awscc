# `dataAwsccSagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`dataAwsccSagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfig <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#id DataAwsccSagemakerNotebookInstanceLifecycleConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerNotebookInstanceLifecycleConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">notebook_instance_lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">notebook_instance_lifecycle_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onCreate">on_create</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onStart">on_start</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList">DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `notebook_instance_lifecycle_config_arn`<sup>Required</sup> <a name="notebook_instance_lifecycle_config_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```python
notebook_instance_lifecycle_config_arn: str
```

- *Type:* str

---

##### `notebook_instance_lifecycle_config_name`<sup>Required</sup> <a name="notebook_instance_lifecycle_config_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```python
notebook_instance_lifecycle_config_name: str
```

- *Type:* str

---

##### `on_create`<sup>Required</sup> <a name="on_create" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```python
on_create: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `on_start`<sup>Required</sup> <a name="on_start" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```python
on_start: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```python
tags: DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList">DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance_lifecycle_config#id DataAwsccSagemakerNotebookInstanceLifecycleConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate()
```


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart()
```


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTags <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart">DataAwsccSagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance_lifecycle_config

dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags">DataAwsccSagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerNotebookInstanceLifecycleConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstanceLifecycleConfig.DataAwsccSagemakerNotebookInstanceLifecycleConfigTags">DataAwsccSagemakerNotebookInstanceLifecycleConfigTags</a>

---



