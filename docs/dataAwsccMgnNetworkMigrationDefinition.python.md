# `dataAwsccMgnNetworkMigrationDefinition` Submodule <a name="`dataAwsccMgnNetworkMigrationDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnNetworkMigrationDefinition <a name="DataAwsccMgnNetworkMigrationDefinition" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition awscc_mgn_network_migration_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#id DataAwsccMgnNetworkMigrationDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMgnNetworkMigrationDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMgnNetworkMigrationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnNetworkMigrationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.networkMigrationDefinitionId">network_migration_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.scopeTags">scope_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.sourceConfigurations">source_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList">DataAwsccMgnNetworkMigrationDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetDeployment">target_deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetNetwork">target_network</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetS3Configuration">target_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_migration_definition_id`<sup>Required</sup> <a name="network_migration_definition_id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.networkMigrationDefinitionId"></a>

```python
network_migration_definition_id: str
```

- *Type:* str

---

##### `scope_tags`<sup>Required</sup> <a name="scope_tags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.scopeTags"></a>

```python
scope_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `source_configurations`<sup>Required</sup> <a name="source_configurations" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.sourceConfigurations"></a>

```python
source_configurations: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tags"></a>

```python
tags: DataAwsccMgnNetworkMigrationDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList">DataAwsccMgnNetworkMigrationDefinitionTagsList</a>

---

##### `target_deployment`<sup>Required</sup> <a name="target_deployment" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetDeployment"></a>

```python
target_deployment: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetNetwork"></a>

```python
target_network: DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference</a>

---

##### `target_s3_configuration`<sup>Required</sup> <a name="target_s3_configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetS3Configuration"></a>

```python
target_s3_configuration: DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnNetworkMigrationDefinitionConfig <a name="DataAwsccMgnNetworkMigrationDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#id DataAwsccMgnNetworkMigrationDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations()
```


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration()
```


### DataAwsccMgnNetworkMigrationDefinitionTags <a name="DataAwsccMgnNetworkMigrationDefinitionTags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags()
```


### DataAwsccMgnNetworkMigrationDefinitionTargetNetwork <a name="DataAwsccMgnNetworkMigrationDefinitionTargetNetwork" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork()
```


### DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration <a name="DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment">source_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration">source_s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_environment`<sup>Required</sup> <a name="source_environment" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment"></a>

```python
source_environment: str
```

- *Type:* str

---

##### `source_s3_configuration`<sup>Required</sup> <a name="source_s3_configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration"></a>

```python
source_s3_configuration: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations</a>

---


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTagsList <a name="DataAwsccMgnNetworkMigrationDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags">DataAwsccMgnNetworkMigrationDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMgnNetworkMigrationDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags">DataAwsccMgnNetworkMigrationDefinitionTags</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr">inbound_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr">inspection_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr">outbound_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology">topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork">DataAwsccMgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inbound_cidr`<sup>Required</sup> <a name="inbound_cidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr"></a>

```python
inbound_cidr: str
```

- *Type:* str

---

##### `inspection_cidr`<sup>Required</sup> <a name="inspection_cidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr"></a>

```python
inspection_cidr: str
```

- *Type:* str

---

##### `outbound_cidr`<sup>Required</sup> <a name="outbound_cidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr"></a>

```python
outbound_cidr: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology"></a>

```python
topology: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMgnNetworkMigrationDefinitionTargetNetwork
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork">DataAwsccMgnNetworkMigrationDefinitionTargetNetwork</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_network_migration_definition

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration">DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration">DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration</a>

---



