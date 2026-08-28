# `dataAwsccGameliftGameSessionQueue` Submodule <a name="`dataAwsccGameliftGameSessionQueue` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftGameSessionQueue <a name="DataAwsccGameliftGameSessionQueue" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_game_session_queue awscc_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_game_session_queue#id DataAwsccGameliftGameSessionQueue#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGameliftGameSessionQueue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGameliftGameSessionQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGameliftGameSessionQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGameliftGameSessionQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftGameSessionQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.customEventData">custom_event_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList">DataAwsccGameliftGameSessionQueueDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference">DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.notificationTarget">notification_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.playerLatencyPolicies">player_latency_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList">DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.priorityConfiguration">priority_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference">DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList">DataAwsccGameliftGameSessionQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_event_data`<sup>Required</sup> <a name="custom_event_data" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.customEventData"></a>

```python
custom_event_data: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.destinations"></a>

```python
destinations: DataAwsccGameliftGameSessionQueueDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList">DataAwsccGameliftGameSessionQueueDestinationsList</a>

---

##### `filter_configuration`<sup>Required</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.filterConfiguration"></a>

```python
filter_configuration: DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference">DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_target`<sup>Required</sup> <a name="notification_target" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.notificationTarget"></a>

```python
notification_target: str
```

- *Type:* str

---

##### `player_latency_policies`<sup>Required</sup> <a name="player_latency_policies" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.playerLatencyPolicies"></a>

```python
player_latency_policies: DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList">DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList</a>

---

##### `priority_configuration`<sup>Required</sup> <a name="priority_configuration" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.priorityConfiguration"></a>

```python
priority_configuration: DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference">DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.tags"></a>

```python
tags: DataAwsccGameliftGameSessionQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList">DataAwsccGameliftGameSessionQueueTagsList</a>

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftGameSessionQueueConfig <a name="DataAwsccGameliftGameSessionQueueConfig" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/gamelift_game_session_queue#id DataAwsccGameliftGameSessionQueue#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftGameSessionQueueDestinations <a name="DataAwsccGameliftGameSessionQueueDestinations" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinations()
```


### DataAwsccGameliftGameSessionQueueFilterConfiguration <a name="DataAwsccGameliftGameSessionQueueFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfiguration()
```


### DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies <a name="DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies()
```


### DataAwsccGameliftGameSessionQueuePriorityConfiguration <a name="DataAwsccGameliftGameSessionQueuePriorityConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfiguration()
```


### DataAwsccGameliftGameSessionQueueTags <a name="DataAwsccGameliftGameSessionQueueTags" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftGameSessionQueueDestinationsList <a name="DataAwsccGameliftGameSessionQueueDestinationsList" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftGameSessionQueueDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftGameSessionQueueDestinationsOutputReference <a name="DataAwsccGameliftGameSessionQueueDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinations">DataAwsccGameliftGameSessionQueueDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftGameSessionQueueDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueDestinations">DataAwsccGameliftGameSessionQueueDestinations</a>

---


### DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference <a name="DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations">allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfiguration">DataAwsccGameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_locations`<sup>Required</sup> <a name="allowed_locations" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations"></a>

```python
allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftGameSessionQueueFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueFilterConfiguration">DataAwsccGameliftGameSessionQueueFilterConfiguration</a>

---


### DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList <a name="DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference <a name="DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">maximum_individual_player_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds">policy_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies">DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_individual_player_latency_milliseconds`<sup>Required</sup> <a name="maximum_individual_player_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```python
maximum_individual_player_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_duration_seconds`<sup>Required</sup> <a name="policy_duration_seconds" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds"></a>

```python
policy_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies">DataAwsccGameliftGameSessionQueuePlayerLatencyPolicies</a>

---


### DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference <a name="DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder">location_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder">priority_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfiguration">DataAwsccGameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_order`<sup>Required</sup> <a name="location_order" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder"></a>

```python
location_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority_order`<sup>Required</sup> <a name="priority_order" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder"></a>

```python
priority_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftGameSessionQueuePriorityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueuePriorityConfiguration">DataAwsccGameliftGameSessionQueuePriorityConfiguration</a>

---


### DataAwsccGameliftGameSessionQueueTagsList <a name="DataAwsccGameliftGameSessionQueueTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGameliftGameSessionQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGameliftGameSessionQueueTagsOutputReference <a name="DataAwsccGameliftGameSessionQueueTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_gamelift_game_session_queue

dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTags">DataAwsccGameliftGameSessionQueueTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGameliftGameSessionQueueTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftGameSessionQueue.DataAwsccGameliftGameSessionQueueTags">DataAwsccGameliftGameSessionQueueTags</a>

---



