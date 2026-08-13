# `dataAwsccWorkspacesWorkspacesPool` Submodule <a name="`dataAwsccWorkspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesWorkspacesPool <a name="DataAwsccWorkspacesWorkspacesPool" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspaces_pool#id DataAwsccWorkspacesWorkspacesPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspacesWorkspacesPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference">DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolArn">pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.runningMode">running_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList">DataAwsccWorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.timeoutSettings">timeout_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_settings`<sup>Required</sup> <a name="application_settings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.applicationSettings"></a>

```python
application_settings: DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.capacity"></a>

```python
capacity: DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference">DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `pool_arn`<sup>Required</sup> <a name="pool_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolArn"></a>

```python
pool_arn: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tags"></a>

```python
tags: DataAwsccWorkspacesWorkspacesPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList">DataAwsccWorkspacesWorkspacesPoolTagsList</a>

---

##### `timeout_settings`<sup>Required</sup> <a name="timeout_settings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.timeoutSettings"></a>

```python
timeout_settings: DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesWorkspacesPoolApplicationSettings <a name="DataAwsccWorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings()
```


### DataAwsccWorkspacesWorkspacesPoolCapacity <a name="DataAwsccWorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity()
```


### DataAwsccWorkspacesWorkspacesPoolConfig <a name="DataAwsccWorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspaces_pool#id DataAwsccWorkspacesWorkspacesPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesWorkspacesPoolTags <a name="DataAwsccWorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags()
```


### DataAwsccWorkspacesWorkspacesPoolTimeoutSettings <a name="DataAwsccWorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">settings_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings">DataAwsccWorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings_group`<sup>Required</sup> <a name="settings_group" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesWorkspacesPoolApplicationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings">DataAwsccWorkspacesWorkspacesPoolApplicationSettings</a>

---


### DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">desired_user_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity">DataAwsccWorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_user_sessions`<sup>Required</sup> <a name="desired_user_sessions" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```python
desired_user_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesWorkspacesPoolCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity">DataAwsccWorkspacesWorkspacesPoolCapacity</a>

---


### DataAwsccWorkspacesWorkspacesPoolTagsList <a name="DataAwsccWorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesWorkspacesPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesWorkspacesPoolTagsOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags">DataAwsccWorkspacesWorkspacesPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesWorkspacesPoolTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags">DataAwsccWorkspacesWorkspacesPoolTags</a>

---


### DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspaces_pool

dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings">DataAwsccWorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect_timeout_in_seconds`<sup>Required</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_disconnect_timeout_in_seconds`<sup>Required</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds`<sup>Required</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesWorkspacesPoolTimeoutSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings">DataAwsccWorkspacesWorkspacesPoolTimeoutSettings</a>

---



