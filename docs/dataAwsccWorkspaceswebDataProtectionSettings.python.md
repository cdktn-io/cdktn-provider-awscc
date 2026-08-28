# `dataAwsccWorkspaceswebDataProtectionSettings` Submodule <a name="`dataAwsccWorkspaceswebDataProtectionSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebDataProtectionSettings <a name="DataAwsccWorkspaceswebDataProtectionSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_data_protection_settings awscc_workspacesweb_data_protection_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_data_protection_settings#id DataAwsccWorkspaceswebDataProtectionSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspaceswebDataProtectionSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspaceswebDataProtectionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebDataProtectionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn">data_protection_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration">inline_redaction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList">DataAwsccWorkspaceswebDataProtectionSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: StringMap
```

- *Type:* cdktn.StringMap

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `data_protection_settings_arn`<sup>Required</sup> <a name="data_protection_settings_arn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn"></a>

```python
data_protection_settings_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `inline_redaction_configuration`<sup>Required</sup> <a name="inline_redaction_configuration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration"></a>

```python
inline_redaction_configuration: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tags"></a>

```python
tags: DataAwsccWorkspaceswebDataProtectionSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList">DataAwsccWorkspaceswebDataProtectionSettingsTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebDataProtectionSettingsConfig <a name="DataAwsccWorkspaceswebDataProtectionSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_data_protection_settings#id DataAwsccWorkspaceswebDataProtectionSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration()
```


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns()
```


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern()
```


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder()
```


### DataAwsccWorkspaceswebDataProtectionSettingsTags <a name="DataAwsccWorkspaceswebDataProtectionSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegex">keyword_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescription">pattern_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternName">pattern_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegex">pattern_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keyword_regex`<sup>Required</sup> <a name="keyword_regex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegex"></a>

```python
keyword_regex: str
```

- *Type:* str

---

##### `pattern_description`<sup>Required</sup> <a name="pattern_description" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescription"></a>

```python
pattern_description: str
```

- *Type:* str

---

##### `pattern_name`<sup>Required</sup> <a name="pattern_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternName"></a>

```python
pattern_name: str
```

- *Type:* str

---

##### `pattern_regex`<sup>Required</sup> <a name="pattern_regex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegex"></a>

```python
pattern_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternId">built_in_pattern_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPattern">custom_pattern</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrls">enforced_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrls">exempt_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolder">redaction_place_holder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `built_in_pattern_id`<sup>Required</sup> <a name="built_in_pattern_id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternId"></a>

```python
built_in_pattern_id: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevel"></a>

```python
confidence_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_pattern`<sup>Required</sup> <a name="custom_pattern" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPattern"></a>

```python
custom_pattern: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference</a>

---

##### `enforced_urls`<sup>Required</sup> <a name="enforced_urls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrls"></a>

```python
enforced_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exempt_urls`<sup>Required</sup> <a name="exempt_urls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrls"></a>

```python
exempt_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redaction_place_holder`<sup>Required</sup> <a name="redaction_place_holder" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolder"></a>

```python
redaction_place_holder: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText">redaction_place_holder_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType">redaction_place_holder_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redaction_place_holder_text`<sup>Required</sup> <a name="redaction_place_holder_text" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText"></a>

```python
redaction_place_holder_text: str
```

- *Type:* str

---

##### `redaction_place_holder_type`<sup>Required</sup> <a name="redaction_place_holder_type" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType"></a>

```python
redaction_place_holder_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel">global_confidence_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls">global_enforced_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls">global_exempt_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatterns">inline_redaction_patterns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `global_confidence_level`<sup>Required</sup> <a name="global_confidence_level" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel"></a>

```python
global_confidence_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_enforced_urls`<sup>Required</sup> <a name="global_enforced_urls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls"></a>

```python
global_enforced_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `global_exempt_urls`<sup>Required</sup> <a name="global_exempt_urls" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls"></a>

```python
global_exempt_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inline_redaction_patterns`<sup>Required</sup> <a name="inline_redaction_patterns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatterns"></a>

```python
inline_redaction_patterns: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">DataAwsccWorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>

---


### DataAwsccWorkspaceswebDataProtectionSettingsTagsList <a name="DataAwsccWorkspaceswebDataProtectionSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesweb_data_protection_settings

dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags">DataAwsccWorkspaceswebDataProtectionSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspaceswebDataProtectionSettingsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebDataProtectionSettings.DataAwsccWorkspaceswebDataProtectionSettingsTags">DataAwsccWorkspaceswebDataProtectionSettingsTags</a>

---



