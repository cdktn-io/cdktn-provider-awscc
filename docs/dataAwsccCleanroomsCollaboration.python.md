# `dataAwsccCleanroomsCollaboration` Submodule <a name="`dataAwsccCleanroomsCollaboration` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsCollaboration <a name="DataAwsccCleanroomsCollaboration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_collaboration awscc_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_collaboration#id DataAwsccCleanroomsCollaboration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsCollaboration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsCollaboration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsCollaboration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsCollaboration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsCollaboration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.allowedResultRegions">allowed_result_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.analyticsEngine">analytics_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.autoApprovedChangeTypes">auto_approved_change_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorMlMemberAbilities">creator_ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorPaymentConfiguration">creator_payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference">DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.isMetricsEnabled">is_metrics_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.jobLogStatus">job_log_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.members">members</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList">DataAwsccCleanroomsCollaborationMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList">DataAwsccCleanroomsCollaborationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allowed_result_regions`<sup>Required</sup> <a name="allowed_result_regions" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.allowedResultRegions"></a>

```python
allowed_result_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analytics_engine`<sup>Required</sup> <a name="analytics_engine" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.analyticsEngine"></a>

```python
analytics_engine: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_approved_change_types`<sup>Required</sup> <a name="auto_approved_change_types" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.autoApprovedChangeTypes"></a>

```python
auto_approved_change_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorDisplayName"></a>

```python
creator_display_name: str
```

- *Type:* str

---

##### `creator_member_abilities`<sup>Required</sup> <a name="creator_member_abilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorMemberAbilities"></a>

```python
creator_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creator_ml_member_abilities`<sup>Required</sup> <a name="creator_ml_member_abilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorMlMemberAbilities"></a>

```python
creator_ml_member_abilities: DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a>

---

##### `creator_payment_configuration`<sup>Required</sup> <a name="creator_payment_configuration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.creatorPaymentConfiguration"></a>

```python
creator_payment_configuration: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a>

---

##### `data_encryption_metadata`<sup>Required</sup> <a name="data_encryption_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```python
data_encryption_metadata: DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference">DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_metrics_enabled`<sup>Required</sup> <a name="is_metrics_enabled" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.isMetricsEnabled"></a>

```python
is_metrics_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `job_log_status`<sup>Required</sup> <a name="job_log_status" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.jobLogStatus"></a>

```python
job_log_status: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.members"></a>

```python
members: DataAwsccCleanroomsCollaborationMembersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList">DataAwsccCleanroomsCollaborationMembersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.tags"></a>

```python
tags: DataAwsccCleanroomsCollaborationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList">DataAwsccCleanroomsCollaborationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaboration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsCollaborationConfig <a name="DataAwsccCleanroomsCollaborationConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_collaboration#id DataAwsccCleanroomsCollaboration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities <a name="DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration()
```


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute()
```


### DataAwsccCleanroomsCollaborationDataEncryptionMetadata <a name="DataAwsccCleanroomsCollaborationDataEncryptionMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadata()
```


### DataAwsccCleanroomsCollaborationMembers <a name="DataAwsccCleanroomsCollaborationMembers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembers()
```


### DataAwsccCleanroomsCollaborationMembersMlMemberAbilities <a name="DataAwsccCleanroomsCollaborationMembersMlMemberAbilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilities()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfiguration <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfiguration()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration()
```


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute()
```


### DataAwsccCleanroomsCollaborationTags <a name="DataAwsccCleanroomsCollaborationTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">custom_ml_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities">DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_ml_member_abilities`<sup>Required</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```python
custom_ml_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities">DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_inference`<sup>Required</sup> <a name="model_inference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```python
model_inference: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `model_training`<sup>Required</sup> <a name="model_training" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```python
model_training: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `synthetic_data_generation`<sup>Required</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration">DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_compute`<sup>Required</sup> <a name="job_compute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute"></a>

```python
job_compute: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a>

---

##### `machine_learning`<sup>Required</sup> <a name="machine_learning" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning"></a>

```python
machine_learning: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a>

---

##### `query_compute`<sup>Required</sup> <a name="query_compute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute"></a>

```python
query_compute: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration">DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration</a>

---


### DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference <a name="DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---


### DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext">allow_cleartext</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">allow_duplicates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">allow_joins_on_columns_with_different_names</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">preserve_nulls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadata">DataAwsccCleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_cleartext`<sup>Required</sup> <a name="allow_cleartext" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext"></a>

```python
allow_cleartext: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `allow_duplicates`<sup>Required</sup> <a name="allow_duplicates" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```python
allow_duplicates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `allow_joins_on_columns_with_different_names`<sup>Required</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```python
allow_joins_on_columns_with_different_names: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preserve_nulls`<sup>Required</sup> <a name="preserve_nulls" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```python
preserve_nulls: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationDataEncryptionMetadata">DataAwsccCleanroomsCollaborationDataEncryptionMetadata</a>

---


### DataAwsccCleanroomsCollaborationMembersList <a name="DataAwsccCleanroomsCollaborationMembersList" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsCollaborationMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference <a name="DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">custom_ml_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilities">DataAwsccCleanroomsCollaborationMembersMlMemberAbilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_ml_member_abilities`<sup>Required</sup> <a name="custom_ml_member_abilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```python
custom_ml_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersMlMemberAbilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilities">DataAwsccCleanroomsCollaborationMembersMlMemberAbilities</a>

---


### DataAwsccCleanroomsCollaborationMembersOutputReference <a name="DataAwsccCleanroomsCollaborationMembersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.memberAbilities">member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities">ml_member_abilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.paymentConfiguration">payment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembers">DataAwsccCleanroomsCollaborationMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `member_abilities`<sup>Required</sup> <a name="member_abilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.memberAbilities"></a>

```python
member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ml_member_abilities`<sup>Required</sup> <a name="ml_member_abilities" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities"></a>

```python
ml_member_abilities: DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a>

---

##### `payment_configuration`<sup>Required</sup> <a name="payment_configuration" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.paymentConfiguration"></a>

```python
payment_configuration: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembers">DataAwsccCleanroomsCollaborationMembers</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference">model_inference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining">model_training</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">synthetic_data_generation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_inference`<sup>Required</sup> <a name="model_inference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```python
model_inference: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `model_training`<sup>Required</sup> <a name="model_training" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```python
model_training: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `synthetic_data_generation`<sup>Required</sup> <a name="synthetic_data_generation" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```python
synthetic_data_generation: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute">job_compute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute">query_compute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfiguration">DataAwsccCleanroomsCollaborationMembersPaymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_compute`<sup>Required</sup> <a name="job_compute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute"></a>

```python
job_compute: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a>

---

##### `machine_learning`<sup>Required</sup> <a name="machine_learning" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning"></a>

```python
machine_learning: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a>

---

##### `query_compute`<sup>Required</sup> <a name="query_compute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute"></a>

```python
query_compute: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfiguration">DataAwsccCleanroomsCollaborationMembersPaymentConfiguration</a>

---


### DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference <a name="DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible">is_responsible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_responsible`<sup>Required</sup> <a name="is_responsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```python
is_responsible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute">DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---


### DataAwsccCleanroomsCollaborationTagsList <a name="DataAwsccCleanroomsCollaborationTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsCollaborationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsCollaborationTagsOutputReference <a name="DataAwsccCleanroomsCollaborationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_collaboration

dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTags">DataAwsccCleanroomsCollaborationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsCollaborationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsCollaboration.DataAwsccCleanroomsCollaborationTags">DataAwsccCleanroomsCollaborationTags</a>

---



