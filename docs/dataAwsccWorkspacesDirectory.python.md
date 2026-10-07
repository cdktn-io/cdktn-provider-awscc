# `dataAwsccWorkspacesDirectory` Submodule <a name="`dataAwsccWorkspacesDirectory` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesDirectory <a name="DataAwsccWorkspacesDirectory" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#id DataAwsccWorkspacesDirectory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspacesDirectory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference">DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.certificateBasedAuthProperties">certificate_based_auth_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.customerUserName">customer_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryType">directory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpv6Addresses">dns_ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.enableSelfService">enable_self_service</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.endpointEncryptionMode">endpoint_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcConfig">idc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference">DataAwsccWorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.microsoftEntraConfig">microsoft_entra_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference">DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.registrationCode">registration_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.samlProperties">saml_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference">DataAwsccWorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.selfservicePermissions">selfservice_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference">DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.streamingProperties">streaming_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList">DataAwsccWorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.userIdentityType">user_identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryDescription">workspace_directory_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryName">workspace_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceType">workspace_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `active_directory_config`<sup>Required</sup> <a name="active_directory_config" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.activeDirectoryConfig"></a>

```python
active_directory_config: DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference">DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_based_auth_properties`<sup>Required</sup> <a name="certificate_based_auth_properties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```python
certificate_based_auth_properties: DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `customer_user_name`<sup>Required</sup> <a name="customer_user_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.customerUserName"></a>

```python
customer_user_name: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `directory_type`<sup>Required</sup> <a name="directory_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.directoryType"></a>

```python
directory_type: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_ipv6_addresses`<sup>Required</sup> <a name="dns_ipv6_addresses" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.dnsIpv6Addresses"></a>

```python
dns_ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_self_service`<sup>Required</sup> <a name="enable_self_service" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.enableSelfService"></a>

```python
enable_self_service: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint_encryption_mode`<sup>Required</sup> <a name="endpoint_encryption_mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.endpointEncryptionMode"></a>

```python
endpoint_encryption_mode: str
```

- *Type:* str

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

---

##### `idc_config`<sup>Required</sup> <a name="idc_config" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcConfig"></a>

```python
idc_config: DataAwsccWorkspacesDirectoryIdcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference">DataAwsccWorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `ip_group_ids`<sup>Required</sup> <a name="ip_group_ids" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.ipGroupIds"></a>

```python
ip_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `microsoft_entra_config`<sup>Required</sup> <a name="microsoft_entra_config" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.microsoftEntraConfig"></a>

```python
microsoft_entra_config: DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference">DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `registration_code`<sup>Required</sup> <a name="registration_code" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.registrationCode"></a>

```python
registration_code: str
```

- *Type:* str

---

##### `saml_properties`<sup>Required</sup> <a name="saml_properties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.samlProperties"></a>

```python
saml_properties: DataAwsccWorkspacesDirectorySamlPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference">DataAwsccWorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `selfservice_permissions`<sup>Required</sup> <a name="selfservice_permissions" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.selfservicePermissions"></a>

```python
selfservice_permissions: DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference">DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `streaming_properties`<sup>Required</sup> <a name="streaming_properties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.streamingProperties"></a>

```python
streaming_properties: DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tags"></a>

```python
tags: DataAwsccWorkspacesDirectoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList">DataAwsccWorkspacesDirectoryTagsList</a>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `user_identity_type`<sup>Required</sup> <a name="user_identity_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.userIdentityType"></a>

```python
user_identity_type: str
```

- *Type:* str

---

##### `workspace_access_properties`<sup>Required</sup> <a name="workspace_access_properties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceAccessProperties"></a>

```python
workspace_access_properties: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspace_creation_properties`<sup>Required</sup> <a name="workspace_creation_properties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceCreationProperties"></a>

```python
workspace_creation_properties: DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspace_directory_description`<sup>Required</sup> <a name="workspace_directory_description" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```python
workspace_directory_description: str
```

- *Type:* str

---

##### `workspace_directory_name`<sup>Required</sup> <a name="workspace_directory_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceDirectoryName"></a>

