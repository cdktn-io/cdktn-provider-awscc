# `dataAwsccWorkspaceswebUserAccessLoggingSettings` Submodule <a name="`dataAwsccWorkspaceswebUserAccessLoggingSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebUserAccessLoggingSettings <a name="DataAwsccWorkspaceswebUserAccessLoggingSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesweb_user_access_logging_settings awscc_workspacesweb_user_access_logging_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesweb_user_access_logging_settings#id DataAwsccWorkspaceswebUserAccessLoggingSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebUserAccessLoggingSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebUserAccessLoggingSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspaceswebUserAccessLoggingSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspaceswebUserAccessLoggingSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesweb_user_access_logging_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebUserAccessLoggingSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList">DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn"></a>

```python
kinesis_stream_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.tags"></a>

```python
tags: DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList">DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList</a>

---

##### `user_access_logging_settings_arn`<sup>Required</sup> <a name="user_access_logging_settings_arn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn"></a>

```python
user_access_logging_settings_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig <a name="DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesweb_user_access_logging_settings#id DataAwsccWorkspaceswebUserAccessLoggingSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebUserAccessLoggingSettingsTags <a name="DataAwsccWorkspaceswebUserAccessLoggingSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList <a name="DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_access_logging_settings

dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTags">DataAwsccWorkspaceswebUserAccessLoggingSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserAccessLoggingSettingsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserAccessLoggingSettings.DataAwsccWorkspaceswebUserAccessLoggingSettingsTags">DataAwsccWorkspaceswebUserAccessLoggingSettingsTags</a>

---



