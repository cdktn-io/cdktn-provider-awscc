# `dataAwsccKinesisChannel` Submodule <a name="`dataAwsccKinesisChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisChannel <a name="DataAwsccKinesisChannel" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/kinesis_channel awscc_kinesis_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannel(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/kinesis_channel#id DataAwsccKinesisChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccKinesisChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccKinesisChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccKinesisChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccKinesisChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/kinesis_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelArn">channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelCreationTimestamp">channel_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelStatus">channel_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference">DataAwsccKinesisChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference">DataAwsccKinesisChannelLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3TablesDestinationConfiguration">s3_tables_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.streamConfigurationList">stream_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList">DataAwsccKinesisChannelStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList">DataAwsccKinesisChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `channel_arn`<sup>Required</sup> <a name="channel_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelArn"></a>

```python
channel_arn: str
```

- *Type:* str

---

##### `channel_creation_timestamp`<sup>Required</sup> <a name="channel_creation_timestamp" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelCreationTimestamp"></a>

```python
channel_creation_timestamp: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `channel_status`<sup>Required</sup> <a name="channel_status" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.channelStatus"></a>

```python
channel_status: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataAwsccKinesisChannelEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference">DataAwsccKinesisChannelEncryptionConfigurationOutputReference</a>

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.loggingConfiguration"></a>

```python
logging_configuration: DataAwsccKinesisChannelLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference">DataAwsccKinesisChannelLoggingConfigurationOutputReference</a>

---

##### `s3_destination_configuration`<sup>Required</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: DataAwsccKinesisChannelS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationOutputReference</a>

---

##### `s3_tables_destination_configuration`<sup>Required</sup> <a name="s3_tables_destination_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.s3TablesDestinationConfiguration"></a>

```python
s3_tables_destination_configuration: DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference</a>

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `stream_configuration_list`<sup>Required</sup> <a name="stream_configuration_list" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.streamConfigurationList"></a>

```python
stream_configuration_list: DataAwsccKinesisChannelStreamConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList">DataAwsccKinesisChannelStreamConfigurationListStructList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tags"></a>

```python
tags: DataAwsccKinesisChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList">DataAwsccKinesisChannelTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisChannelConfig <a name="DataAwsccKinesisChannelConfig" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/kinesis_channel#id DataAwsccKinesisChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisChannelEncryptionConfiguration <a name="DataAwsccKinesisChannelEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration()
```


### DataAwsccKinesisChannelLoggingConfiguration <a name="DataAwsccKinesisChannelLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration()
```


### DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs <a name="DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs()
```


### DataAwsccKinesisChannelS3DestinationConfiguration <a name="DataAwsccKinesisChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration()
```


### DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration <a name="DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration()
```


### DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration <a name="DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration()
```


### DataAwsccKinesisChannelS3TablesDestinationConfiguration <a name="DataAwsccKinesisChannelS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration()
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration()
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec()
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields()
```


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct()
```


### DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration <a name="DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration()
```


### DataAwsccKinesisChannelStreamConfigurationListStruct <a name="DataAwsccKinesisChannelStreamConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct()
```


### DataAwsccKinesisChannelTags <a name="DataAwsccKinesisChannelTags" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisChannelEncryptionConfigurationOutputReference <a name="DataAwsccKinesisChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration">DataAwsccKinesisChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelEncryptionConfiguration">DataAwsccKinesisChannelEncryptionConfiguration</a>

---


### DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference <a name="DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName">log_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_stream_name`<sup>Required</sup> <a name="log_stream_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName"></a>

```python
log_stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogs</a>

---


### DataAwsccKinesisChannelLoggingConfigurationOutputReference <a name="DataAwsccKinesisChannelLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration">DataAwsccKinesisChannelLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">DataAwsccKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelLoggingConfiguration">DataAwsccKinesisChannelLoggingConfiguration</a>

---


### DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### DataAwsccKinesisChannelS3DestinationConfigurationOutputReference <a name="DataAwsccKinesisChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">dead_letter_queue_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration">storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration">DataAwsccKinesisChannelS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_configuration`<sup>Required</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```python
dead_letter_queue_s3_configuration: DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `storage_configuration`<sup>Required</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration"></a>

```python
storage_configuration: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfiguration">DataAwsccKinesisChannelS3DestinationConfiguration</a>

---


### DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference <a name="DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate">output_key_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_key_template`<sup>Required</sup> <a name="output_key_template" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate"></a>

```python
output_key_template: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration">DataAwsccKinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">error_output_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `error_output_prefix`<sup>Required</sup> <a name="error_output_prefix" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```python
error_output_prefix: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">data_freshness_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">dead_letter_queue_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList">s3_tables_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration">DataAwsccKinesisChannelS3TablesDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_in_seconds`<sup>Required</sup> <a name="data_freshness_in_seconds" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```python
data_freshness_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_queue_s3_configuration`<sup>Required</sup> <a name="dead_letter_queue_s3_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```python
dead_letter_queue_s3_configuration: DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `s3_tables_configuration_list`<sup>Required</sup> <a name="s3_tables_configuration_list" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList"></a>

```python
s3_tables_configuration_list: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3TablesDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfiguration">DataAwsccKinesisChannelS3TablesDestinationConfiguration</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields">partition_fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_fields`<sup>Required</sup> <a name="partition_fields" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields"></a>

```python
partition_fields: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields</a>

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference <a name="DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec"></a>

```python
partition_spec: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a>

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct">DataAwsccKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct</a>

---


### DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference <a name="DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn">gsr_schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType">record_format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration">DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gsr_schema_arn`<sup>Required</sup> <a name="gsr_schema_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn"></a>

```python
gsr_schema_arn: str
```

- *Type:* str

---

##### `record_format_type`<sup>Required</sup> <a name="record_format_type" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType"></a>

```python
record_format_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration">DataAwsccKinesisChannelStreamConfigurationListRecordConfiguration</a>

---


### DataAwsccKinesisChannelStreamConfigurationListStructList <a name="DataAwsccKinesisChannelStreamConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKinesisChannelStreamConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKinesisChannelStreamConfigurationListStructOutputReference <a name="DataAwsccKinesisChannelStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration">record_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference">DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct">DataAwsccKinesisChannelStreamConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_configuration`<sup>Required</sup> <a name="record_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration"></a>

```python
record_configuration: DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference">DataAwsccKinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a>

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelStreamConfigurationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelStreamConfigurationListStruct">DataAwsccKinesisChannelStreamConfigurationListStruct</a>

---


### DataAwsccKinesisChannelTagsList <a name="DataAwsccKinesisChannelTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKinesisChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKinesisChannelTagsOutputReference <a name="DataAwsccKinesisChannelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesis_channel

dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags">DataAwsccKinesisChannelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisChannelTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisChannel.DataAwsccKinesisChannelTags">DataAwsccKinesisChannelTags</a>

---



