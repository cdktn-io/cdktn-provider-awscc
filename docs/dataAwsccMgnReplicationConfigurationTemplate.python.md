# `dataAwsccMgnReplicationConfigurationTemplate` Submodule <a name="`dataAwsccMgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnReplicationConfigurationTemplate <a name="DataAwsccMgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#id DataAwsccMgnReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMgnReplicationConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp">create_public_ip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol">internet_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replication_configuration_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags">staging_area_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">store_snapshot_on_local_zone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint">use_fips_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associate_default_security_group`<sup>Required</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```python
associate_default_security_group: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```python
bandwidth_throttling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_public_ip`<sup>Required</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```python
create_public_ip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_plane_routing`<sup>Required</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```python
data_plane_routing: str
```

- *Type:* str

---

##### `default_large_staging_disk_type`<sup>Required</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```python
default_large_staging_disk_type: str
```

- *Type:* str

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```python
ebs_encryption: str
```

- *Type:* str

---

##### `ebs_encryption_key_arn`<sup>Required</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```python
ebs_encryption_key_arn: str
```

- *Type:* str

---

##### `internet_protocol`<sup>Required</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```python
internet_protocol: str
```

- *Type:* str

---

##### `replication_configuration_template_id`<sup>Required</sup> <a name="replication_configuration_template_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```python
replication_configuration_template_id: str
```

- *Type:* str

---

##### `replication_server_instance_type`<sup>Required</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```python
replication_server_instance_type: str
```

- *Type:* str

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```python
replication_servers_security_groups_i_ds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```python
staging_area_subnet_id: str
```

- *Type:* str

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```python
staging_area_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `store_snapshot_on_local_zone`<sup>Required</sup> <a name="store_snapshot_on_local_zone" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```python
store_snapshot_on_local_zone: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags"></a>

```python
tags: DataAwsccMgnReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a>

---

##### `use_dedicated_replication_server`<sup>Required</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```python
use_dedicated_replication_server: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_fips_endpoint`<sup>Required</sup> <a name="use_fips_endpoint" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```python
use_fips_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnReplicationConfigurationTemplateConfig <a name="DataAwsccMgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#id DataAwsccMgnReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnReplicationConfigurationTemplateTags <a name="DataAwsccMgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnReplicationConfigurationTemplateTagsList <a name="DataAwsccMgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mgn_replication_configuration_template

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMgnReplicationConfigurationTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a>

---



