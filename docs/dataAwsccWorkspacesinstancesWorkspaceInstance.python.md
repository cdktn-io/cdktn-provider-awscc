# `dataAwsccWorkspacesinstancesWorkspaceInstance` Submodule <a name="`dataAwsccWorkspacesinstancesWorkspaceInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesinstancesWorkspaceInstance <a name="DataAwsccWorkspacesinstancesWorkspaceInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance#id DataAwsccWorkspacesinstancesWorkspaceInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspacesinstancesWorkspaceInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspacesinstancesWorkspaceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesinstancesWorkspaceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance">ec2_managed_instance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.managedInstance">managed_instance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provisionState">provision_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId">workspace_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `ec2_managed_instance`<sup>Required</sup> <a name="ec2_managed_instance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance"></a>

```python
ec2_managed_instance: DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a>

---

##### `managed_instance`<sup>Required</sup> <a name="managed_instance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.managedInstance"></a>

```python
managed_instance: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a>

---

##### `provision_state`<sup>Required</sup> <a name="provision_state" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.provisionState"></a>

```python
provision_state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tags"></a>

```python
tags: DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList</a>

---

##### `workspace_instance_id`<sup>Required</sup> <a name="workspace_instance_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId"></a>

```python
workspace_instance_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesinstancesWorkspaceInstanceConfig <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesinstances_workspace_instance#id DataAwsccWorkspacesinstancesWorkspaceInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags()
```


### DataAwsccWorkspacesinstancesWorkspaceInstanceTags <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn`<sup>Required</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `capacity_reservation_target`<sup>Required</sup> <a name="capacity_reservation_target" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured"></a>

```python
configured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_recovery`<sup>Required</sup> <a name="auto_recovery" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_protocol_ipv6`<sup>Required</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting">bandwidth_weighting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_weighting`<sup>Required</sup> <a name="bandwidth_weighting" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting"></a>

```python
bandwidth_weighting: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop">disable_api_stop</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized">ebs_optimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6">enable_primary_ipv6</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications">license_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions">network_performance_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings"></a>

```python
block_device_mappings: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a>

---

##### `capacity_reservation_specification`<sup>Required</sup> <a name="capacity_reservation_specification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a>

---

##### `cpu_options`<sup>Required</sup> <a name="cpu_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions"></a>

```python
cpu_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification"></a>

```python
credit_specification: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a>

---

##### `disable_api_stop`<sup>Required</sup> <a name="disable_api_stop" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop"></a>

```python
disable_api_stop: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized"></a>

```python
ebs_optimized: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_primary_ipv6`<sup>Required</sup> <a name="enable_primary_ipv6" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6"></a>

```python
enable_primary_ipv6: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions"></a>

```python
enclave_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a>

---

##### `hibernation_options`<sup>Required</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions"></a>

```python
hibernation_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a>

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a>

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `license_specifications`<sup>Required</sup> <a name="license_specifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications"></a>

```python
license_specifications: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a>

---

##### `maintenance_options`<sup>Required</sup> <a name="maintenance_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions"></a>

```python
maintenance_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions"></a>

```python
metadata_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring"></a>

```python
monitoring: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a>

---

##### `network_performance_options`<sup>Required</sup> <a name="network_performance_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions"></a>

```python
network_performance_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement"></a>

```python
placement: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a>

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications"></a>

```python
tag_specifications: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a>

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber">partition_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `partition_number`<sup>Required</sup> <a name="partition_number" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber"></a>

```python
partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags"></a>

```python
tags: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">DataAwsccWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference <a name="DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesinstances_workspace_instance

dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags">DataAwsccWorkspacesinstancesWorkspaceInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesinstancesWorkspaceInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesinstancesWorkspaceInstance.DataAwsccWorkspacesinstancesWorkspaceInstanceTags">DataAwsccWorkspacesinstancesWorkspaceInstanceTags</a>

---



