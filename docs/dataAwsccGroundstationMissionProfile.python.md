# `dataAwsccGroundstationMissionProfile` Submodule <a name="`dataAwsccGroundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGroundstationMissionProfile <a name="DataAwsccGroundstationMissionProfile" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/groundstation_mission_profile#id DataAwsccGroundstationMissionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGroundstationMissionProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPostPassDurationSeconds">contact_post_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPrePassDurationSeconds">contact_pre_pass_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dataflowEdges">dataflow_edges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList">DataAwsccGroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.minimumViableContactDurationSeconds">minimum_viable_contact_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.missionProfileId">mission_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsKey">streams_kms_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference">DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsRole">streams_kms_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList">DataAwsccGroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.telemetrySinkConfigArn">telemetry_sink_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.trackingConfigArn">tracking_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `contact_post_pass_duration_seconds`<sup>Required</sup> <a name="contact_post_pass_duration_seconds" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```python
contact_post_pass_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `contact_pre_pass_duration_seconds`<sup>Required</sup> <a name="contact_pre_pass_duration_seconds" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```python
contact_pre_pass_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dataflow_edges`<sup>Required</sup> <a name="dataflow_edges" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.dataflowEdges"></a>

```python
dataflow_edges: DataAwsccGroundstationMissionProfileDataflowEdgesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList">DataAwsccGroundstationMissionProfileDataflowEdgesList</a>

---

##### `minimum_viable_contact_duration_seconds`<sup>Required</sup> <a name="minimum_viable_contact_duration_seconds" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```python
minimum_viable_contact_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mission_profile_id`<sup>Required</sup> <a name="mission_profile_id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.missionProfileId"></a>

```python
mission_profile_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `streams_kms_key`<sup>Required</sup> <a name="streams_kms_key" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsKey"></a>

```python
streams_kms_key: DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference">DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `streams_kms_role`<sup>Required</sup> <a name="streams_kms_role" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.streamsKmsRole"></a>

```python
streams_kms_role: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tags"></a>

```python
tags: DataAwsccGroundstationMissionProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList">DataAwsccGroundstationMissionProfileTagsList</a>

---

##### `telemetry_sink_config_arn`<sup>Required</sup> <a name="telemetry_sink_config_arn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```python
telemetry_sink_config_arn: str
```

- *Type:* str

---

##### `tracking_config_arn`<sup>Required</sup> <a name="tracking_config_arn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.trackingConfigArn"></a>

```python
tracking_config_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGroundstationMissionProfileConfig <a name="DataAwsccGroundstationMissionProfileConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/groundstation_mission_profile#id DataAwsccGroundstationMissionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGroundstationMissionProfileDataflowEdges <a name="DataAwsccGroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges()
```


### DataAwsccGroundstationMissionProfileStreamsKmsKey <a name="DataAwsccGroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey()
```


### DataAwsccGroundstationMissionProfileTags <a name="DataAwsccGroundstationMissionProfileTags" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGroundstationMissionProfileDataflowEdgesList <a name="DataAwsccGroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference <a name="DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges">DataAwsccGroundstationMissionProfileDataflowEdges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGroundstationMissionProfileDataflowEdges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileDataflowEdges">DataAwsccGroundstationMissionProfileDataflowEdges</a>

---


### DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference <a name="DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">kms_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">kms_alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey">DataAwsccGroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_alias_arn`<sup>Required</sup> <a name="kms_alias_arn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```python
kms_alias_arn: str
```

- *Type:* str

---

##### `kms_alias_name`<sup>Required</sup> <a name="kms_alias_name" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```python
kms_alias_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGroundstationMissionProfileStreamsKmsKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileStreamsKmsKey">DataAwsccGroundstationMissionProfileStreamsKmsKey</a>

---


### DataAwsccGroundstationMissionProfileTagsList <a name="DataAwsccGroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGroundstationMissionProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGroundstationMissionProfileTagsOutputReference <a name="DataAwsccGroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_groundstation_mission_profile

dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags">DataAwsccGroundstationMissionProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGroundstationMissionProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationMissionProfile.DataAwsccGroundstationMissionProfileTags">DataAwsccGroundstationMissionProfileTags</a>

---



