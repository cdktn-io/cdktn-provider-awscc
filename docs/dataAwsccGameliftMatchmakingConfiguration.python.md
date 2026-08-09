# `dataAwsccGameliftMatchmakingConfiguration` Submodule <a name="`dataAwsccGameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftMatchmakingConfiguration <a name="DataAwsccGameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_matchmaking_configuration#id DataAwsccGameliftMatchmakingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGameliftMatchmakingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceRequired">acceptance_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">acceptance_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.additionalPlayerCount">additional_player_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.backfillMode">backfill_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.customEventData">custom_event_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.flexMatchMode">flex_match_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameProperties">game_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList">DataAwsccGameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionData">game_session_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionQueueArns">game_session_queue_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.notificationTarget">notification_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.requestTimeoutSeconds">request_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetArn">rule_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetName">rule_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList">DataAwsccGameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `acceptance_required`<sup>Required</sup> <a name="acceptance_required" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```python
acceptance_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `acceptance_timeout_seconds`<sup>Required</sup> <a name="acceptance_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```python
acceptance_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_player_count`<sup>Required</sup> <a name="additional_player_count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```python
additional_player_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `backfill_mode`<sup>Required</sup> <a name="backfill_mode" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.backfillMode"></a>

```python
backfill_mode: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `custom_event_data`<sup>Required</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.customEventData"></a>

```python
custom_event_data: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flex_match_mode`<sup>Required</sup> <a name="flex_match_mode" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```python
flex_match_mode: str
```

- *Type:* str

---

##### `game_properties`<sup>Required</sup> <a name="game_properties" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameProperties"></a>

```python
game_properties: DataAwsccGameliftMatchmakingConfigurationGamePropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList">DataAwsccGameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `game_session_data`<sup>Required</sup> <a name="game_session_data" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionData"></a>

```python
game_session_data: str
```

- *Type:* str

---

##### `game_session_queue_arns`<sup>Required</sup> <a name="game_session_queue_arns" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```python
game_session_queue_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_target`<sup>Required</sup> <a name="notification_target" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

---

##### `request_timeout_seconds`<sup>Required</sup> <a name="request_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```python
request_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_set_arn`<sup>Required</sup> <a name="rule_set_arn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```python
rule_set_arn: str
```

- *Type:* str

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetName"></a>

```python
rule_set_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tags"></a>

```python
tags: DataAwsccGameliftMatchmakingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList">DataAwsccGameliftMatchmakingConfigurationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftMatchmakingConfigurationConfig <a name="DataAwsccGameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/gamelift_matchmaking_configuration#id DataAwsccGameliftMatchmakingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftMatchmakingConfigurationGameProperties <a name="DataAwsccGameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties()
```


### DataAwsccGameliftMatchmakingConfigurationTags <a name="DataAwsccGameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftMatchmakingConfigurationGamePropertiesList <a name="DataAwsccGameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties">DataAwsccGameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftMatchmakingConfigurationGameProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties">DataAwsccGameliftMatchmakingConfigurationGameProperties</a>

---


### DataAwsccGameliftMatchmakingConfigurationTagsList <a name="DataAwsccGameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftMatchmakingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftMatchmakingConfigurationTagsOutputReference <a name="DataAwsccGameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_matchmaking_configuration

dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags">DataAwsccGameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftMatchmakingConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags">DataAwsccGameliftMatchmakingConfigurationTags</a>

---