```python
workspace_directory_name: str
```

- *Type:* str

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

---

##### `workspace_type`<sup>Required</sup> <a name="workspace_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.workspaceType"></a>

```python
workspace_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesDirectoryActiveDirectoryConfig <a name="DataAwsccWorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig()
```


### DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties <a name="DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties()
```


### DataAwsccWorkspacesDirectoryConfig <a name="DataAwsccWorkspacesDirectoryConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/workspaces_directory#id DataAwsccWorkspacesDirectory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesDirectoryIdcConfig <a name="DataAwsccWorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig()
```


### DataAwsccWorkspacesDirectoryMicrosoftEntraConfig <a name="DataAwsccWorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig()
```


### DataAwsccWorkspacesDirectorySamlProperties <a name="DataAwsccWorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties()
```


### DataAwsccWorkspacesDirectorySelfservicePermissions <a name="DataAwsccWorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions()
```


### DataAwsccWorkspacesDirectoryStreamingProperties <a name="DataAwsccWorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties()
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator()
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors()
```


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings()
```


### DataAwsccWorkspacesDirectoryTags <a name="DataAwsccWorkspacesDirectoryTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags()
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessProperties <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties()
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig()
```


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints()
```


### DataAwsccWorkspacesDirectoryWorkspaceCreationProperties <a name="DataAwsccWorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">service_account_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig">DataAwsccWorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `service_account_secret_arn`<sup>Required</sup> <a name="service_account_secret_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```python
service_account_secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryActiveDirectoryConfig">DataAwsccWorkspacesDirectoryActiveDirectoryConfig</a>

---


### DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties">DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties">DataAwsccWorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### DataAwsccWorkspacesDirectoryIdcConfigOutputReference <a name="DataAwsccWorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig">DataAwsccWorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryIdcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryIdcConfig">DataAwsccWorkspacesDirectoryIdcConfig</a>

---


### DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">application_config_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig">DataAwsccWorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_config_secret_arn`<sup>Required</sup> <a name="application_config_secret_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```python
application_config_secret_arn: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryMicrosoftEntraConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryMicrosoftEntraConfig">DataAwsccWorkspacesDirectoryMicrosoftEntraConfig</a>

---


### DataAwsccWorkspacesDirectorySamlPropertiesOutputReference <a name="DataAwsccWorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">relay_state_parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">user_access_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties">DataAwsccWorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relay_state_parameter_name`<sup>Required</sup> <a name="relay_state_parameter_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```python
relay_state_parameter_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_access_url`<sup>Required</sup> <a name="user_access_url" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```python
user_access_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectorySamlProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySamlProperties">DataAwsccWorkspacesDirectorySamlProperties</a>

---


### DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference <a name="DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">change_compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">increase_volume_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">rebuild_workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">restart_workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">switch_running_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions">DataAwsccWorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_compute_type`<sup>Required</sup> <a name="change_compute_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```python
change_compute_type: str
```

- *Type:* str

---

##### `increase_volume_size`<sup>Required</sup> <a name="increase_volume_size" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```python
increase_volume_size: str
```

- *Type:* str

---

##### `rebuild_workspace`<sup>Required</sup> <a name="rebuild_workspace" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```python
rebuild_workspace: str
```

- *Type:* str

---

##### `restart_workspace`<sup>Required</sup> <a name="restart_workspace" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```python
restart_workspace: str
```

- *Type:* str

---

##### `switch_running_mode`<sup>Required</sup> <a name="switch_running_mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```python
switch_running_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectorySelfservicePermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectorySelfservicePermissions">DataAwsccWorkspacesDirectorySelfservicePermissions</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">preferred_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `preferred_protocol`<sup>Required</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```python
preferred_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">global_accelerator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">storage_connectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">streaming_experience_preferred_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">user_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties">DataAwsccWorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `global_accelerator`<sup>Required</sup> <a name="global_accelerator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```python
global_accelerator: DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">DataAwsccWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `storage_connectors`<sup>Required</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```python
storage_connectors: DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `streaming_experience_preferred_protocol`<sup>Required</sup> <a name="streaming_experience_preferred_protocol" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```python
streaming_experience_preferred_protocol: str
```

