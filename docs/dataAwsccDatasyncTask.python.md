# `dataAwsccDatasyncTask` Submodule <a name="`dataAwsccDatasyncTask` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncTask <a name="DataAwsccDatasyncTask" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_task awscc_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTask(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_task#id DataAwsccDatasyncTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTask.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatasyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatasyncTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatasyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationLocationArn">destination_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationNetworkInterfaceArns">destination_network_interface_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList">DataAwsccDatasyncTaskExcludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList">DataAwsccDatasyncTaskIncludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.manifestConfig">manifest_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference">DataAwsccDatasyncTaskManifestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference">DataAwsccDatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference">DataAwsccDatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceLocationArn">source_location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceNetworkInterfaceArns">source_network_interface_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList">DataAwsccDatasyncTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskArn">task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskMode">task_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskReportConfig">task_report_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference">DataAwsccDatasyncTaskTaskReportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `destination_location_arn`<sup>Required</sup> <a name="destination_location_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationLocationArn"></a>

```python
destination_location_arn: str
```

- *Type:* str

---

##### `destination_network_interface_arns`<sup>Required</sup> <a name="destination_network_interface_arns" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationNetworkInterfaceArns"></a>

```python
destination_network_interface_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.excludes"></a>

```python
excludes: DataAwsccDatasyncTaskExcludesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList">DataAwsccDatasyncTaskExcludesList</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.includes"></a>

```python
includes: DataAwsccDatasyncTaskIncludesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList">DataAwsccDatasyncTaskIncludesList</a>

---

##### `manifest_config`<sup>Required</sup> <a name="manifest_config" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.manifestConfig"></a>

```python
manifest_config: DataAwsccDatasyncTaskManifestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference">DataAwsccDatasyncTaskManifestConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.options"></a>

```python
options: DataAwsccDatasyncTaskOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference">DataAwsccDatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.schedule"></a>

```python
schedule: DataAwsccDatasyncTaskScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference">DataAwsccDatasyncTaskScheduleOutputReference</a>

---

##### `source_location_arn`<sup>Required</sup> <a name="source_location_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceLocationArn"></a>

```python
source_location_arn: str
```

- *Type:* str

---

##### `source_network_interface_arns`<sup>Required</sup> <a name="source_network_interface_arns" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceNetworkInterfaceArns"></a>

```python
source_network_interface_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tags"></a>

```python
tags: DataAwsccDatasyncTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList">DataAwsccDatasyncTaskTagsList</a>

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskArn"></a>

```python
task_arn: str
```

- *Type:* str

---

##### `task_mode`<sup>Required</sup> <a name="task_mode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskMode"></a>

```python
task_mode: str
```

- *Type:* str

---

##### `task_report_config`<sup>Required</sup> <a name="task_report_config" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskReportConfig"></a>

```python
task_report_config: DataAwsccDatasyncTaskTaskReportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference">DataAwsccDatasyncTaskTaskReportConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncTaskConfig <a name="DataAwsccDatasyncTaskConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_task#id DataAwsccDatasyncTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncTaskExcludes <a name="DataAwsccDatasyncTaskExcludes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes()
```


### DataAwsccDatasyncTaskIncludes <a name="DataAwsccDatasyncTaskIncludes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes()
```


### DataAwsccDatasyncTaskManifestConfig <a name="DataAwsccDatasyncTaskManifestConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig()
```


### DataAwsccDatasyncTaskManifestConfigSource <a name="DataAwsccDatasyncTaskManifestConfigSource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource()
```


### DataAwsccDatasyncTaskManifestConfigSourceS3 <a name="DataAwsccDatasyncTaskManifestConfigSourceS3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3()
```


### DataAwsccDatasyncTaskOptions <a name="DataAwsccDatasyncTaskOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions()
```


### DataAwsccDatasyncTaskSchedule <a name="DataAwsccDatasyncTaskSchedule" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule()
```


### DataAwsccDatasyncTaskTags <a name="DataAwsccDatasyncTaskTags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags()
```


### DataAwsccDatasyncTaskTaskReportConfig <a name="DataAwsccDatasyncTaskTaskReportConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig()
```


### DataAwsccDatasyncTaskTaskReportConfigDestination <a name="DataAwsccDatasyncTaskTaskReportConfigDestination" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination()
```


### DataAwsccDatasyncTaskTaskReportConfigDestinationS3 <a name="DataAwsccDatasyncTaskTaskReportConfigDestinationS3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3()
```


### DataAwsccDatasyncTaskTaskReportConfigOverrides <a name="DataAwsccDatasyncTaskTaskReportConfigOverrides" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides()
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted()
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped()
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred()
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesVerified <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesVerified" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncTaskExcludesList <a name="DataAwsccDatasyncTaskExcludesList" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatasyncTaskExcludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatasyncTaskExcludesOutputReference <a name="DataAwsccDatasyncTaskExcludesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes">DataAwsccDatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskExcludes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes">DataAwsccDatasyncTaskExcludes</a>

---


### DataAwsccDatasyncTaskIncludesList <a name="DataAwsccDatasyncTaskIncludesList" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatasyncTaskIncludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatasyncTaskIncludesOutputReference <a name="DataAwsccDatasyncTaskIncludesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes">DataAwsccDatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskIncludes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes">DataAwsccDatasyncTaskIncludes</a>

---


