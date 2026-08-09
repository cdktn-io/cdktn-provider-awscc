# `dataAwsccQuicksightTopicV2` Submodule <a name="`dataAwsccQuicksightTopicV2` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightTopicV2 <a name="DataAwsccQuicksightTopicV2" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2 awscc_quicksight_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2#id DataAwsccQuicksightTopicV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightTopicV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightTopicV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightTopicV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.customInstructions">custom_instructions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference">DataAwsccQuicksightTopicV2CustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSetRelations">data_set_relations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList">DataAwsccQuicksightTopicV2DataSetRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSets">data_sets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList">DataAwsccQuicksightTopicV2DataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.folderArns">folder_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList">DataAwsccQuicksightTopicV2PermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList">DataAwsccQuicksightTopicV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `custom_instructions`<sup>Required</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.customInstructions"></a>

```python
custom_instructions: DataAwsccQuicksightTopicV2CustomInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference">DataAwsccQuicksightTopicV2CustomInstructionsOutputReference</a>

---

##### `data_set_relations`<sup>Required</sup> <a name="data_set_relations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSetRelations"></a>

```python
data_set_relations: DataAwsccQuicksightTopicV2DataSetRelationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList">DataAwsccQuicksightTopicV2DataSetRelationsList</a>

---

##### `data_sets`<sup>Required</sup> <a name="data_sets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSets"></a>

```python
data_sets: DataAwsccQuicksightTopicV2DataSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList">DataAwsccQuicksightTopicV2DataSetsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder_arns`<sup>Required</sup> <a name="folder_arns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.folderArns"></a>

```python
folder_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.permissions"></a>

```python
permissions: DataAwsccQuicksightTopicV2PermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList">DataAwsccQuicksightTopicV2PermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tags"></a>

```python
tags: DataAwsccQuicksightTopicV2TagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList">DataAwsccQuicksightTopicV2TagsList</a>

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightTopicV2Config <a name="DataAwsccQuicksightTopicV2Config" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2#id DataAwsccQuicksightTopicV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightTopicV2CustomInstructions <a name="DataAwsccQuicksightTopicV2CustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions()
```


### DataAwsccQuicksightTopicV2DataSetRelations <a name="DataAwsccQuicksightTopicV2DataSetRelations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations()
```


### DataAwsccQuicksightTopicV2DataSetRelationsLeft <a name="DataAwsccQuicksightTopicV2DataSetRelationsLeft" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft()
```


### DataAwsccQuicksightTopicV2DataSetRelationsRight <a name="DataAwsccQuicksightTopicV2DataSetRelationsRight" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight()
```


### DataAwsccQuicksightTopicV2DataSets <a name="DataAwsccQuicksightTopicV2DataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets()
```


### DataAwsccQuicksightTopicV2Permissions <a name="DataAwsccQuicksightTopicV2Permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions()
```


### DataAwsccQuicksightTopicV2Tags <a name="DataAwsccQuicksightTopicV2Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightTopicV2CustomInstructionsOutputReference <a name="DataAwsccQuicksightTopicV2CustomInstructionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString">custom_instructions_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions">DataAwsccQuicksightTopicV2CustomInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_instructions_string`<sup>Required</sup> <a name="custom_instructions_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString"></a>

```python
custom_instructions_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2CustomInstructions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions">DataAwsccQuicksightTopicV2CustomInstructions</a>

---


### DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference <a name="DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft">DataAwsccQuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2DataSetRelationsLeft
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft">DataAwsccQuicksightTopicV2DataSetRelationsLeft</a>

---


### DataAwsccQuicksightTopicV2DataSetRelationsList <a name="DataAwsccQuicksightTopicV2DataSetRelationsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightTopicV2DataSetRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightTopicV2DataSetRelationsOutputReference <a name="DataAwsccQuicksightTopicV2DataSetRelationsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations">DataAwsccQuicksightTopicV2DataSetRelations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.left"></a>

```python
left: DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.right"></a>

```python
right: DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2DataSetRelations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations">DataAwsccQuicksightTopicV2DataSetRelations</a>

---


### DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference <a name="DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight">DataAwsccQuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2DataSetRelationsRight
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight">DataAwsccQuicksightTopicV2DataSetRelationsRight</a>

---


### DataAwsccQuicksightTopicV2DataSetsList <a name="DataAwsccQuicksightTopicV2DataSetsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightTopicV2DataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightTopicV2DataSetsOutputReference <a name="DataAwsccQuicksightTopicV2DataSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetName">data_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets">DataAwsccQuicksightTopicV2DataSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `data_set_name`<sup>Required</sup> <a name="data_set_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetName"></a>

```python
data_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2DataSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets">DataAwsccQuicksightTopicV2DataSets</a>

---


### DataAwsccQuicksightTopicV2PermissionsList <a name="DataAwsccQuicksightTopicV2PermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightTopicV2PermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightTopicV2PermissionsOutputReference <a name="DataAwsccQuicksightTopicV2PermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions">DataAwsccQuicksightTopicV2Permissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2Permissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions">DataAwsccQuicksightTopicV2Permissions</a>

---


### DataAwsccQuicksightTopicV2TagsList <a name="DataAwsccQuicksightTopicV2TagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightTopicV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightTopicV2TagsOutputReference <a name="DataAwsccQuicksightTopicV2TagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_topic_v2

dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags">DataAwsccQuicksightTopicV2Tags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightTopicV2Tags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags">DataAwsccQuicksightTopicV2Tags</a>

---



