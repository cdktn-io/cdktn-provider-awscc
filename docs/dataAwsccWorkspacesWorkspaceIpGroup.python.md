# `dataAwsccWorkspacesWorkspaceIpGroup` Submodule <a name="`dataAwsccWorkspacesWorkspaceIpGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesWorkspaceIpGroup <a name="DataAwsccWorkspacesWorkspaceIpGroup" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspaces_workspace_ip_group#id DataAwsccWorkspacesWorkspaceIpGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspacesWorkspaceIpGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspacesWorkspaceIpGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspaces_workspace_ip_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesWorkspaceIpGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupDesc">group_desc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList">DataAwsccWorkspacesWorkspaceIpGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.userRules">user_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList">DataAwsccWorkspacesWorkspaceIpGroupUserRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `group_desc`<sup>Required</sup> <a name="group_desc" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupDesc"></a>

```python
group_desc: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tags"></a>

```python
tags: DataAwsccWorkspacesWorkspaceIpGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList">DataAwsccWorkspacesWorkspaceIpGroupTagsList</a>

---

##### `user_rules`<sup>Required</sup> <a name="user_rules" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.userRules"></a>

```python
user_rules: DataAwsccWorkspacesWorkspaceIpGroupUserRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList">DataAwsccWorkspacesWorkspaceIpGroupUserRulesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesWorkspaceIpGroupConfig <a name="DataAwsccWorkspacesWorkspaceIpGroupConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/workspaces_workspace_ip_group#id DataAwsccWorkspacesWorkspaceIpGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesWorkspaceIpGroupTags <a name="DataAwsccWorkspacesWorkspaceIpGroupTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags()
```


### DataAwsccWorkspacesWorkspaceIpGroupUserRules <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRules" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesWorkspaceIpGroupTagsList <a name="DataAwsccWorkspacesWorkspaceIpGroupTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference <a name="DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags">DataAwsccWorkspacesWorkspaceIpGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesWorkspaceIpGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags">DataAwsccWorkspacesWorkspaceIpGroupTags</a>

---


### DataAwsccWorkspacesWorkspaceIpGroupUserRulesList <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRulesList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspaces_workspace_ip_group

dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule">ip_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc">rule_desc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules">DataAwsccWorkspacesWorkspaceIpGroupUserRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_rule`<sup>Required</sup> <a name="ip_rule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule"></a>

```python
ip_rule: str
```

- *Type:* str

---

##### `rule_desc`<sup>Required</sup> <a name="rule_desc" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc"></a>

```python
rule_desc: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesWorkspaceIpGroupUserRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules">DataAwsccWorkspacesWorkspaceIpGroupUserRules</a>

---