### DataAwsccDatasyncTaskManifestConfigOutputReference <a name="DataAwsccDatasyncTaskManifestConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference">DataAwsccDatasyncTaskManifestConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig">DataAwsccDatasyncTaskManifestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.source"></a>

```python
source: DataAwsccDatasyncTaskManifestConfigSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference">DataAwsccDatasyncTaskManifestConfigSourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskManifestConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig">DataAwsccDatasyncTaskManifestConfig</a>

---


### DataAwsccDatasyncTaskManifestConfigSourceOutputReference <a name="DataAwsccDatasyncTaskManifestConfigSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference">DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource">DataAwsccDatasyncTaskManifestConfigSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.s3"></a>

```python
s3: DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference">DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskManifestConfigSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource">DataAwsccDatasyncTaskManifestConfigSource</a>

---


### DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference <a name="DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath">manifest_object_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId">manifest_object_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3">DataAwsccDatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

---

##### `manifest_object_path`<sup>Required</sup> <a name="manifest_object_path" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath"></a>

```python
manifest_object_path: str
```

- *Type:* str

---

##### `manifest_object_version_id`<sup>Required</sup> <a name="manifest_object_version_id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId"></a>

```python
manifest_object_version_id: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskManifestConfigSourceS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3">DataAwsccDatasyncTaskManifestConfigSourceS3</a>

---


### DataAwsccDatasyncTaskOptionsOutputReference <a name="DataAwsccDatasyncTaskOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.objectTags">object_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.overwriteMode">overwrite_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.posixPermissions">posix_permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserve_deleted_files</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDevices">preserve_devices</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">security_descriptor_copy_flags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.taskQueueing">task_queueing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.transferMode">transfer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.verifyMode">verify_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions">DataAwsccDatasyncTaskOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.atime"></a>

```python
atime: str
```

- *Type:* str

---

##### `bytes_per_second`<sup>Required</sup> <a name="bytes_per_second" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```python
bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.gid"></a>

```python
gid: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.mtime"></a>

```python
mtime: str
```

- *Type:* str

---

##### `object_tags`<sup>Required</sup> <a name="object_tags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.objectTags"></a>

```python
object_tags: str
```

- *Type:* str

---

##### `overwrite_mode`<sup>Required</sup> <a name="overwrite_mode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```python
overwrite_mode: str
```

- *Type:* str

---

##### `posix_permissions`<sup>Required</sup> <a name="posix_permissions" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```python
posix_permissions: str
```

- *Type:* str

---

##### `preserve_deleted_files`<sup>Required</sup> <a name="preserve_deleted_files" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```python
preserve_deleted_files: str
```

- *Type:* str

---

##### `preserve_devices`<sup>Required</sup> <a name="preserve_devices" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```python
preserve_devices: str
```

- *Type:* str

---

##### `security_descriptor_copy_flags`<sup>Required</sup> <a name="security_descriptor_copy_flags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```python
security_descriptor_copy_flags: str
```

- *Type:* str

---

##### `task_queueing`<sup>Required</sup> <a name="task_queueing" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```python
task_queueing: str
```

- *Type:* str

---

##### `transfer_mode`<sup>Required</sup> <a name="transfer_mode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.transferMode"></a>

```python
transfer_mode: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `verify_mode`<sup>Required</sup> <a name="verify_mode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```python
verify_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions">DataAwsccDatasyncTaskOptions</a>

---


### DataAwsccDatasyncTaskScheduleOutputReference <a name="DataAwsccDatasyncTaskScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule">DataAwsccDatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule">DataAwsccDatasyncTaskSchedule</a>

---


### DataAwsccDatasyncTaskTagsList <a name="DataAwsccDatasyncTaskTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatasyncTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatasyncTaskTagsOutputReference <a name="DataAwsccDatasyncTaskTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags">DataAwsccDatasyncTaskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags">DataAwsccDatasyncTaskTags</a>

---


### DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination">DataAwsccDatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.s3"></a>

```python
s3: DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination">DataAwsccDatasyncTaskTaskReportConfigDestination</a>

---


### DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn">bucket_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3">DataAwsccDatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_access_role_arn`<sup>Required</sup> <a name="bucket_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn"></a>

```python
bucket_access_role_arn: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigDestinationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3">DataAwsccDatasyncTaskTaskReportConfigDestinationS3</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds">object_version_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig">DataAwsccDatasyncTaskTaskReportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.destination"></a>

```python
destination: DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference</a>

---

##### `object_version_ids`<sup>Required</sup> <a name="object_version_ids" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds"></a>

```python
object_version_ids: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.overrides"></a>

```python
overrides: DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference</a>

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig">DataAwsccDatasyncTaskTaskReportConfig</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted">DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted">DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides">DataAwsccDatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted"></a>

```python
deleted: DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a>

---

##### `skipped`<sup>Required</sup> <a name="skipped" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped"></a>

```python
skipped: DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a>

---

##### `transferred`<sup>Required</sup> <a name="transferred" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred"></a>

```python
transferred: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a>

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.verified"></a>

```python
verified: DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides">DataAwsccDatasyncTaskTaskReportConfigOverrides</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped">DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped">DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_task

dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel">report_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified">DataAwsccDatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_level`<sup>Required</sup> <a name="report_level" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel"></a>

```python
report_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncTaskTaskReportConfigOverridesVerified
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified">DataAwsccDatasyncTaskTaskReportConfigOverridesVerified</a>

---



