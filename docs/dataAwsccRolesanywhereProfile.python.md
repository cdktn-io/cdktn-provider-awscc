# `dataAwsccRolesanywhereProfile` Submodule <a name="`dataAwsccRolesanywhereProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRolesanywhereProfile <a name="DataAwsccRolesanywhereProfile" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rolesanywhere_profile awscc_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rolesanywhere_profile#id DataAwsccRolesanywhereProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRolesanywhereProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRolesanywhereProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRolesanywhereProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRolesanywhereProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRolesanywhereProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.acceptRoleSessionName">accept_role_session_name</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.attributeMappings">attribute_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList">DataAwsccRolesanywhereProfileAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileArn">profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.requireInstanceProperties">require_instance_properties</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.sessionPolicy">session_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList">DataAwsccRolesanywhereProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accept_role_session_name`<sup>Required</sup> <a name="accept_role_session_name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.acceptRoleSessionName"></a>

```python
accept_role_session_name: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `attribute_mappings`<sup>Required</sup> <a name="attribute_mappings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.attributeMappings"></a>

```python
attribute_mappings: DataAwsccRolesanywhereProfileAttributeMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList">DataAwsccRolesanywhereProfileAttributeMappingsList</a>

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `managed_policy_arns`<sup>Required</sup> <a name="managed_policy_arns" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_arn`<sup>Required</sup> <a name="profile_arn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `require_instance_properties`<sup>Required</sup> <a name="require_instance_properties" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.requireInstanceProperties"></a>

```python
require_instance_properties: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_policy`<sup>Required</sup> <a name="session_policy" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tags"></a>

```python
tags: DataAwsccRolesanywhereProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList">DataAwsccRolesanywhereProfileTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRolesanywhereProfileAttributeMappings <a name="DataAwsccRolesanywhereProfileAttributeMappings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings()
```


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRules <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRules" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules()
```


### DataAwsccRolesanywhereProfileConfig <a name="DataAwsccRolesanywhereProfileConfig" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rolesanywhere_profile#id DataAwsccRolesanywhereProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRolesanywhereProfileTags <a name="DataAwsccRolesanywhereProfileTags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRolesanywhereProfileAttributeMappingsList <a name="DataAwsccRolesanywhereProfileAttributeMappingsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRolesanywhereProfileAttributeMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference <a name="DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier">specifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules">DataAwsccRolesanywhereProfileAttributeMappingsMappingRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specifier`<sup>Required</sup> <a name="specifier" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier"></a>

```python
specifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRolesanywhereProfileAttributeMappingsMappingRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRules">DataAwsccRolesanywhereProfileAttributeMappingsMappingRules</a>

---


### DataAwsccRolesanywhereProfileAttributeMappingsOutputReference <a name="DataAwsccRolesanywhereProfileAttributeMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.certificateField">certificate_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules">mapping_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList">DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings">DataAwsccRolesanywhereProfileAttributeMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_field`<sup>Required</sup> <a name="certificate_field" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.certificateField"></a>

```python
certificate_field: str
```

- *Type:* str

---

##### `mapping_rules`<sup>Required</sup> <a name="mapping_rules" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules"></a>

```python
mapping_rules: DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList">DataAwsccRolesanywhereProfileAttributeMappingsMappingRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRolesanywhereProfileAttributeMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileAttributeMappings">DataAwsccRolesanywhereProfileAttributeMappings</a>

---


### DataAwsccRolesanywhereProfileTagsList <a name="DataAwsccRolesanywhereProfileTagsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRolesanywhereProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRolesanywhereProfileTagsOutputReference <a name="DataAwsccRolesanywhereProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rolesanywhere_profile

dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags">DataAwsccRolesanywhereProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRolesanywhereProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereProfile.DataAwsccRolesanywhereProfileTags">DataAwsccRolesanywhereProfileTags</a>

---



