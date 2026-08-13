# `dataAwsccFsxS3AccessPointAttachment` Submodule <a name="`dataAwsccFsxS3AccessPointAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxS3AccessPointAttachment <a name="DataAwsccFsxS3AccessPointAttachment" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/fsx_s3_access_point_attachment awscc_fsx_s3_access_point_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/fsx_s3_access_point_attachment#id DataAwsccFsxS3AccessPointAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccFsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccFsxS3AccessPointAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccFsxS3AccessPointAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccFsxS3AccessPointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxS3AccessPointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.s3AccessPoint">s3_access_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ontap_configuration`<sup>Required</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.ontapConfiguration"></a>

```python
ontap_configuration: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference</a>

---

##### `open_zfs_configuration`<sup>Required</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.openZfsConfiguration"></a>

```python
open_zfs_configuration: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference</a>

---

##### `s3_access_point`<sup>Required</sup> <a name="s3_access_point" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.s3AccessPoint"></a>

```python
s3_access_point: DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxS3AccessPointAttachmentConfig <a name="DataAwsccFsxS3AccessPointAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/fsx_s3_access_point_attachment#id DataAwsccFsxS3AccessPointAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxS3AccessPointAttachmentOntapConfiguration <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration()
```


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity()
```


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser()
```


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser()
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration()
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity()
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser()
```


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids()
```


### DataAwsccFsxS3AccessPointAttachmentS3AccessPoint <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPoint" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint()
```


### DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser">unix_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser">windows_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unix_user`<sup>Required</sup> <a name="unix_user" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.unixUser"></a>

```python
unix_user: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference</a>

---

##### `windows_user`<sup>Required</sup> <a name="windows_user" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.windowsUser"></a>

```python
windows_user: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentity</a>

---


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityUnixUser</a>

---


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityWindowsUser</a>

---


### DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity">file_system_identity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration">DataAwsccFsxS3AccessPointAttachmentOntapConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_identity`<sup>Required</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.fileSystemIdentity"></a>

```python
file_system_identity: DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOntapConfigurationFileSystemIdentityOutputReference</a>

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOntapConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOntapConfiguration">DataAwsccFsxS3AccessPointAttachmentOntapConfiguration</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser">posix_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.posixUser"></a>

```python
posix_user: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentity</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids">secondary_gids</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids"></a>

```python
secondary_gids: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUser</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGidsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityPosixUserSecondaryGids</a>

---


### DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity">file_system_identity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_identity`<sup>Required</sup> <a name="file_system_identity" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.fileSystemIdentity"></a>

```python
file_system_identity: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationFileSystemIdentityOutputReference</a>

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration">DataAwsccFsxS3AccessPointAttachmentOpenZfsConfiguration</a>

---


### DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint">DataAwsccFsxS3AccessPointAttachmentS3AccessPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentS3AccessPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPoint">DataAwsccFsxS3AccessPointAttachmentS3AccessPoint</a>

---


### DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference <a name="DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_s3_access_point_attachment

dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxS3AccessPointAttachment.DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration">DataAwsccFsxS3AccessPointAttachmentS3AccessPointVpcConfiguration</a>

---



