# `dataAwsccGameliftContainerGroupDefinition` Submodule <a name="`dataAwsccGameliftContainerGroupDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftContainerGroupDefinition <a name="DataAwsccGameliftContainerGroupDefinition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_container_group_definition awscc_gamelift_container_group_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_container_group_definition#id DataAwsccGameliftContainerGroupDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGameliftContainerGroupDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGameliftContainerGroupDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftContainerGroupDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupDefinitionArn">container_group_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupType">container_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.gameServerContainerDefinition">game_server_container_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.sourceVersionNumber">source_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.supportContainerDefinitions">support_container_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList">DataAwsccGameliftContainerGroupDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes">total_memory_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalVcpuLimit">total_vcpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `container_group_definition_arn`<sup>Required</sup> <a name="container_group_definition_arn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupDefinitionArn"></a>

```python
container_group_definition_arn: str
```

- *Type:* str

---

##### `container_group_type`<sup>Required</sup> <a name="container_group_type" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.containerGroupType"></a>

```python
container_group_type: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `game_server_container_definition`<sup>Required</sup> <a name="game_server_container_definition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.gameServerContainerDefinition"></a>

```python
game_server_container_definition: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `source_version_number`<sup>Required</sup> <a name="source_version_number" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.sourceVersionNumber"></a>

```python
source_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `support_container_definitions`<sup>Required</sup> <a name="support_container_definitions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.supportContainerDefinitions"></a>

```python
support_container_definitions: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tags"></a>

```python
tags: DataAwsccGameliftContainerGroupDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList">DataAwsccGameliftContainerGroupDefinitionTagsList</a>

---

##### `total_memory_limit_mebibytes`<sup>Required</sup> <a name="total_memory_limit_mebibytes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes"></a>

```python
total_memory_limit_mebibytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_vcpu_limit`<sup>Required</sup> <a name="total_vcpu_limit" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.totalVcpuLimit"></a>

```python
total_vcpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftContainerGroupDefinitionConfig <a name="DataAwsccGameliftContainerGroupDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_container_group_definition#id DataAwsccGameliftContainerGroupDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition()
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn()
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride()
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities()
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints()
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration()
```


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration()
```


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges()
```


### DataAwsccGameliftContainerGroupDefinitionTags <a name="DataAwsccGameliftContainerGroupDefinitionTags" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath">instance_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `instance_path`<sup>Required</sup> <a name="instance_path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath"></a>

```python
instance_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn">depends_on</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride">environment_override</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities">linux_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints">mount_points</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration">port_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest">resolved_image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion">server_sdk_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn"></a>

```python
depends_on: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a>

---

##### `environment_override`<sup>Required</sup> <a name="environment_override" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride"></a>

```python
environment_override: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a>

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `linux_capabilities`<sup>Required</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities"></a>

```python
linux_capabilities: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a>

---

##### `mount_points`<sup>Required</sup> <a name="mount_points" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints"></a>

```python
mount_points: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a>

---

##### `port_configuration`<sup>Required</sup> <a name="port_configuration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration"></a>

```python
port_configuration: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a>

---

##### `resolved_image_digest`<sup>Required</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest"></a>

```python
resolved_image_digest: str
```

- *Type:* str

---

##### `server_sdk_version`<sup>Required</sup> <a name="server_sdk_version" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion"></a>

```python
server_sdk_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>

---


### DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges">container_port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_ranges`<sup>Required</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges"></a>

```python
container_port_ranges: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">DataAwsccGameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod">start_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period`<sup>Required</sup> <a name="start_period" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```python
start_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath">container_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath">instance_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `container_path`<sup>Required</sup> <a name="container_path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```python
container_path: str
```

- *Type:* str

---

##### `instance_path`<sup>Required</sup> <a name="instance_path" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath"></a>

```python
instance_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn">depends_on</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride">environment_override</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities">linux_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes">memory_hard_limit_mebibytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints">mount_points</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration">port_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest">resolved_image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu">vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn"></a>

```python
depends_on: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a>

---

##### `environment_override`<sup>Required</sup> <a name="environment_override" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride"></a>

```python
environment_override: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential"></a>

```python
essential: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck"></a>

```python
health_check: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a>

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `linux_capabilities`<sup>Required</sup> <a name="linux_capabilities" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities"></a>

```python
linux_capabilities: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a>

---

##### `memory_hard_limit_mebibytes`<sup>Required</sup> <a name="memory_hard_limit_mebibytes" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes"></a>

```python
memory_hard_limit_mebibytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_points`<sup>Required</sup> <a name="mount_points" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints"></a>

```python
mount_points: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a>

---

##### `port_configuration`<sup>Required</sup> <a name="port_configuration" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration"></a>

```python
port_configuration: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a>

---

##### `resolved_image_digest`<sup>Required</sup> <a name="resolved_image_digest" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest"></a>

```python
resolved_image_digest: str
```

- *Type:* str

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu"></a>

```python
vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitions</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>

---


### DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges">container_port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_ranges`<sup>Required</sup> <a name="container_port_ranges" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges"></a>

```python
container_port_ranges: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">DataAwsccGameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---


### DataAwsccGameliftContainerGroupDefinitionTagsList <a name="DataAwsccGameliftContainerGroupDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftContainerGroupDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftContainerGroupDefinitionTagsOutputReference <a name="DataAwsccGameliftContainerGroupDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_container_group_definition

dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags">DataAwsccGameliftContainerGroupDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftContainerGroupDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftContainerGroupDefinition.DataAwsccGameliftContainerGroupDefinitionTags">DataAwsccGameliftContainerGroupDefinitionTags</a>

---



