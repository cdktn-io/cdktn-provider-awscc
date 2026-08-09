# `dataAwsccRedshiftScheduledAction` Submodule <a name="`dataAwsccRedshiftScheduledAction` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftScheduledAction <a name="DataAwsccRedshiftScheduledAction" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_scheduled_action awscc_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_scheduled_action#id DataAwsccRedshiftScheduledAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftScheduledAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRedshiftScheduledAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRedshiftScheduledAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRedshiftScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.iamRole">iam_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.nextInvocations">next_invocations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionDescription">scheduled_action_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.targetAction">target_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference">DataAwsccRedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `iam_role`<sup>Required</sup> <a name="iam_role" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.iamRole"></a>

```python
iam_role: str
```

- *Type:* str

---

##### `next_invocations`<sup>Required</sup> <a name="next_invocations" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.nextInvocations"></a>

```python
next_invocations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `scheduled_action_description`<sup>Required</sup> <a name="scheduled_action_description" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionDescription"></a>

```python
scheduled_action_description: str
```

- *Type:* str

---

##### `scheduled_action_name`<sup>Required</sup> <a name="scheduled_action_name" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionName"></a>

```python
scheduled_action_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.targetAction"></a>

```python
target_action: DataAwsccRedshiftScheduledActionTargetActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference">DataAwsccRedshiftScheduledActionTargetActionOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftScheduledActionConfig <a name="DataAwsccRedshiftScheduledActionConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_scheduled_action#id DataAwsccRedshiftScheduledAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftScheduledActionTargetAction <a name="DataAwsccRedshiftScheduledActionTargetAction" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction()
```


### DataAwsccRedshiftScheduledActionTargetActionPauseCluster <a name="DataAwsccRedshiftScheduledActionTargetActionPauseCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster()
```


### DataAwsccRedshiftScheduledActionTargetActionResizeCluster <a name="DataAwsccRedshiftScheduledActionTargetActionResizeCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster()
```


### DataAwsccRedshiftScheduledActionTargetActionResumeCluster <a name="DataAwsccRedshiftScheduledActionTargetActionResumeCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftScheduledActionTargetActionOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">pause_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">resize_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">resume_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction">DataAwsccRedshiftScheduledActionTargetAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_cluster`<sup>Required</sup> <a name="pause_cluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```python
pause_cluster: DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `resize_cluster`<sup>Required</sup> <a name="resize_cluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```python
resize_cluster: DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `resume_cluster`<sup>Required</sup> <a name="resume_cluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```python
resume_cluster: DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftScheduledActionTargetAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction">DataAwsccRedshiftScheduledActionTargetAction</a>

---


### DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster">DataAwsccRedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftScheduledActionTargetActionPauseCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster">DataAwsccRedshiftScheduledActionTargetActionPauseCluster</a>

---


### DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">classic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster">DataAwsccRedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```python
classic: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftScheduledActionTargetActionResizeCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster">DataAwsccRedshiftScheduledActionTargetActionResizeCluster</a>

---


### DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_scheduled_action

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster">DataAwsccRedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftScheduledActionTargetActionResumeCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster">DataAwsccRedshiftScheduledActionTargetActionResumeCluster</a>

---



