# `dataAwsccDmsReplicationConfig` Submodule <a name="`dataAwsccDmsReplicationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsReplicationConfig <a name="DataAwsccDmsReplicationConfig" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_replication_config awscc_dms_replication_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_replication_config#id DataAwsccDmsReplicationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDmsReplicationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDmsReplicationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDmsReplicationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDmsReplicationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_replication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsReplicationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.computeConfig">compute_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference">DataAwsccDmsReplicationConfigComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationConfigArn">replication_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationSettings">replication_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationType">replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList">DataAwsccDmsReplicationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.computeConfig"></a>

```python
compute_config: DataAwsccDmsReplicationConfigComputeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference">DataAwsccDmsReplicationConfigComputeConfigOutputReference</a>

---

##### `replication_config_arn`<sup>Required</sup> <a name="replication_config_arn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationConfigArn"></a>

```python
replication_config_arn: str
```

- *Type:* str

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationConfigIdentifier"></a>

```python
replication_config_identifier: str
```

- *Type:* str

---

##### `replication_settings`<sup>Required</sup> <a name="replication_settings" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationSettings"></a>

```python
replication_settings: str
```

- *Type:* str

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.replicationType"></a>

```python
replication_type: str
```

- *Type:* str

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

---

##### `supplemental_settings`<sup>Required</sup> <a name="supplemental_settings" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.supplementalSettings"></a>

```python
supplemental_settings: str
```

- *Type:* str

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.tags"></a>

```python
tags: DataAwsccDmsReplicationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList">DataAwsccDmsReplicationConfigTagsList</a>

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsReplicationConfigComputeConfig <a name="DataAwsccDmsReplicationConfigComputeConfig" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfig()
```


### DataAwsccDmsReplicationConfigConfig <a name="DataAwsccDmsReplicationConfigConfig" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_replication_config#id DataAwsccDmsReplicationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsReplicationConfigTags <a name="DataAwsccDmsReplicationConfigTags" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsReplicationConfigComputeConfigOutputReference <a name="DataAwsccDmsReplicationConfigComputeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits">max_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits">min_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.multiAz">multi_az</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId">replication_subnet_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfig">DataAwsccDmsReplicationConfigComputeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `dns_name_servers`<sup>Required</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `max_capacity_units`<sup>Required</sup> <a name="max_capacity_units" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits"></a>

```python
max_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_units`<sup>Required</sup> <a name="min_capacity_units" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits"></a>

```python
min_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.multiAz"></a>

```python
multi_az: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `replication_subnet_group_id`<sup>Required</sup> <a name="replication_subnet_group_id" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId"></a>

```python
replication_subnet_group_id: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigComputeConfig">DataAwsccDmsReplicationConfigComputeConfig</a>

---


### DataAwsccDmsReplicationConfigTagsList <a name="DataAwsccDmsReplicationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDmsReplicationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDmsReplicationConfigTagsOutputReference <a name="DataAwsccDmsReplicationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_replication_config

dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTags">DataAwsccDmsReplicationConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsReplicationConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsReplicationConfig.DataAwsccDmsReplicationConfigTags">DataAwsccDmsReplicationConfigTags</a>

---