- *Type:* str

---

##### `user_settings`<sup>Required</sup> <a name="user_settings" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```python
user_settings: DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryStreamingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingProperties">DataAwsccWorkspacesDirectoryStreamingProperties</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors">DataAwsccWorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `maximum_length`<sup>Required</sup> <a name="maximum_length" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings">DataAwsccWorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### DataAwsccWorkspacesDirectoryTagsList <a name="DataAwsccWorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesDirectoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesDirectoryTagsOutputReference <a name="DataAwsccWorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags">DataAwsccWorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryTags">DataAwsccWorkspacesDirectoryTags</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">access_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_endpoint_type`<sup>Required</sup> <a name="access_endpoint_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```python
access_endpoint_type: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">internet_fallback_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```python
access_endpoints: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `internet_fallback_protocols`<sup>Required</sup> <a name="internet_fallback_protocols" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```python
internet_fallback_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">access_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">device_type_android</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">device_type_chrome_os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">device_type_ios</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">device_type_linux</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">device_type_osx</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">device_type_web</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">device_type_windows</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">device_type_work_spaces_thin_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">device_type_zero_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties">DataAwsccWorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_endpoint_config`<sup>Required</sup> <a name="access_endpoint_config" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```python
access_endpoint_config: DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `device_type_android`<sup>Required</sup> <a name="device_type_android" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```python
device_type_android: str
```

- *Type:* str

---

##### `device_type_chrome_os`<sup>Required</sup> <a name="device_type_chrome_os" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```python
device_type_chrome_os: str
```

- *Type:* str

---

##### `device_type_ios`<sup>Required</sup> <a name="device_type_ios" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```python
device_type_ios: str
```

- *Type:* str

---

##### `device_type_linux`<sup>Required</sup> <a name="device_type_linux" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```python
device_type_linux: str
```

- *Type:* str

---

##### `device_type_osx`<sup>Required</sup> <a name="device_type_osx" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```python
device_type_osx: str
```

- *Type:* str

---

##### `device_type_web`<sup>Required</sup> <a name="device_type_web" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```python
device_type_web: str
```

- *Type:* str

---

##### `device_type_windows`<sup>Required</sup> <a name="device_type_windows" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```python
device_type_windows: str
```

- *Type:* str

---

##### `device_type_work_spaces_thin_client`<sup>Required</sup> <a name="device_type_work_spaces_thin_client" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```python
device_type_work_spaces_thin_client: str
```

- *Type:* str

---

##### `device_type_zero_client`<sup>Required</sup> <a name="device_type_zero_client" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```python
device_type_zero_client: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceAccessProperties">DataAwsccWorkspacesDirectoryWorkspaceAccessProperties</a>

---


### DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_directory

dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">custom_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">default_ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enable_internet_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enable_maintenance_mode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">instance_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">user_enabled_as_local_administrator</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties">DataAwsccWorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_security_group_id`<sup>Required</sup> <a name="custom_security_group_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```python
custom_security_group_id: str
```

- *Type:* str

---

##### `default_ou`<sup>Required</sup> <a name="default_ou" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```python
default_ou: str
```

- *Type:* str

---

##### `enable_internet_access`<sup>Required</sup> <a name="enable_internet_access" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```python
enable_internet_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_maintenance_mode`<sup>Required</sup> <a name="enable_maintenance_mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```python
enable_maintenance_mode: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `instance_iam_role_arn`<sup>Required</sup> <a name="instance_iam_role_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```python
instance_iam_role_arn: str
```

- *Type:* str

---

##### `user_enabled_as_local_administrator`<sup>Required</sup> <a name="user_enabled_as_local_administrator" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```python
user_enabled_as_local_administrator: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesDirectory.DataAwsccWorkspacesDirectoryWorkspaceCreationProperties">DataAwsccWorkspacesDirectoryWorkspaceCreationProperties</a>

---



