# `dataAwsccDmsMigrationProject` Submodule <a name="`dataAwsccDmsMigrationProject` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsMigrationProject <a name="DataAwsccDmsMigrationProject" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project awscc_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project#id DataAwsccDmsMigrationProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDmsMigrationProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileIdentifier">instance_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectArn">migration_project_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectCreationTime">migration_project_creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectIdentifier">migration_project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectName">migration_project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.sourceDataProviderDescriptors">source_data_provider_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList">DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList">DataAwsccDmsMigrationProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.targetDataProviderDescriptors">target_data_provider_descriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList">DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.transformationRules">transformation_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `instance_profile_identifier`<sup>Required</sup> <a name="instance_profile_identifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileIdentifier"></a>

```python
instance_profile_identifier: str
```

- *Type:* str

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `migration_project_arn`<sup>Required</sup> <a name="migration_project_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectArn"></a>

```python
migration_project_arn: str
```

- *Type:* str

---

##### `migration_project_creation_time`<sup>Required</sup> <a name="migration_project_creation_time" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectCreationTime"></a>

```python
migration_project_creation_time: str
```

- *Type:* str

---

##### `migration_project_identifier`<sup>Required</sup> <a name="migration_project_identifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectIdentifier"></a>

```python
migration_project_identifier: str
```

- *Type:* str

---

##### `migration_project_name`<sup>Required</sup> <a name="migration_project_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectName"></a>

```python
migration_project_name: str
```

- *Type:* str

---

##### `schema_conversion_application_attributes`<sup>Required</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```python
schema_conversion_application_attributes: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a>

---

##### `source_data_provider_descriptors`<sup>Required</sup> <a name="source_data_provider_descriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.sourceDataProviderDescriptors"></a>

```python
source_data_provider_descriptors: DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList">DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tags"></a>

```python
tags: DataAwsccDmsMigrationProjectTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList">DataAwsccDmsMigrationProjectTagsList</a>

---

##### `target_data_provider_descriptors`<sup>Required</sup> <a name="target_data_provider_descriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.targetDataProviderDescriptors"></a>

```python
target_data_provider_descriptors: DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList">DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList</a>

---

##### `transformation_rules`<sup>Required</sup> <a name="transformation_rules" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.transformationRules"></a>

```python
transformation_rules: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsMigrationProjectConfig <a name="DataAwsccDmsMigrationProjectConfig" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_migration_project#id DataAwsccDmsMigrationProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes <a name="DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes()
```


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptors <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors()
```


### DataAwsccDmsMigrationProjectTags <a name="DataAwsccDmsMigrationProjectTags" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags()
```


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptors <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3_bucket_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3_bucket_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_path`<sup>Required</sup> <a name="s3_bucket_path" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```python
s3_bucket_path: str
```

- *Type:* str

---

##### `s3_bucket_role_arn`<sup>Required</sup> <a name="s3_bucket_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```python
s3_bucket_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors">DataAwsccDmsMigrationProjectSourceDataProviderDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `data_provider_identifier`<sup>Required</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsMigrationProjectSourceDataProviderDescriptors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors">DataAwsccDmsMigrationProjectSourceDataProviderDescriptors</a>

---


### DataAwsccDmsMigrationProjectTagsList <a name="DataAwsccDmsMigrationProjectTagsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDmsMigrationProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDmsMigrationProjectTagsOutputReference <a name="DataAwsccDmsMigrationProjectTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags">DataAwsccDmsMigrationProjectTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsMigrationProjectTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags">DataAwsccDmsMigrationProjectTags</a>

---


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_migration_project

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors">DataAwsccDmsMigrationProjectTargetDataProviderDescriptors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `data_provider_identifier`<sup>Required</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsMigrationProjectTargetDataProviderDescriptors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors">DataAwsccDmsMigrationProjectTargetDataProviderDescriptors</a>

---



