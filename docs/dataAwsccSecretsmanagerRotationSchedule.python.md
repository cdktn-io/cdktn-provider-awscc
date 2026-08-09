# `dataAwsccSecretsmanagerRotationSchedule` Submodule <a name="`dataAwsccSecretsmanagerRotationSchedule` Submodule" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecretsmanagerRotationSchedule <a name="DataAwsccSecretsmanagerRotationSchedule" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/secretsmanager_rotation_schedule#id DataAwsccSecretsmanagerRotationSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecretsmanagerRotationSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecretsmanagerRotationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecretsmanagerRotationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.externalSecretRotationMetadata">external_secret_rotation_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList">DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn">external_secret_rotation_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.hostedRotationLambda">hosted_rotation_lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate">rotate_immediately_on_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotationLambdaArn">rotation_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotationRules">rotation_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference">DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotationScheduleId">rotation_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `external_secret_rotation_metadata`<sup>Required</sup> <a name="external_secret_rotation_metadata" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.externalSecretRotationMetadata"></a>

```python
external_secret_rotation_metadata: DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList">DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a>

---

##### `external_secret_rotation_role_arn`<sup>Required</sup> <a name="external_secret_rotation_role_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn"></a>

```python
external_secret_rotation_role_arn: str
```

- *Type:* str

---

##### `hosted_rotation_lambda`<sup>Required</sup> <a name="hosted_rotation_lambda" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.hostedRotationLambda"></a>

```python
hosted_rotation_lambda: DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a>

---

##### `rotate_immediately_on_update`<sup>Required</sup> <a name="rotate_immediately_on_update" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate"></a>

```python
rotate_immediately_on_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rotation_lambda_arn`<sup>Required</sup> <a name="rotation_lambda_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotationLambdaArn"></a>

```python
rotation_lambda_arn: str
```

- *Type:* str

---

##### `rotation_rules`<sup>Required</sup> <a name="rotation_rules" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotationRules"></a>

```python
rotation_rules: DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference">DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference</a>

---

##### `rotation_schedule_id`<sup>Required</sup> <a name="rotation_schedule_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.rotationScheduleId"></a>

```python
rotation_schedule_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecretsmanagerRotationScheduleConfig <a name="DataAwsccSecretsmanagerRotationScheduleConfig" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/secretsmanager_rotation_schedule#id DataAwsccSecretsmanagerRotationSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata <a name="DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata()
```


### DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda <a name="DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda()
```


### DataAwsccSecretsmanagerRotationScheduleRotationRules <a name="DataAwsccSecretsmanagerRotationScheduleRotationRules" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList <a name="DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference <a name="DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata">DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata">DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata</a>

---


### DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference <a name="DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters">exclude_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn">master_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn">master_secret_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName">rotation_lambda_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType">rotation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn">superuser_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn">superuser_secret_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda">DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_characters`<sup>Required</sup> <a name="exclude_characters" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters"></a>

```python
exclude_characters: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `master_secret_arn`<sup>Required</sup> <a name="master_secret_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn"></a>

```python
master_secret_arn: str
```

- *Type:* str

---

##### `master_secret_kms_key_arn`<sup>Required</sup> <a name="master_secret_kms_key_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn"></a>

```python
master_secret_kms_key_arn: str
```

- *Type:* str

---

##### `rotation_lambda_name`<sup>Required</sup> <a name="rotation_lambda_name" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName"></a>

```python
rotation_lambda_name: str
```

- *Type:* str

---

##### `rotation_type`<sup>Required</sup> <a name="rotation_type" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType"></a>

```python
rotation_type: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `superuser_secret_arn`<sup>Required</sup> <a name="superuser_secret_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn"></a>

```python
superuser_secret_arn: str
```

- *Type:* str

---

##### `superuser_secret_kms_key_arn`<sup>Required</sup> <a name="superuser_secret_kms_key_arn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn"></a>

```python
superuser_secret_kms_key_arn: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: str
```

- *Type:* str

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda">DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda</a>

---


### DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference <a name="DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_rotation_schedule

dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays">automatically_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRules">DataAwsccSecretsmanagerRotationScheduleRotationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatically_after_days`<sup>Required</sup> <a name="automatically_after_days" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```python
automatically_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecretsmanagerRotationScheduleRotationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerRotationSchedule.DataAwsccSecretsmanagerRotationScheduleRotationRules">DataAwsccSecretsmanagerRotationScheduleRotationRules</a>

---



