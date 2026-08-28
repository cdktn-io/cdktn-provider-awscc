# `dataAwsccWorkspaceswebUserSettings` Submodule <a name="`dataAwsccWorkspaceswebUserSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebUserSettings <a name="DataAwsccWorkspaceswebUserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings awscc_workspacesweb_user_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings#id DataAwsccWorkspaceswebUserSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspaceswebUserSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspaceswebUserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebUserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.brandingConfiguration">branding_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cookieSynchronizationConfiguration">cookie_synchronization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.copyAllowed">copy_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.deepLinkAllowed">deep_link_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.disconnectTimeoutInMinutes">disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.downloadAllowed">download_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes">idle_disconnect_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.pasteAllowed">paste_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.printAllowed">print_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList">DataAwsccWorkspaceswebUserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.toolbarConfiguration">toolbar_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.uploadAllowed">upload_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.userSettingsArn">user_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.webAuthnAllowed">web_authn_allowed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: StringMap
```

- *Type:* cdktn.StringMap

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `branding_configuration`<sup>Required</sup> <a name="branding_configuration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.brandingConfiguration"></a>

```python
branding_configuration: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference</a>

---

##### `cookie_synchronization_configuration`<sup>Required</sup> <a name="cookie_synchronization_configuration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cookieSynchronizationConfiguration"></a>

```python
cookie_synchronization_configuration: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a>

---

##### `copy_allowed`<sup>Required</sup> <a name="copy_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.copyAllowed"></a>

```python
copy_allowed: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `deep_link_allowed`<sup>Required</sup> <a name="deep_link_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.deepLinkAllowed"></a>

```python
deep_link_allowed: str
```

- *Type:* str

---

##### `disconnect_timeout_in_minutes`<sup>Required</sup> <a name="disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.disconnectTimeoutInMinutes"></a>

```python
disconnect_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `download_allowed`<sup>Required</sup> <a name="download_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.downloadAllowed"></a>

```python
download_allowed: str
```

- *Type:* str

---

##### `idle_disconnect_timeout_in_minutes`<sup>Required</sup> <a name="idle_disconnect_timeout_in_minutes" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes"></a>

```python
idle_disconnect_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paste_allowed`<sup>Required</sup> <a name="paste_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.pasteAllowed"></a>

```python
paste_allowed: str
```

- *Type:* str

---

##### `print_allowed`<sup>Required</sup> <a name="print_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.printAllowed"></a>

```python
print_allowed: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tags"></a>

```python
tags: DataAwsccWorkspaceswebUserSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList">DataAwsccWorkspaceswebUserSettingsTagsList</a>

---

##### `toolbar_configuration`<sup>Required</sup> <a name="toolbar_configuration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.toolbarConfiguration"></a>

```python
toolbar_configuration: DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference</a>

---

##### `upload_allowed`<sup>Required</sup> <a name="upload_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.uploadAllowed"></a>

```python
upload_allowed: str
```

- *Type:* str

---

##### `user_settings_arn`<sup>Required</sup> <a name="user_settings_arn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.userSettingsArn"></a>

```python
user_settings_arn: str
```

- *Type:* str

---

##### `web_authn_allowed`<sup>Required</sup> <a name="web_authn_allowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.webAuthnAllowed"></a>

```python
web_authn_allowed: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebUserSettingsBrandingConfiguration <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration()
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata()
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings()
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata()
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata()
```


### DataAwsccWorkspaceswebUserSettingsConfig <a name="DataAwsccWorkspaceswebUserSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings#id DataAwsccWorkspaceswebUserSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration()
```


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct()
```


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct()
```


### DataAwsccWorkspaceswebUserSettingsTags <a name="DataAwsccWorkspaceswebUserSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags()
```


### DataAwsccWorkspaceswebUserSettingsToolbarConfiguration <a name="DataAwsccWorkspaceswebUserSettingsToolbarConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp">last_upload_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `last_upload_timestamp`<sup>Required</sup> <a name="last_upload_timestamp" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp"></a>

