# `dataAwsccSsoPermissionSet` Submodule <a name="`dataAwsccSsoPermissionSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsoPermissionSet <a name="DataAwsccSsoPermissionSet" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set awscc_sso_permission_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set#id DataAwsccSsoPermissionSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSsoPermissionSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSsoPermissionSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSsoPermissionSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSsoPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsoPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.customerManagedPolicyReferences">customer_managed_policy_references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList">DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.inlinePolicy">inline_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.managedPolicies">managed_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionsBoundary">permissions_boundary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.relayStateType">relay_state_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.sessionDuration">session_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList">DataAwsccSsoPermissionSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `customer_managed_policy_references`<sup>Required</sup> <a name="customer_managed_policy_references" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.customerManagedPolicyReferences"></a>

```python
customer_managed_policy_references: DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList">DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline_policy`<sup>Required</sup> <a name="inline_policy" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.inlinePolicy"></a>

```python
inline_policy: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `managed_policies`<sup>Required</sup> <a name="managed_policies" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.managedPolicies"></a>

```python
managed_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions_boundary`<sup>Required</sup> <a name="permissions_boundary" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionsBoundary"></a>

```python
permissions_boundary: DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference</a>

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionSetArn"></a>

```python
permission_set_arn: str
```

- *Type:* str

---

##### `relay_state_type`<sup>Required</sup> <a name="relay_state_type" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.relayStateType"></a>

```python
relay_state_type: str
```

- *Type:* str

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tags"></a>

```python
tags: DataAwsccSsoPermissionSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList">DataAwsccSsoPermissionSetTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsoPermissionSetConfig <a name="DataAwsccSsoPermissionSetConfig" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set#id DataAwsccSsoPermissionSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsoPermissionSetCustomerManagedPolicyReferences <a name="DataAwsccSsoPermissionSetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences()
```


### DataAwsccSsoPermissionSetPermissionsBoundary <a name="DataAwsccSsoPermissionSetPermissionsBoundary" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary()
```


### DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference <a name="DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference()
```


### DataAwsccSsoPermissionSetTags <a name="DataAwsccSsoPermissionSetTags" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList <a name="DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference <a name="DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences">DataAwsccSsoPermissionSetCustomerManagedPolicyReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoPermissionSetCustomerManagedPolicyReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences">DataAwsccSsoPermissionSetCustomerManagedPolicyReferences</a>

---


### DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---


### DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference <a name="DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">customer_managed_policy_reference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn">managed_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary">DataAwsccSsoPermissionSetPermissionsBoundary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_policy_reference`<sup>Required</sup> <a name="customer_managed_policy_reference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```python
customer_managed_policy_reference: DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `managed_policy_arn`<sup>Required</sup> <a name="managed_policy_arn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```python
managed_policy_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoPermissionSetPermissionsBoundary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary">DataAwsccSsoPermissionSetPermissionsBoundary</a>

---


### DataAwsccSsoPermissionSetTagsList <a name="DataAwsccSsoPermissionSetTagsList" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsoPermissionSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsoPermissionSetTagsOutputReference <a name="DataAwsccSsoPermissionSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_permission_set

dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags">DataAwsccSsoPermissionSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoPermissionSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags">DataAwsccSsoPermissionSetTags</a>

---



