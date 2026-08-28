# `dataAwsccCleanroomsConfiguredTableAssociation` Submodule <a name="`dataAwsccCleanroomsConfiguredTableAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsConfiguredTableAssociation <a name="DataAwsccCleanroomsConfiguredTableAssociation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_configured_table_association#id DataAwsccCleanroomsConfiguredTableAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsConfiguredTableAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsConfiguredTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_configured_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsConfiguredTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules">configured_table_association_analysis_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier">configured_table_association_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableIdentifier">configured_table_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList">DataAwsccCleanroomsConfiguredTableAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configured_table_association_analysis_rules`<sup>Required</sup> <a name="configured_table_association_analysis_rules" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules"></a>

```python
configured_table_association_analysis_rules: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a>

---

##### `configured_table_association_identifier`<sup>Required</sup> <a name="configured_table_association_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier"></a>

```python
configured_table_association_identifier: str
```

- *Type:* str

---

##### `configured_table_identifier`<sup>Required</sup> <a name="configured_table_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.configuredTableIdentifier"></a>

```python
configured_table_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tags"></a>

```python
tags: DataAwsccCleanroomsConfiguredTableAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList">DataAwsccCleanroomsConfiguredTableAssociationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsConfiguredTableAssociationConfig <a name="DataAwsccCleanroomsConfiguredTableAssociationConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_configured_table_association#id DataAwsccCleanroomsConfiguredTableAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules()
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy()
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1()
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation()
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom()
```


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct()
```


### DataAwsccCleanroomsConfiguredTableAssociationTags <a name="DataAwsccCleanroomsConfiguredTableAssociationTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy"></a>

```python
policy: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1"></a>

```python
v1: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_additional_analyses`<sup>Required</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_additional_analyses`<sup>Required</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_additional_analyses`<sup>Required</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list">list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```python
aggregation: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```python
custom: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list"></a>

```python
list: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">DataAwsccCleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---


### DataAwsccCleanroomsConfiguredTableAssociationTagsList <a name="DataAwsccCleanroomsConfiguredTableAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference <a name="DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_configured_table_association

dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags">DataAwsccCleanroomsConfiguredTableAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsConfiguredTableAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTableAssociation.DataAwsccCleanroomsConfiguredTableAssociationTags">DataAwsccCleanroomsConfiguredTableAssociationTags</a>

---