```python
last_upload_timestamp: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle">browser_tab_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText">contact_button_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink">contact_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText">loading_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText">login_button_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription">login_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle">login_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText">welcome_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browser_tab_title`<sup>Required</sup> <a name="browser_tab_title" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle"></a>

```python
browser_tab_title: str
```

- *Type:* str

---

##### `contact_button_text`<sup>Required</sup> <a name="contact_button_text" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText"></a>

```python
contact_button_text: str
```

- *Type:* str

---

##### `contact_link`<sup>Required</sup> <a name="contact_link" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink"></a>

```python
contact_link: str
```

- *Type:* str

---

##### `loading_text`<sup>Required</sup> <a name="loading_text" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText"></a>

```python
loading_text: str
```

- *Type:* str

---

##### `login_button_text`<sup>Required</sup> <a name="login_button_text" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText"></a>

```python
login_button_text: str
```

- *Type:* str

---

##### `login_description`<sup>Required</sup> <a name="login_description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription"></a>

```python
login_description: str
```

- *Type:* str

---

##### `login_title`<sup>Required</sup> <a name="login_title" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle"></a>

```python
login_title: str
```

- *Type:* str

---

##### `welcome_text`<sup>Required</sup> <a name="welcome_text" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText"></a>

```python
welcome_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp">last_upload_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `last_upload_timestamp`<sup>Required</sup> <a name="last_upload_timestamp" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp"></a>

```python
last_upload_timestamp: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme">color_theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon">favicon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata">favicon_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings">localized_strings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata">logo_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService">terms_of_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper">wallpaper</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata">wallpaper_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration">DataAwsccWorkspaceswebUserSettingsBrandingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `color_theme`<sup>Required</sup> <a name="color_theme" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme"></a>

```python
color_theme: str
```

- *Type:* str

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

---

##### `favicon_metadata`<sup>Required</sup> <a name="favicon_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata"></a>

```python
favicon_metadata: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a>

---

##### `localized_strings`<sup>Required</sup> <a name="localized_strings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings"></a>

```python
localized_strings: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a>

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `logo_metadata`<sup>Required</sup> <a name="logo_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata"></a>

```python
logo_metadata: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a>

---

##### `terms_of_service`<sup>Required</sup> <a name="terms_of_service" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService"></a>

```python
terms_of_service: str
```

- *Type:* str

---

##### `wallpaper`<sup>Required</sup> <a name="wallpaper" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper"></a>

```python
wallpaper: str
```

- *Type:* str

---

##### `wallpaper_metadata`<sup>Required</sup> <a name="wallpaper_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata"></a>

```python
wallpaper_metadata: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsBrandingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration">DataAwsccWorkspaceswebUserSettingsBrandingConfiguration</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp">last_upload_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `last_upload_timestamp`<sup>Required</sup> <a name="last_upload_timestamp" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp"></a>

```python
last_upload_timestamp: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a>

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist">allowlist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowlist`<sup>Required</sup> <a name="allowlist" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist"></a>

```python
allowlist: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a>

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist"></a>

```python
blocklist: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---


### DataAwsccWorkspaceswebUserSettingsTagsList <a name="DataAwsccWorkspaceswebUserSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspaceswebUserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebUserSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebUserSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags">DataAwsccWorkspaceswebUserSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags">DataAwsccWorkspaceswebUserSettingsTags</a>

---


### DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference <a name="DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_user_settings

dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems">hidden_toolbar_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution">max_display_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType">toolbar_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode">visual_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration">DataAwsccWorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hidden_toolbar_items`<sup>Required</sup> <a name="hidden_toolbar_items" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems"></a>

```python
hidden_toolbar_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_display_resolution`<sup>Required</sup> <a name="max_display_resolution" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution"></a>

```python
max_display_resolution: str
```

- *Type:* str

---

##### `toolbar_type`<sup>Required</sup> <a name="toolbar_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType"></a>

```python
toolbar_type: str
```

- *Type:* str

---

##### `visual_mode`<sup>Required</sup> <a name="visual_mode" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode"></a>

```python
visual_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebUserSettingsToolbarConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration">DataAwsccWorkspaceswebUserSettingsToolbarConfiguration</a>

---



