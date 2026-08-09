# `dataAwsccConnectSecurityProfile` Submodule <a name="`dataAwsccConnectSecurityProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectSecurityProfile <a name="DataAwsccConnectSecurityProfile" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile awscc_connect_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile#id DataAwsccConnectSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectSecurityProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId">allowed_access_control_hierarchy_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlTags">allowed_access_control_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList">DataAwsccConnectSecurityProfileAllowedAccessControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedFlowModules">allowed_flow_modules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList">DataAwsccConnectSecurityProfileAllowedFlowModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList">DataAwsccConnectSecurityProfileApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.granularAccessControlConfiguration">granular_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.hierarchyRestrictedResources">hierarchy_restricted_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileArn">security_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileName">security_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tagRestrictedResources">tag_restricted_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList">DataAwsccConnectSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allowed_access_control_hierarchy_group_id`<sup>Required</sup> <a name="allowed_access_control_hierarchy_group_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId"></a>

```python
allowed_access_control_hierarchy_group_id: str
```

- *Type:* str

---

##### `allowed_access_control_tags`<sup>Required</sup> <a name="allowed_access_control_tags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedAccessControlTags"></a>

```python
allowed_access_control_tags: DataAwsccConnectSecurityProfileAllowedAccessControlTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList">DataAwsccConnectSecurityProfileAllowedAccessControlTagsList</a>

---

##### `allowed_flow_modules`<sup>Required</sup> <a name="allowed_flow_modules" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.allowedFlowModules"></a>

```python
allowed_flow_modules: DataAwsccConnectSecurityProfileAllowedFlowModulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList">DataAwsccConnectSecurityProfileAllowedFlowModulesList</a>

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.applications"></a>

```python
applications: DataAwsccConnectSecurityProfileApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList">DataAwsccConnectSecurityProfileApplicationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `granular_access_control_configuration`<sup>Required</sup> <a name="granular_access_control_configuration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.granularAccessControlConfiguration"></a>

```python
granular_access_control_configuration: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a>

---

##### `hierarchy_restricted_resources`<sup>Required</sup> <a name="hierarchy_restricted_resources" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.hierarchyRestrictedResources"></a>

```python
hierarchy_restricted_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_profile_arn`<sup>Required</sup> <a name="security_profile_arn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileArn"></a>

```python
security_profile_arn: str
```

- *Type:* str

---

##### `security_profile_name`<sup>Required</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.securityProfileName"></a>

```python
security_profile_name: str
```

- *Type:* str

---

##### `tag_restricted_resources`<sup>Required</sup> <a name="tag_restricted_resources" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tagRestrictedResources"></a>

```python
tag_restricted_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tags"></a>

```python
tags: DataAwsccConnectSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList">DataAwsccConnectSecurityProfileTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectSecurityProfileAllowedAccessControlTags <a name="DataAwsccConnectSecurityProfileAllowedAccessControlTags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags()
```


### DataAwsccConnectSecurityProfileAllowedFlowModules <a name="DataAwsccConnectSecurityProfileAllowedFlowModules" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules()
```


### DataAwsccConnectSecurityProfileApplications <a name="DataAwsccConnectSecurityProfileApplications" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications()
```


### DataAwsccConnectSecurityProfileConfig <a name="DataAwsccConnectSecurityProfileConfig" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_security_profile#id DataAwsccConnectSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectSecurityProfileGranularAccessControlConfiguration <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration()
```


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration()
```


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration()
```


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues()
```


### DataAwsccConnectSecurityProfileTags <a name="DataAwsccConnectSecurityProfileTags" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectSecurityProfileAllowedAccessControlTagsList <a name="DataAwsccConnectSecurityProfileAllowedAccessControlTagsList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference <a name="DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags">DataAwsccConnectSecurityProfileAllowedAccessControlTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileAllowedAccessControlTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedAccessControlTags">DataAwsccConnectSecurityProfileAllowedAccessControlTags</a>

---


### DataAwsccConnectSecurityProfileAllowedFlowModulesList <a name="DataAwsccConnectSecurityProfileAllowedFlowModulesList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference <a name="DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId">flow_module_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules">DataAwsccConnectSecurityProfileAllowedFlowModules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_module_id`<sup>Required</sup> <a name="flow_module_id" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId"></a>

```python
flow_module_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileAllowedFlowModules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileAllowedFlowModules">DataAwsccConnectSecurityProfileAllowedFlowModules</a>

---


### DataAwsccConnectSecurityProfileApplicationsList <a name="DataAwsccConnectSecurityProfileApplicationsList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectSecurityProfileApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectSecurityProfileApplicationsOutputReference <a name="DataAwsccConnectSecurityProfileApplicationsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions">application_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications">DataAwsccConnectSecurityProfileApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_permissions`<sup>Required</sup> <a name="application_permissions" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions"></a>

```python
application_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileApplications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileApplications">DataAwsccConnectSecurityProfileApplications</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration">primary_attribute_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_attribute_access_control_configuration`<sup>Required</sup> <a name="primary_attribute_access_control_configuration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration"></a>

```python
primary_attribute_access_control_configuration: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues">primary_attribute_values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_attribute_values`<sup>Required</sup> <a name="primary_attribute_values" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues"></a>

```python
primary_attribute_values: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>

---


### DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference <a name="DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration">data_table_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_table_access_control_configuration`<sup>Required</sup> <a name="data_table_access_control_configuration" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration"></a>

```python
data_table_access_control_configuration: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileGranularAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileGranularAccessControlConfiguration">DataAwsccConnectSecurityProfileGranularAccessControlConfiguration</a>

---


### DataAwsccConnectSecurityProfileTagsList <a name="DataAwsccConnectSecurityProfileTagsList" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectSecurityProfileTagsOutputReference <a name="DataAwsccConnectSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_security_profile

dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags">DataAwsccConnectSecurityProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectSecurityProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectSecurityProfile.DataAwsccConnectSecurityProfileTags">DataAwsccConnectSecurityProfileTags</a>

---



