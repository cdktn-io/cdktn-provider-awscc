# `dataAwsccKinesisanalyticsv2Snapshot` Submodule <a name="`dataAwsccKinesisanalyticsv2Snapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisanalyticsv2Snapshot <a name="DataAwsccKinesisanalyticsv2Snapshot" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#id DataAwsccKinesisanalyticsv2Snapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccKinesisanalyticsv2Snapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccKinesisanalyticsv2Snapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisanalyticsv2Snapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.importSourceConfiguration">import_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.runtimeEnvironment">runtime_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp">snapshot_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotDescription">snapshot_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription">snapshot_encryption_configuration_description</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotFormat">snapshot_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiator">snapshot_initiator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation">snapshot_initiator_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSizeInBytes">snapshot_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSourceDescription">snapshot_source_description</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotStatus">snapshot_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList">DataAwsccKinesisanalyticsv2SnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `import_source_configuration`<sup>Required</sup> <a name="import_source_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.importSourceConfiguration"></a>

```python
import_source_configuration: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a>

---

##### `runtime_environment`<sup>Required</sup> <a name="runtime_environment" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.runtimeEnvironment"></a>

```python
runtime_environment: str
```

- *Type:* str

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `snapshot_creation_timestamp`<sup>Required</sup> <a name="snapshot_creation_timestamp" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp"></a>

```python
snapshot_creation_timestamp: str
```

- *Type:* str

---

##### `snapshot_description`<sup>Required</sup> <a name="snapshot_description" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotDescription"></a>

```python
snapshot_description: str
```

- *Type:* str

---

##### `snapshot_encryption_configuration_description`<sup>Required</sup> <a name="snapshot_encryption_configuration_description" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription"></a>

```python
snapshot_encryption_configuration_description: DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a>

---

##### `snapshot_format`<sup>Required</sup> <a name="snapshot_format" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotFormat"></a>

```python
snapshot_format: str
```

- *Type:* str

---

##### `snapshot_initiator`<sup>Required</sup> <a name="snapshot_initiator" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiator"></a>

```python
snapshot_initiator: str
```

- *Type:* str

---

##### `snapshot_initiator_operation`<sup>Required</sup> <a name="snapshot_initiator_operation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation"></a>

```python
snapshot_initiator_operation: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `snapshot_size_in_bytes`<sup>Required</sup> <a name="snapshot_size_in_bytes" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSizeInBytes"></a>

```python
snapshot_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_source_description`<sup>Required</sup> <a name="snapshot_source_description" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotSourceDescription"></a>

```python
snapshot_source_description: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a>

---

##### `snapshot_status`<sup>Required</sup> <a name="snapshot_status" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.snapshotStatus"></a>

```python
snapshot_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tags"></a>

```python
tags: DataAwsccKinesisanalyticsv2SnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList">DataAwsccKinesisanalyticsv2SnapshotTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2Snapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisanalyticsv2SnapshotConfig <a name="DataAwsccKinesisanalyticsv2SnapshotConfig" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/kinesisanalyticsv2_snapshot#id DataAwsccKinesisanalyticsv2Snapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration()
```


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration()
```


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation()
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription()
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription()
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation()
```


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription()
```


### DataAwsccKinesisanalyticsv2SnapshotTags <a name="DataAwsccKinesisanalyticsv2SnapshotTags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn">import_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration">source_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation">source_s3_prefix_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_role_arn`<sup>Required</sup> <a name="import_role_arn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn"></a>

```python
import_role_arn: str
```

- *Type:* str

---

##### `source_encryption_configuration`<sup>Required</sup> <a name="source_encryption_configuration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration"></a>

```python
source_encryption_configuration: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a>

---

##### `source_s3_prefix_location`<sup>Required</sup> <a name="source_s3_prefix_location" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation"></a>

```python
source_s3_prefix_location: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---


### DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation">s3_prefix_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription">source_application_description</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_prefix_location`<sup>Required</sup> <a name="s3_prefix_location" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation"></a>

```python
s3_prefix_location: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a>

---

##### `source_application_description`<sup>Required</sup> <a name="source_application_description" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription"></a>

```python
source_application_description: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescription</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a>

---


### DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp">application_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId">application_version_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_creation_timestamp`<sup>Required</sup> <a name="application_creation_timestamp" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp"></a>

```python
application_creation_timestamp: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `application_version_id`<sup>Required</sup> <a name="application_version_id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId"></a>

```python
application_version_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">DataAwsccKinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a>

---


### DataAwsccKinesisanalyticsv2SnapshotTagsList <a name="DataAwsccKinesisanalyticsv2SnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference <a name="DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kinesisanalyticsv2_snapshot

dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags">DataAwsccKinesisanalyticsv2SnapshotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKinesisanalyticsv2SnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Snapshot.DataAwsccKinesisanalyticsv2SnapshotTags">DataAwsccKinesisanalyticsv2SnapshotTags</a>

---



